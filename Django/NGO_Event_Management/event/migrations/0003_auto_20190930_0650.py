# Generated by Django 2.2.5 on 2019-09-30 10:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('event', '0002_event_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='image',
            field=models.ImageField(default='media\\index_eD9kTtL.png', upload_to=''),
        ),
    ]