from django.shortcuts import render
from rest_framework import generics, status, mixins
from rest_framework.serializers import Serializer
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import RoomSerializer, BlogsSerializer, CreateBlogsSerializer
from .models import Room, Blogs



class RoomView(generics.ListAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer


    # Blogs

# class BlogsView(generics.ListAPIView):
#     queryset = Blogs.objects.all()
#     serializer_class = BlogsSerializer

class BlogsView   (mixins.ListModelMixin,
                  mixins.CreateModelMixin,
                  generics.GenericAPIView):
    queryset = Blogs.objects.all()
    serializer_class = BlogsSerializer

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)


class BlogsDetailView(generics.RetrieveAPIView):
        queryset = Blogs.objects.all()
        serializer_class = BlogsSerializer



# class BlogsView(APIView):
#     def get(self, request):
#         blogs = Blogs.objects.all()
#         serializer = BlogsSerializer(blogs, many=True)
#         return Response(serializer.data)

    # def post(self, request, *args, **kwargs):
    #     blog_data = request.data
    #     host = self.request.session.session_key
    #     queryset = Blogs.objects.filter(host=host)
    #     if queryset.exists():
    #         blogs= queryset[0]
    #         blogs.title = blog_data['title']
    #         blogs.body = blog_data['body']
    #         blogs.author = blog_data['author']
    #         blogs.save()
    #     else: 
    #         blogs = Blogs(host=host, title=blog_data['title'], body=blog_data['body'],author=blog_data['author'])
    #         blogs.save()

    #     serializer = CreateBlogsSerializer(blogs)

    #     return Response(serializer.data)






class CreateBlogsView(APIView):
    serializer_class = CreateBlogsSerializer

    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()

        serializer = self.serializer_class(data = request.data)
        if serializer.is_valid():
            title = serializer.data.get('title')
            author = serializer.data.get('author')
            body = serializer.data.get('body')
            host = self.request.session.session_key
            # queryset = Blogs.objects.filter(host=host)
            # if queryset.exists():
            #     blogs= queryset[0]
            #     blogs.title = title
            #     blogs.body = body
            #     blogs.author = author
            #     blogs.save()
            # else:
            blogs = Blogs(host=host, title=title, body=body,author=author)
            blogs.save()

        return Response(BlogsSerializer(blogs).data, status=status.HTTP_201_CREATED)


