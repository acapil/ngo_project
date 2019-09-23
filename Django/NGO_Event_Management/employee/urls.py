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

urlpatterns = [
    url(r'^$', views.get_employees, name='get_employee_list'),
    url(r'^(?P<pk>[0-9]+)$', views.get_employee, name='get_employee'),
    url(r'^insert/$', views.insert, name='insert'),
    url(r'^update/(?P<employee_id>[0-9]+)$', views.update, name='update'),
    url(r'^delete/(?P<employee_id>[0-9]+)$', views.delete, name='delete'),
]
