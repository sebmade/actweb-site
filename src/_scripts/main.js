'use strict';

var jQuery = require('jquery');
global.$ = jQuery;
global.Popper = require('popper.js');
var Slick = require('slick-carousel');
require('./case-study');
require('./slider-home');

var bootstrap = require('bootstrap');

var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: 'v49GjvFaG0aS20YySUodb4AN0',
  consumer_secret: 'bNBLSpgnuxyh7DPF43cCquSQb8yW0mzSDfzeg4dCroipXnQ0C7',
  access_token_key: '33459676-0ftc10sFDVPuIpegegD3ynEjHvCvY9aQd1zemAZ9P',
  access_token_secret: 'pFhV5A5fbMuPnFZ8liIMerMuhiYadBZTbqlX7nvLCLdRK'
});

var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});

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


});
  
  
