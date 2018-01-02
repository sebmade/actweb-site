'use strict';

var jQuery = require('jquery');
global.$ = jQuery;
global.Popper = require('popper.js');
var Slick = require('slick-carousel');
require('./case-study');
require('./slider-home');

var bootstrap = require('bootstrap');

jQuery(document).ready(function ($) {
  $('.nav-link').on('click', function (e) {
    e.preventDefault();

    var id = $(this).attr('href');
    if ($(id).length > 0) {
      $('html, body').animate({
        'scrollTop': $(id).offset().top
      }, 1000);
    }
    else {
      window.location.href = '/' + id;
    }
  });

  //overlay
  var project = $('.project-hover');
  project.on('mouseenter', function () {
    $(this).addClass('active');
  });
  project.on('mouseleave', function () {
    $(this).removeClass('active');
  });

  function headerColor() {
    var isBlack = false;
    $('.js-bg-black').each(function (index, el) {
      if ($(window).scrollTop() >= el.offsetTop && $(window).scrollTop() <= (el.offsetTop + $(el).height())) {
        $('.site-header').addClass('header-white');

        isBlack = true;
        return false;
      }
    });
    if (!isBlack) {
      $('.site-header').removeClass('header-white');
    }
  }

  $(window).on('scroll', function (e) {
    headerColor();
  });

  headerColor();
  $(document).on('click', function (e) {
    var clickover = $(e.target);
    var _opened = $(".site-header .navbar-collapse").hasClass("collapse show");
    if (_opened === true && !clickover.hasClass("navbar-toggler")) {
      $("button.navbar-toggler").click();
    }
  });
  var value;

  var slick_settings = {
    respondTo: 'slider',
    vertical: true,
    verticalSwiping: true,
    infinite: false,
    dots: true,
    arrows: false,
    customPaging: function (slider, i) {
      value = i + 1;
      if (value < 10) {
        value = "0" + value;
      }

      return $('<button type="button" data-role="none" role="button" tabindex="0" />').text(value);
    },
    centerMode: true,
    adaptiveHeight: true,
    centerPadding: 0,
    mobileFirst: true
  };

  $('.fo-anim-tablet .image-slide-inner').slick(slick_settings);
  $(window).on('resize', function () {
    $('.block-anim-smartphone .image-slide-inner').slick('reInit');
  });
})
;
  
  
