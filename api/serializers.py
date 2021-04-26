from rest_framework import serializers
from .models import Room, Blogs

class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = ('__all__')


class BlogsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blogs
        fields = ('__all__')

class CreateBlogsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blogs
        fields = ('title', 'author', 'body')