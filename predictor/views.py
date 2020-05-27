from django.http import HttpResponse
from django.shortcuts import render
from .models import *

def index(request):
    return render(request, 'predictor/index.html')