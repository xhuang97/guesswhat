from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from polls.models import Question, Choice


def index(request):
    num_questions = Question.objects.all().count()
    num_choices = Choice.objects.all().count()
    # return HttpResponse("Hello, world. You're at the polls index.")
    context = {
        'num_questions': num_questions,
        'num_choices': num_choices,
    }
    return render(request, 'index.html', context = context)
