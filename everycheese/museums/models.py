from django.db import models
from model_utils.models import TimeStampModel

class Artifact(TimeStampedModel): 
    name = models.Charfield("Name of Artifact", max_length = 200)
    