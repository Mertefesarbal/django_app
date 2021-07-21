from django.db import models
from django.urls import reverse 


class Artifact(models.Model): 
    name = models.CharField(max_length=100)
    history = models.TextField()

    def get_name(self): 
        return self.name
    def get_history(self): 
        return self.history 
    
    