"""bmcs URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
#from django.contrib.staticfiles.urls import staticfiles_urlpatterns

from django.contrib import admin
from django.urls import path,include
# 静态文件服务
#from django.conf.urls.static import static
from info import views



urlpatterns = [
    # 管理员admin
    path('admin/', admin.site.urls),

    # 数据更改或查询
    path('info/', include('info.urls')),

    # 页面获取
    path('',views.index),

    # 队伍信息页面
    path('teams/',views.teams)
]





#设置静态文件路径
#urlpatterns += staticfiles_urlpatterns()


