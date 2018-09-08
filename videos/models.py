from django.db import models

# Create your models here.

class Video(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=200)
    pub_date = models.DateTimeField('date published')

    def __str__(self):
        return self.name
