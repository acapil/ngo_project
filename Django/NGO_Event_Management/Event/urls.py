from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.get_events, name='get_event_list'),
    url(r'^(?P<event_id>[0-9]+)$', views.get_event, name='get_event'),
    url(r'^new/$', views.new, name='new'),
    url(r'^edit/(?P<event_id>[0-9]+)$', views.edit, name='edit'),
    url(r'^delete/(?P<event_id>[0-9]+)$', views.delete, name='delete'),
]