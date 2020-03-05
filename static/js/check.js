
$('#boss_name1').on('blur',function(){
    var checkName = /^[\u4E00-\u9FA5\uF900-\uFA2D]+$/;
    str=this.value;
    var result = checkName.test(str);
    if(result == false){
        mainResult = 0;
        $(this).parent().removeClass('focus');
        $(this).parent().removeClass('focus2');
        $(this).parent().addClass('focus1');
    }else{
        $(this).parent().removeClass('focus');
        $(this).parent().removeClass('focus1');
        $(this).parent().addClass('focus2');
    }

    if(str === '')
    {
        $(this).parent().removeClass('focus1');
        $(this).parent().removeClass('focus2');
    }
})

$('#team_name1').on('blur',function(){
    var checkName = /\S/;
    str=this.value;
    var result = checkName.test(str);
    if(result == false){
        mainResult = 0;
        $(this).parent().removeClass('focus');
        $(this).parent().removeClass('focus2');
        $(this).parent().addClass('focus1');
    }else{
        $(this).parent().removeClass('focus');
        $(this).parent().removeClass('focus1');
        $(this).parent().addClass('focus2');
    }

    if(str === '')
    {
        $(this).parent().removeClass('focus1');
        $(this).parent().removeClass('focus2');
    }
})

$('#boss_phone1').on('blur',function(){
    var checkName = /^1([3-9])[0-9]{9}$/;
    str=this.value;
    var result = checkName.test(str);
    if(result == false){
        mainResult = 0;
        $(this).parent().removeClass('focus');
        $(this).parent().removeClass('focus2');
        $(this).parent().addClass('focus1');
    }else{
        $(this).parent().removeClass('focus');
        $(this).parent().removeClass('focus1');
        $(this).parent().addClass('focus2');
    }

    if(str === '')
    {
        $(this).parent().removeClass('focus1');
        $(this).parent().removeClass('focus2');
    }
})

$('#boss_classes1').on('blur',function(){
    var checkName = /\S/;
    str=this.value;
    var result = checkName.test(str);
    if(result == false){
        mainResult = 0;
        $(this).parent().removeClass('focus');
        $(this).parent().removeClass('focus2');
        $(this).parent().addClass('focus1');
    }else{
        $(this).parent().removeClass('focus');
        $(this).parent().removeClass('focus1');
        $(this).parent().addClass('focus2');
    }

    if(str === '')
    {
        $(this).parent().removeClass('focus1');
        $(this).parent().removeClass('focus2');
    }
})

$('#boss_num1').on('blur',function(){
    var checkName = /^2019[0-9]{8}$/;
    str=this.value;
    var result = checkName.test(str);
    if(result == false){
        mainResult = 0;
        $(this).parent().removeClass('focus');
        $(this).parent().removeClass('focus2');
        $(this).parent().addClass('focus1');
    }else{
        $(this).parent().removeClass('focus');
        $(this).parent().removeClass('focus1');
        $(this).parent().addClass('focus2');
    }

    if(str === '')
    {
        $(this).parent().removeClass('focus1');
        $(this).parent().removeClass('focus2');
    }
})

$('#member2_name1').on('blur',function(){
    var checkName = /^[\u4E00-\u9FA5\uF900-\uFA2D]+$/;
    str=this.value;
    var result = checkName.test(str);
    if(result == false){
        mainResult = 0;
        $(this).parent().removeClass('focus');
        $(this).parent().removeClass('focus2');
        $(this).parent().addClass('focus1');
    }else{
        $(this).parent().removeClass('focus');
        $(this).parent().removeClass('focus1');
        $(this).parent().addClass('focus2');
    }

    if(str === '')
    {
        $(this).parent().removeClass('focus1');
        $(this).parent().removeClass('focus2');
    }
})

$('#member3_name1').on('blur',function(){
    var checkName = /^[\u4E00-\u9FA5\uF900-\uFA2D]+$/;
    str=this.value;
    var result = checkName.test(str);
    if(result == false){
        mainResult = 0;
        $(this).parent().removeClass('focus');
        $(this).parent().removeClass('focus2');
        $(this).parent().addClass('focus1');
    }else{
        $(this).parent().removeClass('focus');
        $(this).parent().removeClass('focus1');
        $(this).parent().addClass('focus2');
    }

    if(str === '')
    {
        $(this).parent().removeClass('focus1');
        $(this).parent().removeClass('focus2');
    }
})

$('#member2_classes1').on('blur',function(){
    var checkName = /\S/;
    str=this.value;
    var result = checkName.test(str);
    if(result == false){
        mainResult = 0;
        $(this).parent().removeClass('focus');
        $(this).parent().removeClass('focus2');
        $(this).parent().addClass('focus1');
    }else{
        $(this).parent().removeClass('focus');
        $(this).parent().removeClass('focus1');
        $(this).parent().addClass('focus2');
    }

    if(str === '')
    {
        $(this).parent().removeClass('focus1');
        $(this).parent().removeClass('focus2');
    }
})

$('#member3_classes1').on('blur',function(){
    var checkName = /\S/;
    str=this.value;
    var result = checkName.test(str);
    if(result == false){
        mainResult = 0;
        $(this).parent().removeClass('focus');
        $(this).parent().removeClass('focus2');
        $(this).parent().addClass('focus1');
    }else{
        $(this).parent().removeClass('focus');
        $(this).parent().removeClass('focus1');
        $(this).parent().addClass('focus2');
    }

    if(str === '')
    {
        $(this).parent().removeClass('focus1');
        $(this).parent().removeClass('focus2');
    }
})

$('#member2_num1').on('blur',function(){
    var checkName = /^2019[0-9]{8}$/;
    str=this.value;
    var result = checkName.test(str);
    if(result == false){
        mainResult = 0;
        $(this).parent().removeClass('focus');
        $(this).parent().removeClass('focus2');
        $(this).parent().addClass('focus1');
    }else{
        $(this).parent().removeClass('focus');
        $(this).parent().removeClass('focus1');
        $(this).parent().addClass('focus2');
    }

    if(str === '')
    {
        $(this).parent().removeClass('focus1');
        $(this).parent().removeClass('focus2');
    }
})


$('#member3_num1').on('blur',function(){
    var checkName = /^2019[0-9]{8}$/;
    str=this.value;
    var result = checkName.test(str);
    if(result == false){
        mainResult = 0;
        $(this).parent().removeClass('focus');
        $(this).parent().removeClass('focus2');
        $(this).parent().addClass('focus1');
    }else{
        $(this).parent().removeClass('focus');
        $(this).parent().removeClass('focus1');
        $(this).parent().addClass('focus2');
    }

    if(str === '')
    {
        $(this).parent().removeClass('focus1');
        $(this).parent().removeClass('focus2');
    }
})