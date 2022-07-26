from transliterate import translit
from django.core.exceptions import ValidationError
from rest_framework.exceptions import APIException


class TranslitService:
    @staticmethod
    def append_id(data: dict) -> None:
        trans_name = translit(data["name"], "ru", reversed=True)
        data["id"] = trans_name.lower().replace(" ", "-").replace("'", "")
