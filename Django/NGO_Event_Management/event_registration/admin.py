from django.contrib import admin

# Register your models here.

from django.contrib import admin
from .models import EventRegistration


class EventRegistrationAdmin(admin.ModelAdmin):
    list_display = ['id', 'user', 'event', 'first_name', 'last_name',
                    'email', 'phone', 'address', 'quantity_adult', 'quantity_kid'
                    ]


admin.site.register(EventRegistration, EventRegistrationAdmin)