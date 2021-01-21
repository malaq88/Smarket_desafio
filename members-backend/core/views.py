from rest_framework import viewsets
from .models import Member, Assig
from .serializers import MemberSerializer, AssigSerializer, MemberAssigSerializer


class MemberViewSet(viewsets.ModelViewSet):
    queryset = Member.objects.all()
    serializer_class = MemberSerializer


class AssigViewSet(viewsets.ModelViewSet):
    queryset = Assig.objects.all()
    serializer_class = AssigSerializer

class MemberAssigSet(viewsets.ModelViewSet):
    queryset = Member.objects.all()
    serializer_class = MemberAssigSerializer
