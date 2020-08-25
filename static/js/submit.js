function submit() {
    var team_name = $("#team_name1").val();
    var boss_name = $("#boss_name1").val();
    var boss_phone = $("#boss_phone1").val();
    var boss_classes = $("#boss_classes1").val();
    var boss_num = $("#boss_num1").val();
    var members = $('#members input[name="members"]:checked').val();
    var member2_name = $("#member2_name1").val();
    var member2_classes = $("#member2_classes1").val();
    var member2_num = $('#member2_num1').val();
    var member3_name = $("#member3_name1").val();
    var member3_classes = $("#member3_classes1").val();
    var member3_num = $('#member3_num1').val();
    var team_name_bool = $('#team_name').is('.focus2');
    var boss_name_bool = $('#boss_name').is('.focus2');
    var boss_phone_bool = $('#boss_phone').is('.focus2');
    var boss_classes_bool = $('#boss_classes').is('.focus2');
    var boss_num_bool = $('#boss_num').is('.focus2');
    var member2_name_bool = $('#member2_name').is('.focus2');
    var member2_classes_bool = $('#member2_classes').is('.focus2');
    var member2_num_bool = $('#member2_num').is('.focus2');
    var member3_name_bool = $('#member3_name').is('.focus2');
    var member3_classes_bool = $('#member3_classes').is('.focus2');
    var member3_num_bool = $('#member3_num').is('.focus2');

    switch (parseInt(members)) {
        case 1:
            if (team_name_bool && boss_name_bool && boss_phone_bool && boss_classes_bool && boss_num_bool) {
                var bool1 = confirm('宝贝，确认提交信息吗？');
                if (bool1) {
                    /*打包一名队员信息*/
                    var team_json = {
                        "action_name": "add_team",
                        "data": {
                            "team_members": members,
                            "team_name": team_name,
                            "boss_name": boss_name,
                            "boss_phone": boss_phone,
                            "boss_classes": boss_classes,
                            "boss_num": boss_num,
                            "member2_name": '',
                            "member2_classes": '',
                            "member2_num": '',
                            "member3_name": '',
                            "member3_classes": '',
                            "member3_num": ''
                        }
                    };
                    /*队伍信息处理以及提交后台*/
                    team = JSON.stringify(team_json);
                    $.post("http://127.0.0.1:8000/info/add/", team, function (data) {
                        alert('成功提交，你们是第' + data.id + '支报名的队伍')
                    }, 'json');
                }

            }
            else {
                alert('宝贝，信息有误哦')
            }
            break;

        case 2:
            if (team_name_bool && boss_name_bool && boss_phone_bool && boss_classes_bool && boss_num_bool && member2_name_bool && member2_classes_bool && member2_num_bool) {
                var bool2 = confirm('宝贝，确认提交信息吗');
                if (bool2) {
                    /*打包二名队员信息*/
                    var team_json = {
                        "action_name": "add_team",
                        "data": {
                            "team_members": members,
                            "team_name": team_name,
                            "boss_name": boss_name,
                            "boss_phone": boss_phone,
                            "boss_classes": boss_classes,
                            "boss_num": boss_num,
                            "member2_name": member2_name,
                            "member2_classes": member2_classes,
                            "member2_num": member2_num,
                            "member3_name": '',
                            "member3_classes": '',
                            "member3_num": ''
                        }
                    };
                    /*队伍信息处理以及提交后台*/
                    team = JSON.stringify(team_json);
                    $.post("http://127.0.0.1:8000/info/add/", team, function (data) {
                        alert('成功提交，你们是第' + data.id + '支报名的队伍')
                    }, 'json');
                }
            } else {
                alert('宝贝，信息有误哦')
            }
            break;

        case 3:
            if (team_name_bool && boss_name_bool && boss_phone_bool && boss_classes_bool && boss_num_bool && member2_name_bool && member2_classes_bool && member2_num_bool && member3_name_bool && member3_classes_bool && member3_num_bool) {
                var bool2 = confirm('宝贝，确认提交信息吗');
                if (bool2) {
                    /*打包三名队员信息*/
                    var team_json = {
                        "action_name": "add_team",
                        "data": {
                            "team_members": members,
                            "team_name": team_name,
                            "boss_name": boss_name,
                            "boss_phone": boss_phone,
                            "boss_classes": boss_classes,
                            "boss_num": boss_num,
                            "member2_name": member2_name,
                            "member2_classes": member2_classes,
                            "member2_num": member2_num,
                            "member3_name": member3_name,
                            "member3_classes": member3_classes,
                            "member3_num": member3_num
                        }
                    };
                    /*队伍信息处理以及提交后台*/
                    team = JSON.stringify(team_json);
                    $.post("http://127.0.0.1:8000/info/add/", team, function (data) {
                        alert('成功提交，你们是第' + data.id + '支报名的队伍')
                    }, 'json');
                }

            } else {
                alert('宝贝，信息有误哦')
            }
            break;

        default:
            alert('请选择队员人数')

    }

}