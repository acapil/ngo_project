from django.db import models
from user.models import User
from datetime import datetime

# Create your models here.


class Event(models.Model):
    user_id = models.ForeignKey(User, null=False, related_name='user', on_delete=models.CASCADE)
    event_name = models.CharField(max_length=100)
    category = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    start_time = models.DateTimeField(default=datetime.now)
    end_time = models.DateTimeField(default=datetime.now)

    def __str__(self):
        return self.event_name
