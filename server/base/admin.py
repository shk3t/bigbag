from django.contrib import admin
from .models import Product, Category, Chat, Message, Order, OrderItem


admin.site.register(
    [
        Product,
        Category,
        Chat,
        Message,
        Order,
        OrderItem,
    ]
)
