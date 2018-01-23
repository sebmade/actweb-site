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
//    headerColor();
  });

//  headerColor();
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

  $('a#mailto').each(function() {
    var coded = "v5aag@c8b05C.pY"
    var key = "b45wZaBnGh3SsqdCVF0XcmLDvJQrojyKTfE8O16WziYgRuNtpeA7lxPIMHk92U"
    var shift = coded.length
    var link = ""
    for (var i=0; i<coded.length; i++) {
      if (key.indexOf(coded.charAt(i)) == -1) {
        var ltr = coded.charAt(i)
        link += (ltr)
      } else {     
        ltr = (key.indexOf(coded.charAt(i))-shift+key.length) % key.length
        link += (key.charAt(ltr))
      }
    }
    this.href = "mailto:"+link;
    this.target = "_blank";
    //this.onclick = function(e) {
    //  location.href = "mailto:"+link;
    //};
  });

  // obsolete - to be done
  $('.contact-form').on('submit', function (e) {
    var form = $(this);

      $.ajax({
        url: 'http://preprod.actweb.fr/new/mail.php',
        data: form.serialize(),
        type: 'POST',
        success: function(data){
          console.log('mail sent');
          form.html(data);
        },
        error: function(jqXHR, textStatus, errorThrown) {
          console.log(textStatus + ' ' + errorThrown);
        }
      });

    return false;
  });
});
  
  
