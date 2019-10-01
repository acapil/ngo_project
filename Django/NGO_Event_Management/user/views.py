from django.shortcuts import render
from django.contrib.auth.models import User, Group
from .models import User
from rest_framework import viewsets
from user.serializers import UserSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
# Create your views here.

class EmployeeViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class TestAuthView(APIView):
    permission_classes = (IsAuthenticated,)


def check_permission(token):
    authenticate = False
    admin = False
    user_id = 0
    if token in list(Token.objects.values_list('key', flat=True)):
        authenticate = True
        token_object = Token.objects.get(key=token)
        user_id = token_object.user_id
        admin = getattr(User.objects.get(id=user_id), 'admin')
        print(user_id)
    return {'authenticate': authenticate, 'admin': admin, 'user_id': user_id}


@api_view(['GET'])
def get_users(request):
    if request.method == 'GET':
        # print(request.META) # testing only
        token = request.META.get('HTTP_AUTHORIZATION').split()[1]
        permission = check_permission(token)
        if permission.get('admin'):
            users = User.objects.all()
            serializer = UserSerializer(users, many=True)
            return Response(serializer.data)
        elif permission.get('authenticate'):
            user = User.objects.get(id=permission.get('user_id'))
            serializer = UserSerializer(user)
            return Response(serializer.data)
        else: Response(status=status.HTTP_401_UNAUTHORIZED)
    else:
        return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def get_user(request, user_id):
    if request.method == 'GET':
        token = request.META.get('HTTP_AUTHORIZATION').split()[1]
        permission = check_permission(token)
        if permission.get('authenticate'):
            try:
                user=User.objects.get(id=user_id)
            except User.DoesNotExist:
                return Response(status=status.HTTP_404_NOT_FOUND)
            serializer = UserSerializer(user)
            return Response(serializer.data)
        else:
            return Response(status=status.HTTP_401_UNAUTHORIZED)
    else:
        return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def get_id_from_token(request, token):
    try:
        obj = Token.objects.get(key=token)
    except Token.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == 'GET':
        user_id = getattr(obj, 'user_id')
        admin = getattr(User.objects.get(id=user_id), 'admin')
        return Response({'user_id': user_id, 'admin': admin, 'token': token})
    else:
        return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def get_token_from_id(request, user_id):
    try:
        obj = Token.objects.get(user_id = user_id)
    except Token.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == 'GET':
        token = getattr(obj, 'key')
        admin = getattr(User.objects.get(id=user_id), 'admin')
        return Response({'user_id': user_id,'admin': admin, 'token': token})
    else:
        return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def insert(request):
    if request.method == 'POST':
        token = request.META.get('HTTP_AUTHORIZATION').split()[1]
        permission = check_permission(token)
        if permission.get('authenticate') and permission.get('admin'):
            serializer = UserSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response(status=status.HTTP_401_UNAUTHORIZED)
    else:
        return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(['PATCH'])
def change(request, user_id):
    try:
        user = User.objects.get(id=user_id)
    except User.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == 'PATCH':
        user.admin = request.data['admin']
        user.email = request.data['email']
        user.first_name = request.data['first_name']
        user.last_name = request.data['last_name']
        user.is_superuser = user.admin
        user.is_staff = user.admin
        user.save()
        return Response(status=status.HTTP_200_OK)
    else:
        return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(['DELETE'])
def delete(request, user_id):
    if request.method == 'DELETE':
        token=request.META.get('HTTP_AUTHORIZATION').split()[1]
        permission=check_permission(token)
        if permission.get('authenticate') and permission.get('admin'):
            try:
                user = User.objects.get(id=user_id)
            except User.DoesNotExist:
                return Response(status=status.HTTP_404_NOT_FOUND)
            user.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        else:
            return Response(status=status.HTTP_401_UNAUTHORIZED)
    else:
        return Response(status=status.HTTP_400_BAD_REQUEST)