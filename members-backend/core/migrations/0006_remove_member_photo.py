# Generated by Django 3.1.5 on 2021-01-22 16:12

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0005_auto_20210122_1603'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='member',
            name='photo',
        ),
    ]