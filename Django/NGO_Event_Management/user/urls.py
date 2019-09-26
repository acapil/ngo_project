"""todo1 URL Configuration
The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import  url
from . import views
from django.urls import path
from django.conf.urls import include
from rest_framework.authtoken.views import obtain_auth_token

# use create/ for registration
# use auth/login for login, need a POST and will return a token
# use auth/user with token in header for detailed of user (GET)
# use auth/user with token in header for changing username, first_name, last-name, email (PUT)
# use auth/password/change/ with token in header for

urlpatterns = [
    url(r'^$', views.get_users, name='get_user_list'),
    url(r'^(?P<user_id>[0-9]+)$', views.get_user, name='get_user'),
    path('get_id/<str:token>/', views.get_id_from_token, name='get_id_from_token'),
    path('get_token/<int:user_id>/', views.get_token_from_id, name='get_token_from_id'),
    # url(r'^insert/$', views.insert, name='insert'),
    # url(r'^update/(?P<user_id>[0-9]+)$', views.update, name='update'), # does not work
    url(r'^change/(?P<user_id>[0-9]+)$', views.change, name='change'),
    url(r'^delete/(?P<user_id>[0-9]+)$', views.delete, name='delete'),
    path('auth/', include('rest_auth.urls')),
    path('create/', include('rest_auth.registration.urls')),
    path('api-token-auth/', obtain_auth_token, name='api_token_auth'),
]

