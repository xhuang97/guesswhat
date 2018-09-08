from django.urls import path
from . import views


urlpatterns = [
    path('<str:source>.mjpg', views.mjpeg),
]