//var jQuery = require('jQuery');
//var slick = require('slick-carousel');
//
//jQuery(document).ready(function($){
////  console.log($('.slick-carousel').html());
//  var sliderSlick = $('.slick-carousel');
//  sliderSlick.slick({
//    arrows: false,
//    dots: false
//  });
//});

var jQuery = require('jquery');
//var ProgressBar = require('progressbar.js');
//var Slick = require('slick-carousel');

jQuery(document).ready(function ($) {

  var slider = $('.slick-carousel');
    if (slider.length) {
    slider.slick({
      arrows: false,
      dots: false
    });

});