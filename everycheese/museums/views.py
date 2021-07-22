from django.shortcuts import render
from django.views.generic  import ListView, DetailView
from .models import Artifact


class ArtifactListView(ListView): 
    model = Artifact
    