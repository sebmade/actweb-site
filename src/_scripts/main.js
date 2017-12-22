'use strict';

var jQuery = require('jquery');
global.$ = jQuery;
global.Popper = require('popper.js');
require('./case-study');
require('./slider-home');
require('./aw_navigation');
require('./jquery.scrollfx');

var bootstrap = require('bootstrap');

jQuery(document).ready(function ($) {

  var translateUp = $('.js-wrapper-tranlateUp');
  var translateDown = $('.js-wrapper-tranlateDown');
  if (translateDown.length >= 1) {
    translateDown.scrollfx({translateValue: 30});
  }
  if (translateUp.length >= 1) {
    translateUp.scrollfx({'negative': true, translateValue: 30});
  }


  //overlay
  var project = $('.project-hover');
  project.on('mouseenter', function () {
    $(this).addClass('active');
  });
  project.on('mouseleave', function () {
    $(this).removeClass('active');
  });


  var logoAw = $('.logo_aw');
  var colorChange = $('.js-color-change');
  var bgChange = $('.js-bg-change');

  function headerColor(){
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


  $.getJSON("http://twitter.com/statuses/user_timeline.json?screen_name=FranckOhrel&count=1&include_rts=1&callback=?", function(data) {
    $("#twitter").html(data[0].text);
  });
//  var blockSameHeight = $('.js-sameHeight');
//  $(window).on('load', function () {
//    changeElofBg(logoAw, 'force-white', 'force-black');
//    changeElofBg(colorChange, 'force-white', 'force-black');
//    changeElofBg(bgChange, 'force-bg-white', 'force-bg-black');
//    $(window).resize(function () {
//      changeElofBg(logoAw, 'force-white', 'force-black');
//      changeElofBg(colorChange, 'force-white', 'force-black');
//      changeElofBg(bgChange, 'force-bg-white', 'force-bg-black');
//    });
//  });


});
  
  
