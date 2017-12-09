var jQuery = require('jquery');
require('gsap');

jQuery(document).ready(function ($) {
  var navigation = $('.main-navigation');
  var navigationWrapper = $('.navigation-wrapper');
  var btnCommercial = $('.ask-commercial');
  var siteTitle = $('.site-title');
  var burgerMenuWrapper = $('.wrapper-burgerMenu');
  var tl = new TimelineMax({paused: true});


  tl.set(navigationWrapper, {
    display: 'block'
  });

  tl.to(navigation, .4, {x: '0%'});


  $('.js-clickMenu').on('click', function (e) {
    e.preventDefault();
    console.log(navigationWrapper.hasClass('nav-animated'));
    if (navigationWrapper.hasClass('nav-animated')) {
      btnCommercial.removeClass('invisible');
      siteTitle.addClass('text-hide');
      burgerMenuWrapper.removeClass('stay-white burger-animated');
      tl.reverse();
      navigationWrapper.removeClass('nav-animated');
      setTimeout(function(){navigationWrapper.css('disaply','none')},.4)
    } else {
      btnCommercial.addClass('invisible');
      burgerMenuWrapper.addClass('stay-white burger-animated');
      siteTitle.removeClass('text-hide');
      tl.play();
      navigationWrapper.addClass('nav-animated');
    }
  });
});