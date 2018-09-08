from django.db import models
from django.contrib.auth.models import User


class Video(models.Model):
    # default_user = User.objects.create_user('killian', 'killian@example.com', 'adminadmin')
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    body = models.CharField(default='', max_length=200)

    def __str__(self):
        return self.body
