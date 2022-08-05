from django.urls import path
from base.views import product, category, user, auth

urlpatterns = [
    path("register", auth.register),
    path("login", auth.login),
    path("tokens/refresh", auth.refresh_tokens),

    path("users", user.UserList.as_view()),
    path("users/<int:id>", user.UserDetail.as_view()),
    path("users/current", user.CurrentUserDetail.as_view()),

    path("categories", category.CategoryList.as_view()),
    path("categories/<str:id>", category.CategoryDetail.as_view()),

    path("products", product.ProductList.as_view()),
    path("products/<str:id>", product.ProductDetail.as_view()),
    path("products/<str:product_id>/image", product.ImageDetial.as_view()),
]
