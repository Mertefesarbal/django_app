from django.shortcuts import render
from django.views.generic  import ListView, DetailView, CreateView
from .models import Artifact
from .serializers import ArtifactSerializer, createArtifactSerializer
from rest_framework.views import APIView
from rest_framework.response import Response


class ArtifactView(APIView):
    serializer_class = ArtifactSerializer
    
    def get(self, request): 
        detail = [{"name": detail.name, "description": detail.description}
        for detail in Artifact.objects.all()]
        return Response(detail)
    
    def post(self, request): 

        serializer = ArtifactSerializer(data = request.data)
        if serializer.is_valid(raise_exception = True): 
            serializer.save()
            return Response(serializer.data)
        



