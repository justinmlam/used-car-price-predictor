from django.http import HttpResponse
from django.shortcuts import render
from .models import *
from .forms import *

def index(request):
    if request.method == 'POST':
        form = VehicleForm(request.POST)
    else:
        form = VehicleForm()

    return render(request, 'predictor/index.html', {'form': form})

def prediction(request):
    if request.method == 'POST':
        form = VehicleForm(request.POST)
        if form.is_valid():
            pass
        context = {}
        return render(request, 'predictor/prediction.html', context)