from rest_framework.response import Response
from rest_framework.views import APIView, status
from rest_framework.permissions import IsAdminUser

from base.serializers import UserSerializer
from base.models import User


class UserList(APIView):
    permission_classes = [IsAdminUser]

    def get(self, request):
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)


class UserDetail(APIView):
    permission_classes = [IsAdminUser]

    def get(self, request, id):
        user = User.get_by_id(id)
        serializer = UserSerializer(user)
        return Response(serializer.data)