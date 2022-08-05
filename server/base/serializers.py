from rest_framework import serializers
from rest_framework_simplejwt.tokens import AccessToken

from base.models import Category, Product, User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "name", "email", "password"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        password = validated_data.pop("password")
        user = User(**validated_data)
        user.set_password(password)
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
        return str(AccessToken.for_user(user))


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = "__all__"


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"
