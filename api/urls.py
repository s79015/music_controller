from django.urls import path
from .views import RoomView, BlogsView, CreateBlogsView, BlogsDetailView


urlpatterns = [
    path('room', RoomView.as_view()),
    path('blogs', BlogsView.as_view()),
    path('create-blogs', CreateBlogsView.as_view()),
    path('blogs/<int:pk>/', BlogsDetailView.as_view()),
    
]