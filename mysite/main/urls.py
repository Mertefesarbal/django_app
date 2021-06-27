from django.urls import path
from django.urls import path
from . import views
from main import urls   
urlpatterns = [
path("", views.index, name = "index"), 
path("v1/", views.v1, name = "v1"), 


]