'use strict';

var jQuery = require('jquery');
global.$ = jQuery;
global.Popper = require('popper.js');
var Slick = require('slick-carousel');
require('./case-study');
require('./slider-home');
//require('./aw_navigation');
//require('./jquery.scrollfx');

var bootstrap = require('bootstrap');

jQuery(document).ready(function ($) {

//  var translateUp = $('.js-wrapper-tranlateUp');
//  var translateDown = $('.js-wrapper-tranlateDown');
//  if (translateDown.length >= 1) {
//    translateDown.scrollfx({translateValue: 30});
//  }
//  if (translateUp.length >= 1) {
//    translateUp.scrollfx({'negative': true, translateValue: 30});
//  }

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


});
  
  
