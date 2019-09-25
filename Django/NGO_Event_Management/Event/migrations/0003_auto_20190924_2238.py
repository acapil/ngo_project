# Generated by Django 2.2.5 on 2019-09-25 02:38

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('event', '0002_event_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='event_creator', to=settings.AUTH_USER_MODEL, verbose_name='Creator'),
        ),
    ]
