from django.core.mail import send_mail
from rest_framework.decorators import api_view
from rest_framework.response import Response

from base.exceptions import HttpException


@api_view(["POST"])
def request_call(request):
    data = request.data
    try:
        message = f"Имя: {data['name']},\nТелефон: {data['phone']}"
    except KeyError:
        raise HttpException("Имя и номер телефона должны быть указаны", 400)

    if "comment" in data:
        message += f"\n\nКомментарий:\n{data['comment']}"

    send_mail(
        "Заказ звонка",
        message,
        "sfdm-service@mail.ru",
        ["dansikdudok@mail.ru"],
        fail_silently=False,
    )
    return Response("Sended")
