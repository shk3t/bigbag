from django.db.models.signals import post_save
from django.dispatch import receiver
from base.models import User

@receiver(post_save, sender=User)
def save_user(sender, instance, **kwargs):
    pass
    # print("post_save signal triggered")
