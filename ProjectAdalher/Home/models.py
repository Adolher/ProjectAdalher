from django.db import models

# Create your models here.
class MyApps(models.Model):
    name = models.CharField(max_length=27)
    app_url = models.CharField(max_length=27)
