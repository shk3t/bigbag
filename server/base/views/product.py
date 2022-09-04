from rest_framework.response import Response
from rest_framework.views import APIView

from base.models import Product
from base.permissions import IsAdminOrReadOnly
from base.serializers import BagProductSerializer, BagMapping


class ProductList(APIView):
    permission_classes = [IsAdminOrReadOnly]

    def get(self, request):
        type_param = request.query_params.get("type")
        products = Product.objects.all()
        if type_param and type_param != "all":
            products = products.filter(type=type_param)
        serializer = BagProductSerializer(products, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = BagProductSerializer(data=request.data)
        serializer.is_valid()
        serializer.save()
        return Response(serializer.data)


class ProductDetail(APIView):
    permission_classes = [IsAdminOrReadOnly]

    def get(self, request, id):
        product = Product.get_by_pk(id)
        serializer = BagProductSerializer(product)
        return Response(serializer.data)

    def put(self, request, id):
        product = Product.get_by_pk(id)
        serializer = BagProductSerializer(product, data=request.data, partial=True)
        serializer.is_valid()
        serializer.save()
        return Response(serializer.data)

    def delete(self, request, id):
        product = Product.get_by_pk(id)
        Bag, _ = BagMapping.for_type(product.type)
        bag = Bag.get_by_pk(id)
        product.image.delete()
        product.delete()
        bag.delete()
        return Response("Product deleted")


class ImageDetial(APIView):
    permission_classes = [IsAdminOrReadOnly]

    def put(self, request, product_id):
        product = Product.get_by_pk(product_id)
        product.image.delete()
        product.image = request.FILES.get("image")
        product.validate()
        product.save()
        serializer = BagProductSerializer(product)
        return Response(serializer.data["image"])

    def delete(self, request, product_id):
        product = Product.get_by_pk(product_id)
        product.image.delete()
        return Response("Image deleted")
