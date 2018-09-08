from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Video


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'username', 'first_name', 'last_name')


class VideoSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField(many=False)

    class Meta:
        model = Video
        fields = ('id', 'user', 'body')
