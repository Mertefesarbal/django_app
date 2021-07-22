from django.db import models
from autoslug import AutoSlugField
from model_utils.models import TimeStampedModel

class Artifact(TimeStampedModel): 
    name = models.CharField("Name of Artifact", max_length = 200)
    slug = AutoSlugField("Artifact Address",
    unique=True, always_update=False, populate_from="name")
    description = models.TextField("Description", blank = True)

    class Firmness(models.TextChoices):
        UNSPECIFIED = "unspecified", "Unspecified"
        SOFT = "soft", "Soft"
        SEMI_SOFT = "semi-soft", "Semi-Soft"
        SEMI_HARD = "semi-hard", "Semi-Hard"
        HARD = "hard", "Hard"
    
    firmness = models.CharField("Firmness", max_length=20,
    choices=Firmness.choices, default=Firmness.UNSPECIFIED)

    def __str__(self):
        return self.name