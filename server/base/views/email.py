from django.core.mail import send_mail
from rest_framework.decorators import api_view
from rest_framework.response import Response

from base.services import EmailService


@api_view(["POST"])
def request_call(request):
    data = request.data
    message = EmailService.request_to_message(data)

    # send_mail(
    #     "Заказ звонка",
    #     message,
    #     "sfdm-service@mail.ru",
    #     ["dansikdudok@mail.ru"],
    #     fail_silently=False,
    # )
    print(message)
    return Response("Sended")


@api_view(["POST"])
def request_with_cart(request):
    request_data = request.data["request"]
    cart_data = request.data["cart"]
    message = EmailService.request_to_message(request_data)

    if cart_data:
        message += "\n\nКорзина:\n"
        message += f"{'Наименование' : <32}{'Количество' : <16}{'Цена за штуку' : <16}{'Общая цена' : <16}\n"
        total_price = 0.0
        for item in cart_data:
            entry_price = item["quantity"] * item["price"]
            total_price += entry_price
            message += f"{item['name'] : <32}{item['quantity'] : <16}{item['price'] : <16.2f}{entry_price : <16.0f}\n"
        message += f"Итого: {total_price} руб"

    # send_mail(
    #     "Заявка с корзиной",
    #     message,
    #     "sfdm-service@mail.ru",
    #     ["dansikdudok@mail.ru"],
    #     fail_silently=False,
    # )
    print(message)
    return Response("Sended")
