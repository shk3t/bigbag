from typing import OrderedDict
from django.db import models
from rest_framework import serializers
from rest_framework_simplejwt.tokens import AccessToken
from base.exceptions import HttpException

from base.models import BigBag, BigBagType, PolyBag, PolyBagType, Product, User
from base.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "name", "email", "password", "is_admin", "is_manager"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        password = validated_data.pop("password")
        user = User(**validated_data)
        user.set_password(password)
        user.save()
        return user

    def update(self, user, validated_data):
        password = validated_data.pop("password", None)
        if password:
            user.set_password(password)
        for attr, value in validated_data.items():
            setattr(user, attr, value)
        user.save()
        return user


class UserWithTokenSerializer(serializers.ModelSerializer):
    user = serializers.SerializerMethodField()
    access_token = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = ["user", "access_token"]

    def get_user(self, user):
        return UserSerializer(user).data

    def get_access_token(self, user):
        access_token = AccessToken.for_user(user)
        access_token["is_admin"] = user.is_admin
        access_token["is_manager"] = user.is_manager
        return str(access_token)


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = "__all__"


class PolyBagTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = PolyBagType
        fields = "__all__"


class BigBagTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = BigBagType
        fields = "__all__"


class PolyBagSerializer(serializers.ModelSerializer):
    class Meta:
        model = PolyBag
        fields = "__all__"


class BigBagSerializer(serializers.ModelSerializer):
    class Meta:
        model = BigBag
        fields = "__all__"


class BagProductSerializer(serializers.Serializer):
    @staticmethod
    def merge_data(*serializers):
        ret = OrderedDict()
        for s in serializers:
            ret.update(s.data)
        return ret

    def run_validation(self, data):
        return data

    def to_representation(self, product):
        if not isinstance(product, models.Model):
            return product
        Bag, BagSerializer = BagMapping.for_type(product.type)
        bag = Bag.get_by_pk(product.id)
        bag_ret = BagSerializer(bag).data
        product_ret = ProductSerializer(product).data
        ret = OrderedDict()
        ret.update(product_ret)
        ret.update(bag_ret)
        return ret

    def create(self, data):
        data.pop("image", None)
        _, BagSerializer = BagMapping.for_type(data["type"])
        product_serializer = ProductSerializer(data=data)
        product_serializer.is_valid(raise_exception=True)
        product = product_serializer.save()
        data["id"] = product.id
        bag_serializer = BagSerializer(data=data)
        if not bag_serializer.is_valid():
            product.delete()
            raise HttpException(bag_serializer.errors, 400)
        bag_serializer.save()
        return self.merge_data(product_serializer, bag_serializer)

    def update(self, product, data):
        data.pop("image", None)
        Bag, BagSerializer = BagMapping.for_type(product.type)
        if "type" in data and data["type"] != product.type:
            raise HttpException({"type": ["Изменение значения запрещено"]}, 400)
        bag = Bag.get_by_pk(product.id)
        product_serializer = ProductSerializer(product, data=data, partial=True)
        bag_serializer = BagSerializer(bag, data=data, partial=True)
        product_serializer.is_valid(raise_exception=True)
        bag_serializer.is_valid(raise_exception=True)
        product_serializer.save()
        bag_serializer.save()
        return self.merge_data(product_serializer, bag_serializer)


class BagMapping:
    BAG_MAPPING = {
        Product.ProductType.POLY_BAG: (PolyBag, PolyBagSerializer),
        Product.ProductType.BIG_BAG: (BigBag, BigBagSerializer),
        "polybag": (PolyBag, PolyBagSerializer),
        "bigbag": (BigBag, BigBagSerializer),
    }

    BAG_TYPE_MAPPING = {
        Product.ProductType.POLY_BAG: (PolyBagType, PolyBagTypeSerializer),
        Product.ProductType.BIG_BAG: (BigBagType, BigBagTypeSerializer),
        "polybag": (PolyBagType, PolyBagTypeSerializer),
        "bigbag": (BigBagType, BigBagTypeSerializer),
    }

    @staticmethod
    def for_type(type, type_model=False):
        try:
            if type_model:
                return BagMapping.BAG_TYPE_MAPPING[type]
            return BagMapping.BAG_MAPPING[type]
        except KeyError:
            raise HttpException({"type": [f'Недопустимое значение: "{type}"']}, 400)
