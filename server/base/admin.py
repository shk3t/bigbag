from django.contrib import admin
from .models import Product, Category, Order, OrderItem


admin.site.register(
    [
        Product,
        Category,
        Order,
        OrderItem,
    ]
)
