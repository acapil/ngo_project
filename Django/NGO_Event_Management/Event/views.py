from django.shortcuts import render
from django.contrib.auth.models import User, Group
from .models import Event
from rest_framework import viewsets
from event.serializers import EventSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.parsers import FileUploadParser
from user.views import check_permission

# Create your views here.

class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer


@api_view(['GET'])
def get_events(request):
    if request.method == 'GET':
        token = request.META.get('HTTP_AUTHORIZATION').split()[1]
        permission = check_permission(token)
        if permission.get('authenticate'):
            event = Event.objects.all()
            serializer = EventSerializer(event, many=True)
            return Response(serializer.data)
        else:
            return Response(status=status.HTTP_401_UNAUTHORIZED)
    else:
        return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def get_event(request, event_id):
    if request.method == 'GET':
        token=request.META.get('HTTP_AUTHORIZATION').split()[1]
        permission=check_permission(token)
        if permission.get('authenticate'):
            try:
                event = Event.objects.get(id=event_id)
            except Event.DoesNotExist:
                return Response(status=status.HTTP_404_NOT_FOUND)
            serializer = EventSerializer(event)
            return Response(serializer.data)
    else:
        return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def new(request):
    parser_class = (FileUploadParser,) # Don't delete this
    if request.method == 'POST':
        serializer = EventSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    else:
        return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(['PATCH'])
def edit(request, event_id):
    parser_class=(FileUploadParser,)
    try:
        event = Event.objects.get(id=event_id)
    except Event.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == 'PATCH':
        serializer = EventSerializer(event, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    else:
        return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(['DELETE'])
def delete(request, event_id):
    try:
        event = Event.objects.get(id=event_id)
    except Event.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == 'DELETE':
        event.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    else:
        return Response(status=status.HTTP_400_BAD_REQUEST)