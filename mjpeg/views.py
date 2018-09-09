from django.shortcuts import render
import django.http as http
from django.conf import settings
from os import listdir
from os.path import isfile, isdir, join
from PIL import Image
import bisect, time
# Create your views here.

def index(request):
    return render(request, 'index.html', {})

def css(request, templatefile) :
    return render(request, 'css/' + templatefile, {})

def viewer(request, templatefile):
    return render(request, 'view/' + templatefile, {})
    
def creategenerator_mjpegstream(filelist, source):
    # Load image files to RAM
    images = []
    filelist.sort()
    try: 
        for filename in filelist:
            with open(settings.BASE_DIR + '/static/' + source + '/' + filename, "rb") as f:
                image = f.read()
                images.append(image)
                f.close()
    except Exception as e:
        images = []
        red = Image.new('RGBA', (1, 1), (255,0,0,0))
        image = b''
        red.save(image, "JPEG")
        images.append(image)
    
    # start streaming loop
    while True:
      for image in images:
                chunkheader = b"Content-Type: image/jpeg\nContent-Length: " + str(len(image)).encode('ascii') + b"\n\n"
                boundary = b"\n--myboundary\n"
                yield (chunkheader + image + boundary)
                time.sleep(settings.CHUNK_DELAY)

def creategenerator_mjpeglivestream(path, source):
    # Load image files to RAM
    filelist = []
    fileset = set()
    fileset.add("settings.txt")
    fileset.add("default.jpg")
    last = "default.jpg"
    with open(settings.BASE_DIR + '/static/' + source + '/' + last, "rb") as f:
        image = f.read()
    
    chunkheader = b"Content-Type: image/jpeg\nContent-Length: " + str(len(image)).encode('ascii') + b"\n\n"
    boundary = b"\n--myboundary\n"
    yield (chunkheader + image + boundary)
    
    time.sleep(settings.CHUNK_DELAY)
    # start streaming loop
    while True:
      filelist = []
      for f in listdir(path):
          if f not in fileset:
              fileset.add(f)
              filelist.append(f)
      filelist.sort()
      if len(filelist) > 0:
          last = filelist[-1]
      with open(settings.BASE_DIR + '/static/' + source + '/' + last, "rb") as f:
          image = f.read()
      chunkheader = b"Content-Type: image/jpeg\nContent-Length: " + str(len(image)).encode('ascii') + b"\n\n"
      yield (chunkheader + image + boundary)
      time.sleep(settings.CHUNK_DELAY)

def mjpeg(request, source='vid1'):
    path = settings.BASE_DIR + '/static/' + source + '/'
    if not isdir(path):
        raise http.Http404("Stream does not exist.")
    if not isfile(join(path, "settings.txt")):
        raise http.Http404("Not a stream folder")
    with open(settings.BASE_DIR + '/static/' + source + '/settings.txt', "r") as f:
        option = f.readline()
    if option.startswith("static"):
        filelist = [f for f in listdir(path) if (isfile(join(path, f)) and not f.endswith('.txt'))]
        if len(filelist) == 0:
            raise http.Http404("No files in folder")
        mjpegstream = creategenerator_mjpegstream(filelist, source)
    elif option.startswith("dynamic"):
        mjpegstream = creategenerator_mjpeglivestream(path, source)
    else:
        return http.HttpResponseServerError()
    return http.StreamingHttpResponse(mjpegstream, content_type='multipart/x-mixed-replace;boundary=myboundary')