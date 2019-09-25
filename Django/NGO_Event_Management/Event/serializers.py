from django.contrib.auth.models import User, Group
from rest_framework import serializers
from .models import Event


class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ['id', 'user', 'event_name', 'category', 'location',
                  'start_time', 'end_time', 'description', 'image',
                  'adult_price', 'kid_price']
<<<<<<< HEAD
=======

>>>>>>> 0f3342054da0f2978b667e9424aae280ee97f2e1

