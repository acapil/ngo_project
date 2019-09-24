from django.db import models
from user.models import User
from event.models import Event
from datetime import datetime

# Create your models here.


class EventRegistration(models.Model):
    user = models.ForeignKey(User, null=False, related_name='event_participant', on_delete=models.CASCADE)
    event = models.ForeignKey(Event, null=False, related_name='event', on_delete=models.CASCADE)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    phone = models.CharField(max_length=100)
    address = models.CharField(max_length=100)
    quantity_adult = models.IntegerField(default=0)
    quantity_kid = models.IntegerField(default=0)

    def __str__(self):
        return self.first_name
