# Generated by Django 3.1.5 on 2021-01-21 00:03

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_auto_20210120_2350'),
    ]

    operations = [
        migrations.CreateModel(
            name='Assig',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('desc', models.CharField(max_length=100)),
                ('status', models.CharField(choices=[('Feito', 'Feito'), ('Pendente', 'Pendente')], default='Pendente', max_length=10)),
                ('member_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='core.member')),
            ],
        ),
    ]
