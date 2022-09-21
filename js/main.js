

$(document).ready(function () {

  $('.works__slider').slick({

    dots: true,

    infinite: true,

    speed: 500,

    fade: true,

    cssEase: 'linear'

  });

});



$(function () {

  $(window).scroll(function () {

    if ($(this).scrollTop() != 0) {

      $('#toTop').fadeIn();

    } else {

      $('#toTop').fadeOut();

    }

  });

  $('#toTop').click(function () {

    $('body,html').animate({ scrollTop: 0 }, 800);

  });


  $('.menu__btn, .menu a').on('click', function () {
    $('.header__top-inner').toggleClass('header__top-inner--active');

  });

});


function scrollNav() {
  $('.header__top-nav a').click(function () {
    $(".active").removeClass("active");
    $(this).addClass("active");

    $('html, body').stop().animate({
      scrollTop: $($(this).attr('href')).offset().top - 160
    }, 600);
    return false;
  });
}
scrollNav();