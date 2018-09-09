from django.urls import path
from . import views


urlpatterns = [
    path('vid1.mjpg', views.mjpeg),
]
