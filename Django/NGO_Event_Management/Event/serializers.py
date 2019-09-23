from django.contrib.auth.models import User, Group
from rest_framework import serializers
from .models import Event


class EventSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Event
        fields = ['id', 'user_id', 'category', 'location', 'start_time',
                  'end_time', 'adult_price', 'kid_price']


