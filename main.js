$(document).ready(function(){
    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('.nav').toggleClass('nav-toggle');
    });

    $(window).on('load scroll', function(){
        $('.fa-bars').removeClass('fa-times');
        $('.nav').removeClass('nav-toggle');


    if($(window).scrollTop() > 10){
        $('header').addClass('header-active');
    }else{
        $('header').removeClass('header-active');
    }
   
});

$('.facility').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    // other options



  
});
});
// $('#cart').hide();
// $(".fa-shopping-cart").mouseenter(function(){
//     $('#cart').show();
// })

// $("#cart").mouseleave(function(){
//     $('#cart').hide();
// })
// let cart_item_count = 0;
// $('.order_btn').click(function(){
//     cart_item_count++;
//     let img_src = $(this).parents(".card-body").siblings("img").attr("src");
    
// })
