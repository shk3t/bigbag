from rest_framework.response import Response
from rest_framework.views import APIView, status
from base.permissions import ReadOnlyMixin

from base.services import TranslitService
from base.models import Category
from base.serializers import CategorySerializer


class CategoryList(ReadOnlyMixin, APIView):
    def get(self, request):
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data)

    def post(self, request):
        category_data = request.data
        TranslitService.append_id(category_data)
        serializer = CategorySerializer(data=category_data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)


class CategoryDetail(ReadOnlyMixin, APIView):
    def get(self, request, id):
        category = Category.get_by_id(id)
        serializer = CategorySerializer(category)
        return Response(serializer.data)

    def delete(self, request, id):
        category = Category.get_by_id(id)
        category.delete()
        return Response("Category deleted")
