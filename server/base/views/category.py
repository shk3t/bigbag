from rest_framework.response import Response
from rest_framework.views import APIView, status

from ..services import TranslitService
from ..models import Category
from ..serializers import CategorySerializer


class CategoryList(APIView):
    def get(self, request):
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data)

    def post(self, request):
        category_data = request.data
        TranslitService.append_id(category_data)
        serializer = CategorySerializer(data=category_data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class CategoryDetail(APIView):
    def get(self, request, id):
        category = Category.get_by_id(id)
        serializer = CategorySerializer(category)
        return Response(serializer.data)

    def delete(self, request, id):
        category = Category.get_by_id(id)
        category.delete()
        return Response("Category deleted")
