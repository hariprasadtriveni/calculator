from django.shortcuts import render

from django.shortcuts import render

def calci(request):
    return render(request, 'calculator.html')

