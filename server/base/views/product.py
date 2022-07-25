from rest_framework.response import Response
from rest_framework.views import APIView, status

from ..services import TranslitService
from ..models import Product
from ..serializers import ProductSerializer


class ProductList(APIView):
    def get(self, request):
        products = Product.objects.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)

    def post(self, request):
        product_data = request.data
        TranslitService.append_id(product_data)
        serializer = ProductSerializer(data=product_data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ProductDetail(APIView):
    def get(self, request, id):
        product = Product.get_by_id(id)
        serializer = ProductSerializer(product)
        return Response(serializer.data)

    def put(self, request, id):
        product = Product.get_by_id(id)
        updated_data = request.data
        if "name" in updated_data:
            TranslitService.append_id(updated_data)
            product.delete()
        serializer = ProductSerializer(product, data=updated_data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id):
        product = Product.get_by_id(id)
        product.image.delete()
        product.delete()
        return Response("Product deleted")


class ImageDetial(APIView):
    def put(self, request, product_id):
        product = Product.get_by_id(product_id)
        product.image.delete()
        product.image = request.FILES.get("image")
        product.validate()
        product.save()
        return Response("Image updated")

    def delete(self, request, product_id):
        product = Product.get_by_id(product_id)
        product.image.delete()
        return Response("Image deleted")
