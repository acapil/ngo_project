from django.contrib.auth.models import User, Group
from rest_framework import serializers
from Event.models import Event


class EventRegistrationSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Event
        fields = ['id', 'user_id', 'event_id', 'first_name', 'last_name',
                  'email', 'phone', 'address', 'quantity_adult', 'quantity_kid']
