from django.contrib import admin

# Register your models here.

from django.contrib import admin
from .models import EventRegistration


class EventRegistrationAdmin(admin.ModelAdmin):
    list_display = ['email', 'id', 'user', 'event', 'first_name', 'last_name',
                    'phone', 'address', 'quantity_adult', 'quantity_kid', 'total_price'
                    ]


admin.site.register(EventRegistration, EventRegistrationAdmin)