from django.shortcuts import render
from django.views.generic  import ListView, DetailView, CreateView
from .models import Artifact
from .serializers import ArtifactSerializer, createArtifactSerializer
from rest_framework.views import APIView
from rest_framework.response import Response


class ArtifactListView(ListView): 
    model = Artifact



#Now we have the view that will power each of the cheese detail
#pages:
class ArtifactDetailView(DetailView):
    model = Artifact


class ArtifactCreateView(APIView): 
    def post(self, request, format=None): 
        pass


