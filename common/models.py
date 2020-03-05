from django.db import models

class Team(models.Model):
    #队伍名称
    team_name=models.CharField(max_length=20)

    #队长姓名
    boss_name=models.CharField(max_length=4)

    #队长手机号
    boss_phone=models.CharField(max_length=13)

    #队长班级
    boss_classes=models.CharField(max_length=10)

    #队长学号
    boss_num=models.CharField(max_length=12)

    #队伍人数
    team_members=models.CharField(max_length=2)

    #队员2姓名
    member2_name=models.CharField(max_length=4)

    #队员2学号
    member2_num=models.CharField(max_length=12)

    #队员2班级
    member2_classes=models.CharField(max_length=10)

    #队员3姓名
    member3_name=models.CharField(max_length=4)

    #队员3学号
    member3_num=models.CharField(max_length=12)

    #队员3班级
    member3_classes=models.CharField(max_length=10)
