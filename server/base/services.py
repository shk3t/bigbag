from datetime import datetime
from django.core.exceptions import ValidationError
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import AccessToken, RefreshToken
from transliterate import translit
import django.contrib.auth.password_validation as auth
from base.exceptions import HttpException

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


class EmailService:
    def request_to_message(data):
        if (
            not "name" in data
            or not "phone" in data
            or not data["name"]
            or not data["phone"]
        ):
            raise HttpException("Имя и номер телефона должны быть указаны", 400)

        message = f"Имя: {data['name']},\nТелефон: {data['phone']}"

        if "comment" in data:
            message += f"\n\nКомментарий:\n{data['comment']}"

        return message
