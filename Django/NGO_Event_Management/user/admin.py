from django.contrib import admin

# Register your models here.

from django.contrib import admin
from .models import User


class UserAdmin(admin.ModelAdmin):
    list_display = [
        'first_name',
        'last_name',
        'email',
        'password',
        'role',
    ]


admin.site.register(User, UserAdmin)