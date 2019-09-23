from django.contrib.auth.models import User, Group
from rest_framework import serializers
from .models import Employee


class EmployeeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Employee
        fields = ['id', 'first_name', 'last_name', 'department', 'salary']


