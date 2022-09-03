from django.db import models
from django.contrib.auth.models import AbstractUser
from django.core.validators import validate_image_file_extension
from django.core.exceptions import ValidationError
from django.utils import timezone

from base.exceptions import HttpException
from base.managers import EmailUserManager
from base.utils import attribute_names
from base.validators import password_validator


class SafeModelMixin:
    @classmethod
    def get_by_pk(cls, pk):
        try:
            return cls.objects.get(pk=pk)
        except cls.DoesNotExist as error:
            raise HttpException(error, 404)

    def validate(self):
        try:
            self.full_clean()
        except ValidationError as error:
            raise HttpException(dict(error), 400)


class User(AbstractUser, SafeModelMixin):
    name = models.CharField(max_length=128, null=True, blank=True)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=128, validators=[password_validator])
    last_login = models.DateTimeField(default=timezone.now, blank=True)
    is_admin = models.BooleanField(default=False)
    is_manager = models.BooleanField(default=False)
    username = None
    first_name = None
    last_name = None
    date_joined = None
    is_staff = None
    is_active = None
    is_superuser = None
    groups = None
    user_permissions = None

    objects = EmailUserManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    @property
    def is_active(self):
        return True

    def update_last_login(self):
        self.last_login = timezone.now()
        self.save()


@attribute_names
class Product(SafeModelMixin, models.Model):
    # class OptionalPriceFieldFactory(models.DecimalField):
    #     def create():
    #         return models.DecimalField(
    #             max_digits=12, decimal_places=2, null=True, blank=True
    #         )

    class ProductType(models.TextChoices):
        POLY_BAG = "Мешки полипропиленовые"
        BIG_BAG = "МКР (биг-бэг)"

    type = models.CharField(max_length=128, choices=ProductType.choices)
    image = models.ImageField(
        upload_to="products",
        null=True,
        blank=True,
        validators=[validate_image_file_extension],
    )
    price = models.DecimalField(max_digits=12, decimal_places=2, null=True, blank=True)
    # price100 = OptionalPriceFieldFactory.create()
    # price200 = OptionalPriceFieldFactory.create()
    # price500 = OptionalPriceFieldFactory.create()
    # price1000 = OptionalPriceFieldFactory.create()
    # price3000 = OptionalPriceFieldFactory.create()
    # price5000 = OptionalPriceFieldFactory.create()
    # price10000 = OptionalPriceFieldFactory.create()
    # price30000 = OptionalPriceFieldFactory.create()
    price_on_request = models.BooleanField(default=False)
    in_stock = models.BooleanField(default=True)
    new = models.BooleanField(default=False)
    sale = models.BooleanField(default=False)


class PolyBagType(SafeModelMixin, models.Model):
    name = models.CharField(max_length=128, primary_key=True)


class BigBagType(SafeModelMixin, models.Model):
    name = models.CharField(max_length=128, primary_key=True)


class PolyBag(SafeModelMixin, models.Model):
    id = models.OneToOneField(
        to=Product, db_column="id", primary_key=True, on_delete=models.CASCADE
    )
    subtype = models.ForeignKey(
        to=PolyBagType,
        db_column="subtype",
        null=True,
        on_delete=models.SET_NULL,
    )
    size = models.CharField(max_length=128)
    tag = models.CharField(max_length=128, null=True)
    color = models.CharField(max_length=128)
    poly_grade = models.CharField(max_length=128)
    bag_weight = models.IntegerField()
    weight_error = models.IntegerField(default=3)
    items_per_pack = models.IntegerField()


class BigBag(SafeModelMixin, models.Model):
    id = models.OneToOneField(
        to=Product, db_column="id", primary_key=True, on_delete=models.CASCADE
    )
    subtype = models.ForeignKey(
        to=BigBagType,
        db_column="subtype",
        null=True,
        on_delete=models.SET_NULL,
    )
    size = models.CharField(max_length=128)
    tag = models.CharField(max_length=128, null=True)
    top_modification = models.CharField(max_length=128)
    bottom_modification = models.CharField(max_length=128)
    bag_weight = models.DecimalField(max_digits=12, decimal_places=3)
    items_per_pack = models.IntegerField()
    pack_size = models.CharField(max_length=128)
    pack_volume = models.DecimalField(max_digits=12, decimal_places=3)
