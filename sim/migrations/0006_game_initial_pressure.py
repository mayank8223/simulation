# Generated by Django 3.0.6 on 2020-05-20 10:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sim', '0005_auto_20200520_0951'),
    ]

    operations = [
        migrations.AddField(
            model_name='game',
            name='initial_pressure',
            field=models.IntegerField(default=60),
        ),
    ]
