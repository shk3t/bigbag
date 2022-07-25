from rest_framework.response import Response
from rest_framework.views import APIView


class RouteList(APIView):
    def get(self, request):
        routes = [
            "/api/routes",
            "/api/register",
            "/api/login",
            "/api/logout",
            "/api/products",
            "/api/products/:id",
        ]
        return Response(routes)
