from django.contrib.auth.models import User, Group
from rest_framework import serializers
from .models import EventRegistration


class EventRegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = EventRegistration
        fields = ['id', 'user', 'event', 'first_name', 'last_name',
<<<<<<< HEAD
                  'email', 'phone', 'address', 'quantity_adult', 'quantity_kid', 'total_price']
=======
                  'email', 'phone', 'address', 'quantity_adult', 'quantity_kid', 'total_price']
>>>>>>> 0f3342054da0f2978b667e9424aae280ee97f2e1
