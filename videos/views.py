from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from videos.models import Video
from rest_framework import viewsets


def index(request):
    num_videos = Video.objects.all().count()
    # return HttpResponse("Hello, world. You're at the polls index.")
    context = {
        'num_videos': num_videos,
    }
    return render(request, 'index.html', context = context)



class VideoViewSet(viewsets.ModelViewSet):
    """
    Provides basic CRUD functions for the Video model
    """
    queryset = Video.objects.all()
