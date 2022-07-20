from django.urls import path
from . import views

urlpatterns = [
    path("", views.list_routes),
    path("routes", views.list_routes, name="routes"),
    path("products", views.list_products, name="products"),
    path("products/<int:id>", views.get_product, name="get_product"),
]
