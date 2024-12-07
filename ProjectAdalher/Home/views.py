from django.shortcuts import render

from django.http import HttpResponse
from django.template import loader

from .models import MyApps

# Create your views here.
def home(request):
    if len(MyApps.objects.filter(name="Home")) == 0:
        MyApps(name="Home", app_url="").save()
    myapps = MyApps.objects.all().values("name", "app_url")

    context = {
        "navlinks": myapps,
    }

    template = loader.get_template('home.html')
    return HttpResponse(template.render(context, request))
