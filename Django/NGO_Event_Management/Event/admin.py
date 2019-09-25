from django.contrib import admin

# Register your models here.

from django.contrib import admin
from .models import Event


class EventAdmin(admin.ModelAdmin):
    list_display = [
        'event_name',
        'id',
        'user',
        'category',
        'location',
        'start_time',
        'end_time',
    ]


admin.site.register(Event, EventAdmin)