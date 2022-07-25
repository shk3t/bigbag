from django.urls import path
from .views import product, category, route

urlpatterns = [
    path("", route.RouteList.as_view()),
    path("routes", route.RouteList.as_view(), name="routes"),
    path("products", product.ProductList.as_view(), name="products"),
    path("products/<str:id>", product.ProductDetail.as_view(), name="product"),
    path("products/<str:product_id>/image", product.ImageDetial.as_view(), name="product_image"),
    path("categories", category.CategoryList.as_view(), name="categories"),
    path("categories/<str:id>", category.CategoryDetail.as_view(), name="category"),
]
