from django.urls import path 
from . import views 

app_name = "museums" 
urlpatterns = [
    path(
        route = '', 
        view = views.ArtifactListView.as_view(),
        name = 'list'
    ),
    path(
        route = '<slug:slug>', 
        view = views.ArtifactDetailView.as_view(), 
        name = 'detail'
    ),
]