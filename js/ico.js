$(window).on('load',function(){
    $('.ico06 .btn').on('mousedown',function(){
        $(this).addClass('clck');
    }).on('mouseup',function(){
        $(this).removeClass('clck');
    });
    $('.ico07').on('mousedown',function(){
        $(this).addClass('clck');
    }).on('mouseup',function(){
        $(this).removeClass('clck');
    });
    $('.ico08').on('click',function(){
        $(this).addClass('clck');
    })
});