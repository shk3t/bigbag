from rest_framework.exceptions import AuthenticationFailed
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework_simplejwt.exceptions import InvalidToken
from rest_framework_simplejwt.tokens import RefreshToken, TokenError

from base.exceptions import HttpException
from base.serializers import UserSerializer
from base.models import User
from base.services import AuthService


@api_view(["POST"])
def register(request):
    serializer = UserSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    user = serializer.save()
    return AuthService.tokenized_response(user)


@api_view(["POST"])
def login(request):
    try:
        user = User.objects.get(email=request.data["email"])
    except User.DoesNotExist:
        raise AuthenticationFailed()
    if not user.check_password(request.data["password"]):
        raise AuthenticationFailed()
    user.update_last_login()
    return AuthService.tokenized_response(user)


@api_view(["POST"])
def logout(request):
    response = Response("Logouted")
    response.delete_cookie("refresh_token")
    return response


@api_view(["POST"])
def refresh_tokens(request):
    raw_token = request.COOKIES.get("refresh_token")
    try:
        if not raw_token:
            raise InvalidToken
        refresh_token = RefreshToken(raw_token)
    except TokenError as error:
        raise HttpException(error, 401)
    user = User.get_by_pk(refresh_token["user_id"])
    user.update_last_login()
    return AuthService.tokenized_response(user)
