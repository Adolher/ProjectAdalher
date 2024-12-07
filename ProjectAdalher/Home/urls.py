from django.urls import path

from . import views

urlpatterns = [
    path('', views.home, name='home')     # Todo: change home to a variable ?Maybe?
]
