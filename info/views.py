from django.shortcuts import render

def index(request):
    return render(request,"index.html")

def teams(request):
    return render(request,"teams.html")



