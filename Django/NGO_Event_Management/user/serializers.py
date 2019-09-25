from django.contrib.auth.models import User, Group
from rest_framework import serializers
from .models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'first_name', 'last_name', 'email', 'username', 'password', 'admin']
<<<<<<< HEAD
=======


>>>>>>> 0f3342054da0f2978b667e9424aae280ee97f2e1
