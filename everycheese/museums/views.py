from django.shortcuts import render
from django.views.generic  import ListView, DetailView
from .models import Artifact


class ArtifactListView(ListView): 
    model = Artifact



#Now we have the view that will power each of the cheese detail
#pages:
class ArtifactDetailView(DetailView):
    model = Artifact
