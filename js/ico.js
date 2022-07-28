$(window).on('load',function(){
    $('.ico06 .btn').on('mousedown',function(){
        $(this).addClass('clck');
    }).on('mouseup',function(){
        $(this).removeClass('clck');
    });
});