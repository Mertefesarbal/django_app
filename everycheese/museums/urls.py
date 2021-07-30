from django.urls import path , include
from django.conf.urls import url
from django.contrib import admin
from . import views 

app_name = "museums" 
urlpatterns = [
    
   
    path(   
        route = "artifacts/", 
        view = views.ArtifactView.as_view(), 
        name = "artifacts", 
    ), 
]