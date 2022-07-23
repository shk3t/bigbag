from rest_framework.decorators import api_view
from rest_framework.response import Response

from base.models import Product
from .serializers import ProductSerializer


@api_view(["GET"])
def list_routes(request):
    routes = [
        "/api/routes",
        "/api/register",
        "/api/login",
        "/api/logout",
        "/api/products",
        "/api/products/:id",
    ]
    return Response(routes)


@api_view(["GET"])
def list_products(request):
    products = Product.objects.all()
    products = ProductSerializer(products, many=True).data
    return Response(products)


@api_view(["GET"])
def get_product(request, id):
    product = Product.objects.get(id=id)
    product = ProductSerializer(product, many=False).data
    return Response(product)
