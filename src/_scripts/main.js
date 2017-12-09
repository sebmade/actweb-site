'use strict';

var $ = require('jquery');
var jQuery = $;
require('./slider-home');
require('./aw_navigation');
require('./jquery.scrollfx');


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
      $(this).addClass('active')
    });
    project.on('mouseleave', function () {
      $(this).removeClass('active')
    });
  
  
    //Sameheight
    function getSameHeight(item, size) {
      if (item.length > 0) {
        item.height('auto');
        if (size) {
          var heights = item.map(function () {
              return $(this).height();
            }).get(),
            maxHeight = Math.max.apply(null, heights);
          item.height(maxHeight);
        }
      }
    }
    var logoAw = $('.logo_aw');
    var colorChange = $('.js-color-change');
    var bgChange = $('.js-bg-change');
    function changeElofBg(elementColorChange,classNameOne,classNameTwo) {
      $(window).on('scroll', function () {
        var isBlack = false;
        $('.js-bg-black').each(function (index, el) {
          if($(window).scrollTop() >= el.offsetTop && $(window).scrollTop() <= (el.offsetTop + $(el).height())){
            elementColorChange.addClass(classNameOne);
            elementColorChange.removeClass(classNameTwo);
            isBlack = true;
            return false;
          }
        });
        if(!isBlack){
          elementColorChange.removeClass(classNameOne);
          elementColorChange.addClass(classNameTwo);
        }
      })
    }
  
  
    var blockSameHeight = $('.js-sameHeight');
    $(window).on('load', function () {
      changeElofBg(logoAw,'force-white','force-black');
      changeElofBg(colorChange,'force-white','force-black');
      changeElofBg(bgChange,'force-bg-white','force-bg-black');
      getSameHeight(blockSameHeight, '$(window).width()>=768');
      $(window).resize(function () {
        changeElofBg(logoAw,'force-white','force-black');
        changeElofBg(colorChange,'force-white','force-black');
        changeElofBg(bgChange,'force-bg-white','force-bg-black');
        getSameHeight(blockSameHeight, '$(window).width()>=768');
      });
    });
  
  
  });
  
  
