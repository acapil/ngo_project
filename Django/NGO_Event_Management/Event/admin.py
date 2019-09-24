from django.contrib import admin

# Register your models here.

from django.contrib import admin
from .models import Event


class EventAdmin(admin.ModelAdmin):
    list_display = [
        'user_id',
        'event_name',
        'category',
        'location',
        'start_time',
        'end_time',
        'description',
        'adult_price',
        'kid_price',

    ]


admin.site.register(Event, EventAdmin)