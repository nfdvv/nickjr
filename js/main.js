$(function(){
  $('.slider__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-prev.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-next.svg"></button>',
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    asNavFor: '.slider__nav',
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          arrows: false
        }
      }
    ]
  });
  $('.slider__nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    asNavFor: '.slider__slider',
    dots: false,
    arrows: false,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  });

  $('.header__btn').on('click', function(){
    $('.header__menu > ul').slideToggle();
  });

  $('.header__drop-down.drop-down').on('click', function(){
    $(this).children('.drop-down__list').slideToggle();
  });

  
});