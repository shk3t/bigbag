from django.urls import path
from base.views import product, subtype, user, auth, email

urlpatterns = [
    path("register", auth.register),
    path("login", auth.login),
    path("logout", auth.logout),
    path("tokens/refresh", auth.refresh_tokens),

    path("users", user.UserList.as_view()),
    path("users/<int:id>", user.UserDetail.as_view()),
    path("users/authenticated", user.AuthenticatedUserDetail.as_view()),

    path("products", product.ProductList.as_view()),
    path("products/<int:id>", product.ProductDetail.as_view()),
    path("products/<str:product_id>/image", product.ImageDetial.as_view()),
    
    path("subtypes/<str:type>", subtype.BagTypeList.as_view()),
    path("subtypes/<str:type>/<str:name>", subtype.BagTypeDetail.as_view()),

    path("call-request", email.request_call),
]
