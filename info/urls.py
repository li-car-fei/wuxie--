from django.urls import path

from . import views,team

urlpatterns = [
    path('orders/', views.listorders),
    path('teams/', views.listteams),
    path('add/', team.dispatcher),
]
