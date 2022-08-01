from django.contrib import admin
from base.models import Product, Category, Order, OrderItem, User


admin.site.register(
    [
        Product,
        Category,
        Order,
        OrderItem,
        User
    ]
)
