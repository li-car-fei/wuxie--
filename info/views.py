from django.shortcuts import render

from django.http import HttpResponse

def listorders(request):
    return HttpResponse("下面是系统中所有的订单信息。。。")


# 导入 Customer 对象定义
from  common.models import  Team

def listteams(request):
    # 返回一个 QuerySet 对象 ，包含所有的表记录
    # 每条表记录都是是一个dict对象，
    # key 是字段名，value 是 字段值
    qs = Team.objects.values()

    # 定义返回字符串
    retStr = ''
    for team in  qs:
        for name,value in team.items():
            retStr += f'{name} : {value} | '

        # <br> 表示换行
        retStr += '<br>'

    return HttpResponse(retStr)


def index(request):

    return render(request,"index.html")



