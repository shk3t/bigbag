from rest_framework.response import Response
from rest_framework.views import APIView
from base.permissions import ReadOnlyMixin

from base.serializers import BagMapping


class BagTypeList(ReadOnlyMixin, APIView):
    def get(self, request, type):
        BagType, BagTypeSerializer = BagMapping.for_type(type, type_model=True)
        bag_types = BagType.objects.all()
        serializer = BagTypeSerializer(bag_types, many=True)
        return Response(serializer.data)

    def post(self, request, type):
        _, BagTypeSerializer = BagMapping.for_type(type, type_model=True)
        serializer = BagTypeSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)


class BagTypeDetail(ReadOnlyMixin, APIView):
    def put(self, request, type, subtype):
        Bag, _ = BagMapping.for_type(type)
        BagType, _ = BagMapping.for_type(type, type_model=True)
        response = BagTypeList.post(self, request, type)
        related_bags = Bag.objects.filter(subtype=subtype)
        for bag in related_bags:
            bag.subtype = BagType(**response.data)
            bag.save()
        BagTypeDetail.delete(self, request, type, subtype)
        return response

    def delete(self, request, type, subtype):
        BagType, _ = BagMapping.for_type(type, type_model=True)
        bag_type = BagType.get_by_pk(subtype)
        bag_type.delete()
        return Response("Subtype deleted")
