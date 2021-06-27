from django.shortcuts import render
from django.http import HttpResponse
from django.views.generic import TemplateView
# TemplateView renders a Django template and sends it to a browser

def index(response):
    return HttpResponse("<h1>hi ozan<h1>")


def v1(response): 
    return HttpResponse("<h1>view 1<h1>")

class HomePageView(TemplateView): 
    template_name = 'index.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['my_statement'] = 'nice to see you'
        return context