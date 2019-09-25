from django.contrib import admin

# Register your models here.

# from django.contrib import admin
# from .models import User
#
#
# class UserAdmin(admin.ModelAdmin):
#     list_display = [
#         'first_name',
#         'last_name',
#         'email',
#         'password',
#         'role',
#     ]
#
#
# admin.site.register(User, UserAdmin)


from django.contrib import admin
from django.contrib.auth import get_user_model
from django.contrib.auth.admin import UserAdmin

from .forms import CustomUserCreationForm, CustomUserChangeForm
from .models import User


class UserAdmin(UserAdmin):
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    model = User
    list_display = ['email', 'username', 'admin']


admin.site.register(User, UserAdmin)