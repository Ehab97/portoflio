$(function () {
  'use strict';
  // Adjust Slider Height
  var winh   =$(window).height();
  $('.home-section').height(winh);
   'use strict';
  var typed = new Typed('.typing', {
  strings: ["Hello I am Ehab.", "I am A web designer.","And I am study computer scince and algorthims"],
  typeSpeed: 10
});
  // navbar changes
  var a = $(".navbar").offset().top;

$(document).scroll(function(){
if($(this).scrollTop() > a)
{
$('.navbar').css({"background":"#000"});
} else {
$('.navbar').css({"background":"transparent"});
}
});

        /* Scroll To Top */
    
        $(window).scroll(function(){
        if ($(this).scrollTop() >= 500) {
            $('.scroll-to-top').fadeIn();
         } else {
            $('.scroll-to-top').fadeOut();
         }
     });
  
  
      $('.scroll-to-top').click(function(){
      $('html, body').animate({scrollTop : 0},800);
      return false;
      });
    
    
    
    
        /* Typed.js */
  // .portflio shuflle
    $('.portfolio ul li').on('click',function(){
    $(this).addClass('active').siblings().removeClass('active');
    if ($(this).data('class') === 'all') {
      $('.portfolio-shuffle .col-md').css('opacity', 1);}
    else{
      $('.portfolio-shuffle .col-md').css('opacity', 1);
      $($(this).data('class')).parent().css('opacity', '.08');
    } 
  });
$(".portfolio ul li").click(function () {

    $(".portfolio ul li").removeClass("active");

    $(this).addClass("active");
});
//
$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
//
       


        

});

