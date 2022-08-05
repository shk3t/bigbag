from datetime import datetime
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import AccessToken, RefreshToken
from transliterate import translit

from base.models import User
from base.serializers import UserWithTokenSerializer


class TranslitService:
    @staticmethod
    def append_id(data: dict) -> None:
        trans_name = translit(data["name"], "ru", reversed=True)
        data["id"] = trans_name.lower().replace(" ", "-").replace("'", "")


class AuthService:
    def tokenized_response(user: User) -> Response:
        refresh_token = RefreshToken.for_user(user)
        serializer = UserWithTokenSerializer(user)
        response = Response(serializer.data)
        response.set_cookie(
            key="refresh_token",
            value=str(refresh_token),
            expires=datetime.fromtimestamp(refresh_token["exp"]),
            httponly=True,
        )
        return response
