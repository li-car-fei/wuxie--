$('#mem_button').click(function(){
    $('#members input:radio').each(function(){
        if(this.checked){
            var index=$(this).val();
            if(index==1){
                $('#scape1').hide();
                $('#scape2').hide();
                $('#member2').hide();
                $('#member3').hide();
            };
    
            if(index==2){
                $('#scape1').show();
                $('#scape2').hide();
                $('#member2').show();
                $('#member3').hide();
            };
    
            if(index==3){
                $('#scape1').show();
                $('#scape2').show();
                $('#member2').show();
                $('#member3').show();
            }
        }
    })
    
})

