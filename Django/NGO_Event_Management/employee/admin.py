from django.contrib import admin

# Register your models here.

from django.contrib import admin
from .models import Employee


class EmployeeAdmin(admin.ModelAdmin):
    list_display = [
        'first_name',
        'last_name',
        'department',
        'salary',
    ]


admin.site.register(Employee, EmployeeAdmin)