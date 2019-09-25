from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

class User(AbstractUser):
    # first_name = models.CharField(max_length=100)
    # last_name = models.CharField(max_length=100)
    # email = models.CharField(max_length=100)
    # password = models.CharField(max_length=100)
    admin = models.BooleanField(default=False)

    def __str__(self):
<<<<<<< HEAD
        return self.username
=======
        return self.username
>>>>>>> 0f3342054da0f2978b667e9424aae280ee97f2e1
