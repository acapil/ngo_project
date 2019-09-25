from django import forms
from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from .models import User


class CustomUserCreationForm(UserCreationForm):

    class Meta:
        model = User
        fields = ('username', 'first_name', 'last_name', 'email', 'admin')


class CustomUserChangeForm(UserChangeForm):

    class Meta:
        model = User
<<<<<<< HEAD
        fields = UserChangeForm.Meta.fields
=======
        fields = UserChangeForm.Meta.fields
>>>>>>> 0f3342054da0f2978b667e9424aae280ee97f2e1
