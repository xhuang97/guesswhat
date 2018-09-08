from django.urls import path
from . import views


urlpatterns = [
    path('video.mjpg', views.mjpeg, name='mjpeg'),
]