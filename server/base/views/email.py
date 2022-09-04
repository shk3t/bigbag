from datetime import datetime
from django.core.mail import EmailMessage, send_mail
from rest_framework.decorators import api_view
from rest_framework.response import Response

from base.services import EmailService


@api_view(["POST"])
def request_call(request):
    data = request.data
    message = EmailService.request_to_message(data)

    send_mail(
        "Заказ звонка",
        message,
        "sfdm-service@mail.ru",
        ["dansikdudok@mail.ru"],
        fail_silently=False,
    )
    return Response("Sended")


@api_view(["POST"])
def request_with_cart(request):
    request_data = request.data["request"]
    cart_data = request.data["cart"]
    message = EmailService.request_to_message(request_data)

    email = EmailMessage(
        "Заявка с корзиной",
        message,
        "sfdm-service@mail.ru",
        ["dansikdudok@mail.ru"],
    )

    if cart_data:
        filename = f"{request_data['name']}_{datetime.now().strftime('%d%m%y_%H%M%S')}_cart.csv"
        csv = "Наименование,Количество,Цена за штуку,Общая цена\n"
        total_price = 0.0
        price_on_request = False
        for item in cart_data:
            if item["price"]:
                entry_price = item["quantity"] * item["price"]
                total_price += entry_price
                csv += f"{item['name']},{item['quantity']},{item['price'] : .2f},{entry_price}\n"
            else:
                price_on_request = True
                csv += f"{item['name']},{item['quantity']},-,-\n"
        csv += f"\nИтого,{total_price : .2f}"
        if price_on_request:
            csv += ",Запрос цены"
        email.attach(filename, csv, "text/csv")

    email.send(fail_silently=False)
    return Response("Sended")
