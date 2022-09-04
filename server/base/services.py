import re
from datetime import datetime
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import AccessToken, RefreshToken
from transliterate import translit
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
        errors = {}
        if not "name" in data or not data["name"]:
            errors["Имя"] = ["Это поле не может быть пустым."]
        elif not re.fullmatch(r"[A-Za-zА-Яа-я\s]+", data["name"]):
            errors["Имя"] = ["Введены некорректные данные."]
        if not "phone" in data or not data["phone"]:
            errors["Тел."] = ["Это поле не может быть пустым."]
        # elif not re.fullmatch(r"^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$", data["phone"]):
        elif not re.fullmatch(r"[\+\-\(\)\s0-9]+", data["phone"]):
            errors["Тел."] = ["Введены некорректные данные."]
        if errors:
            raise HttpException(errors, 400)

        message = f"Имя: {data['name']},\nТелефон: {data['phone']}"

        if "comment" in data:
            message += f"\n\nКомментарий:\n{data['comment']}"

        return message
