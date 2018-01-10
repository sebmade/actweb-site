var jQuery = require('jquery');
var ProgressBar = require('progressbar.js');
//var Slick = require('slick-carousel');

jQuery(document).ready(function ($) {
  var translate = 0;
  var sliderHome = $('.home-slider');
  var speedSlider = 2200;

  if ($('.container-home-slider').length) {
    sliderHome.slick({
      arrows: false,
      dots: false,
      autoplay: true,
      infinite: true,
      speed: speedSlider
    });
    sliderHome.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
//      $(slick.$slides.get(currentSlide)).addClass('slideFixed');
//      setTimeout(function () {
//        $(slick.$slides).removeClass('slideFixed');
//      }, 800); //500*/
      // aw-dynamics
//      translate = translate + 40;
//      $('.aw-dynamics').css('transform', 'translateY(-50%) translateX(-' + translate + '%)');
//      if (translate >= 100) {
//        translate = 0;
//      }
      // onglet navigation
//      navigationOngletChange(nextSlide);
    });
    sliderHome.on('afterChange', function (event, slick, currentSlide, nextSlide) {
//      $(slick.$slides).removeClass('slideFixed');
    });
//
//    linkWrapper.on('mouseenter', function () {
//      sliderHome.slick('slickPause');
//      navigationOngletChange($(this).data('index'));
//      setTimeout(function(){navigationOnglet.addClass('w-100')},timer*1000);
//      navigation.addClass('active');
//      navigationWrapper.find('.navigation-bgImg').attr('src',$(this).data('img'));
//      $(this).addClass('active')
//    });
//    linkWrapper.on('mouseleave', function () {
//      navigationWrapper.find('.navigation-bgImg').attr('src','none');
//      navigation.removeClass('active');
//      sliderHome.slick('slickPlay');
//      $(this).removeClass('active');
//      setTimeout(function(){navigationOnglet.removeClass('w-100')},timer*1000);
//    });
//
//
//    function navigationOngletChange(index) {
//
//      var linkHeight = linkWrapper.height();
//      var colorArray = [];
//      $.each(linkWrapper, function (index, item) {
//        colorArray.push($(item).data('color'));
//      });
//
//      navigationOnglet.height(linkHeight);
//      TweenMax.to(navigationOnglet, timer, {
//        background: colorArray[index],
//        y: index * 100 + '%'
//      });
//    }
//
//    function changeTimerToCircle(windowHeight) {
//      var burgerTimer = $('.burger-menu-timer');
//      var burgerWrapper = $('.wrapper-burgerMenu');
//      $(document).on('scroll', function () {
//        if ($(window).scrollTop() <= windowHeight) {
//          burgerTimer.addClass('force-visible');
//          burgerTimer.removeClass('force-disable');
//          burgerWrapper.addClass('force-disable');
//          burgerWrapper.removeClass('force-visible');
//        } else {
//          burgerTimer.addClass('force-disable');
//          burgerTimer.removeClass('force-visible');
//          burgerWrapper.removeClass('force-disable');
//          burgerWrapper.addClass('force-visible');
//
//        }
//      });
//    }
//
//
//    navigationOngletChange(0);
//    var windowHeight = $(window).height();
//    changeTimerToCircle(windowHeight);
//    $(window).resize(function () {
//      var windowHeight = $(window).height();
//      changeTimerToCircle(windowHeight);
//    });

  }

});