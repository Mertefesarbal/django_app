from rest_framework import serializers
from .models import Artifact

class ArtifactSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Artifact
        fields = ('name', 'description', 'firmness')


# looking to serialize a request so it is gonna
# take the data from the request  and make sure 
# it is all valid and give it to us in kind of a python format 
class createArtifactSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Artifact
        fields = ('name','firmness' ,'description') # don't know how to fill the fields part yet