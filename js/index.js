// $(".img-fluid").addClass("wow fadeIn z-depth-1-half");

// new WOW().init();

/*NAVBAR SCROLL EFFECT */
// $(window).scroll(function(){
//     $('nav').toggleClass('scrolled',$(this).scrollTop() > 200);
// });

$(function () {
    $(document).scroll(function () {
      var $nav = $(".sticky-top");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });