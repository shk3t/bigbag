from django.contrib import admin
from base.models import User, Product, PolyBagType, PolyBag, BigBagType, BigBag


admin.site.register([User, Product, PolyBagType, PolyBag, BigBagType, BigBag])
