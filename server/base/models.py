from django.db import models
from django.db.models import CASCADE
from django.contrib.auth.models import User


class Category(models.Model):
    # TODO str id translit
    name = models.CharField(max_length=256, primary_key=True)
    description = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.name


class Product(models.Model):
    # TODO str id translit
    name = models.CharField(max_length=256, primary_key=True)
    description = models.TextField(null=True, blank=True)
    price = models.DecimalField(max_digits=12, decimal_places=2)
    image = models.ImageField(null=True, blank=True)
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


class Chat(models.Model):
    manager = models.ForeignKey(to=User, related_name="manager_chat", on_delete=CASCADE)
    customer = models.ForeignKey(to=User, related_name="customer_chat", on_delete=CASCADE)


class Message(models.Model):
    text = models.TextField()
    chat = models.ForeignKey(to=Chat, on_delete=CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text[:32]
