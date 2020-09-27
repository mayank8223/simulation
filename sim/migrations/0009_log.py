# Generated by Django 3.0.6 on 2020-06-27 06:43

import django.contrib.postgres.fields.jsonb
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sim', '0008_game_budget'),
    ]

    operations = [
        migrations.CreateModel(
            name='Log',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('timestamp', models.DateTimeField(auto_now_add=True)),
                ('action', models.TextField(max_length=30)),
                ('location', models.TextField(max_length=10)),
                ('money_spent', models.IntegerField(default=0)),
                ('money_left', models.IntegerField(default=0)),
                ('sim_id', models.TextField(max_length=30)),
                ('info', django.contrib.postgres.fields.jsonb.JSONField(default=None)),
            ],
        ),
    ]
