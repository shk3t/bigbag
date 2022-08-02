from django.db import models
from django.db.models import CASCADE
from django.contrib.auth.models import AbstractUser
from django.core.validators import validate_image_file_extension
from django.core.exceptions import ValidationError

from base.exceptions import HttpException
from base.managers import EmailUserManager

class SafeModelMixin:
    @classmethod
    def get_by_id(cls, id):
        try:
            return cls.objects.get(id=id)
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
    username = None
    first_name = None
    last_name = None
    is_active = None
    date_joined = None
    last_login = None

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    objects = EmailUserManager()

    def __str__(self):
        return self.email

    @property
    def is_active(self):
        return True


class Category(SafeModelMixin, models.Model):
    id = models.CharField(max_length=128, primary_key=True)
    name = models.CharField(max_length=128, unique=True)

    def __str__(self):
        return self.name


class Product(SafeModelMixin, models.Model):
    id = models.CharField(max_length=128, primary_key=True)
    name = models.CharField(max_length=128, unique=True)
    description = models.TextField(null=True, blank=True)
    price = models.DecimalField(max_digits=12, decimal_places=2)
    image = models.ImageField(
        null=True, blank=True, validators=[validate_image_file_extension]
    )
    category = models.ForeignKey(
        to=Category, null=True, blank=True, on_delete=models.SET_NULL
    )
    in_stock = models.BooleanField(default=True)

    def __str__(self):
        return self.name


class Order(models.Model):
    customer = models.ForeignKey(to=User, on_delete=CASCADE)
    price = models.DecimalField(max_digits=12, decimal_places=2)


class OrderItem(models.Model):
    product = models.ForeignKey(to=Product, on_delete=CASCADE)
    order = models.ForeignKey(to=Order, on_delete=CASCADE)
    quantity = models.IntegerField(default=0)
    price = models.DecimalField(max_digits=12, decimal_places=2)


# class Chat(models.Model):
#     manager = models.ForeignKey(to=User, related_name="manager_chat", on_delete=CASCADE)
#     customer = models.ForeignKey(
#         to=User, related_name="customer_chat", on_delete=CASCADE
#     )
#
#
# class Message(models.Model):
#     text = models.TextField()
#     chat = models.ForeignKey(to=Chat, on_delete=CASCADE)
#     created_at = models.DateTimeField(auto_now_add=True)
#
#     def __str__(self):
#         return self.text[:32]
