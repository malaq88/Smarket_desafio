from rest_framework import serializers
from .models import Member, Assig


class MemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Member
        fields = ['id', 'name', 'surname', 'phone', 'photo']


class AssigSerializer(serializers.ModelSerializer):
    class Meta:
        model = Assig
        fields = ['id', 'desc']


class MemberAssigSerializer(serializers.ModelSerializer):
    assigs = AssigSerializer(many=True, read_only=True)

    class Meta:
        model = Member
        fields = ['id', 'name', 'assigs']
