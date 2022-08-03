from rest_framework.exceptions import AuthenticationFailed
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework_simplejwt.tokens import RefreshToken, TokenError
from base.exceptions import HttpException

from base.serializers import UserSerializer
from base.models import User
from base.services import AuthService


@api_view(["POST"])
def register(request):
    user = User(**request.data)
    serializer = UserSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    serializer.save()
    return AuthService.tokenized_response(user)


@api_view(["POST"])
def login(request):
    try:
        user = User.objects.get(email=request.data["email"])
    except User.DoesNotExist:
        raise AuthenticationFailed()
    if not user.check_password(request.data["password"]):
        raise AuthenticationFailed()
    return AuthService.tokenized_response(user)


@api_view(["GET"])
def refresh_tokens(request):
    raw_token = request.COOKIES.get("refresh_token")
    try:
        refresh_token = RefreshToken(raw_token)
    except TokenError as error:
        raise HttpException(error, 401)
    user = User.objects.get(id=refresh_token["user_id"])
    return AuthService.tokenized_response(user)
