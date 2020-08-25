from django.urls import path

from . import team

urlpatterns = [
    path('teams/', team.listteams),
    path('add/', team.add_team),
]
