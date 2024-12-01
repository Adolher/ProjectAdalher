from django.urls import path

from . import views

urlpatterns = [
    path('', views.landingpage, name='landingpage')     # Todo: change landingpage to a variable ?Maybe?
]
