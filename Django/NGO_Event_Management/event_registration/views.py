from django.shortcuts import render
from django.contrib.auth.models import User, Group
from .models import EventRegistration
from rest_framework import viewsets
from event_registration.serializers import EventRegistrationSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

# Create your views here.

# class EmployeeViewSet(viewsets.ModelViewSet):
#     queryset = Event.objects.all()
#     serializer_class = EventSerializer


@api_view(['GET'])
def get_event_registrations(request):
    if request.method == 'GET':
        event = EventRegistration.objects.all()
        serializer = EventRegistrationSerializer(event, many=True)
        return Response(serializer.data)
    else:
        return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def get_event_registration(request, event_registration_id):
    try:
        event_registration = EventRegistration.objects.get(id=event_registration_id)
    except EventRegistration.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == 'GET':
        serializer = EventRegistrationSerializer(event_registration)
        return Response(serializer.data)
    else:
        return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def insert(request):
    if request.method == 'POST':
        serializer = EventRegistrationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    else:
        return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(['PUT'])
def update(request, event_registration_id):
    try:
        event_registration = EventRegistration.objects.get(id=event_registration_id)
    except EventRegistration.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == 'PUT':
        serializer = EventRegistrationSerializer(event_registration, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    else:
        return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(['DELETE'])
def delete(request, event_registration_id):
    try:
        event = EventRegistration.objects.get(id=event_registration_id)
    except EventRegistration.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == 'DELETE':
        event.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    else:
        return Response(status=status.HTTP_400_BAD_REQUEST)