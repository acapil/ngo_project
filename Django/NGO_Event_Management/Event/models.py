from django.db import models
from user.models import User
from datetime import datetime

# Create your models here.

COLOR_CHOICES = (
    ('spiritual', 'SPIRITUAL'),
    ('religious', 'RELIGIOUS'),
    ('charity', 'CHARITY'),
    ('social', 'SOCIAL'),
    ('other', 'OTHER')
)

class Event(models.Model):
    user = models.ForeignKey(User, null=False, related_name='event_creator',
                             verbose_name='Creator', on_delete=models.CASCADE)
    event_name = models.CharField(max_length=100)
    category = models.CharField(max_length=100, choices=COLOR_CHOICES, default='other')
    location = models.CharField(max_length=100)
    start_time = models.DateTimeField(default=datetime.now)
    end_time = models.DateTimeField(default=datetime.now)
    description = models.CharField(max_length=100)
    image = models.ImageField(blank=False, null=False)
    adult_price = models.DecimalField(max_digits=8, decimal_places=2, default=5.00)
    kid_price = models.DecimalField(max_digits=8, decimal_places=2, default=2.00)

    def __str__(self):
        return self.event_name