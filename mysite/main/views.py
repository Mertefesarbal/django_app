from django.shortcuts import render
from django.http import HttpResponse
from django.views.generic import TemplateView
# Create your views here.

def index(response):
    return HttpResponse("<h1>hi ozan<h1>")


def v1(response): 
    return HttpResponse("<h1>view 1<h1>")

class HomePageView(TemplateView): 
    template_name = 'index.html'