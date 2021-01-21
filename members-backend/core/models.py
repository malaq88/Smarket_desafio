from django.db import models


class Member(models.Model):
    name = models.CharField(max_length=100)
    surname = models.CharField(max_length=100)
    phone = models.CharField(max_length=100)
    email = models.EmailField()
    adress = models.CharField(max_length=200)
    photo = models.ImageField(upload_to='members_profille')

    def __str__(self):
        return self.name + " " + self.surname


class Assig(models.Model):
    desc = models.CharField(max_length=100)
    status = models.CharField(max_length=10, choices=((u'Feito', 'Feito'), (u'Pendente', 'Pendente')),
                              default='Pendente')
    member = models.ForeignKey(Member, on_delete=models.CASCADE, blank=True, null=True, related_name='assigs')

    def __str__(self):
        return self.desc + '-' + self.member_id.name
