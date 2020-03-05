from django.http import JsonResponse
import json
from django.http import HttpResponse

def dispatcher(request):
    # 将请求参数统一放入request 的 params 属性中，方便后续处理

    # GET请求 参数在url中，同过request 对象的 GET属性获取
    if request.method == 'GET':
        request.params = request.GET

    # POST/PUT/DELETE 请求 参数 从 request 对象的 body 属性中获取
    elif request.method in ['POST','PUT','DELETE']:
        # 根据接口，POST/PUT/DELETE 请求的消息体都是 json格式
        request.params = json.loads(request.body)


    # 根据不同的action分派给不同的函数进行处理
    action = request.params['action_name']
    if action == 'list_team':
        return listteams(request)
    elif action == 'add_team':
        return add_team(request)

    else:
        return JsonResponse({'ret': 1, 'msg': '不支持该类型http请求'})

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


def add_team(request):

    info=request.params['data']

     # 从请求消息中 获取要添加队伍的信息
    # 并且插入到数据库中
    # 返回值 就是对应插入记录的对象id


    record = Team.objects.create(team_name=info['team_name'],
                                 boss_name=info['boss_name'],
                                 team_members=info['team_members'],
                                 boss_phone=info['boss_phone'],
                                 boss_classes=info['boss_classes'],
                                 boss_num=info['boss_num'],
                                 member2_name=info['member2_name'],
                                 member2_num=info['member2_num'],
                                 member2_classes=info['member2_classes'],
                                 member3_name=info['member3_name'],
                                 member3_num=info['member3_num'],
                                 member3_classes=info['member3_classes'])

    return JsonResponse({
        'id':record.id
    })
