var jQuery = require('jquery');

(function ($) {
  
      $.fn.scrollfx = function (options) {
  
  
  
          // Default options
          var settings = $.extend({
              negative: false,
              translateValue: '25',
              mobile: false,
              translate:'translateY'
          }, options);
  
          var element = this;
  
          //screen size
          var display,
            off,
            middleParent,
            breakpoint,
            windowWidth;
  
          var scroll = function () {
              $(document).scroll(function () {
  
                  display = $(window).height();
                  off = element.parent().offset();
                  middleParent = ($(element).parent().height()) /50;
                  if (($(document).scrollTop() + display) >= off.top) {
                      var translate = ($(document).scrollTop() - off.top + middleParent) / display * 100;
                      if (settings.negative == false) {
                          if (translate >= 0) {
                              translate = 0
                          }
                          if (translate > -settings.translateValue && translate <= 0) {
                              $(element).css({
                                  'transform': settings.translate+'(' + translate + '%)'
                              });
                          }
                      } else {
                          var translateNeg = -translate;
                          if (translateNeg <= 0) {
                              translateNeg = 0
                          }
                          if (translateNeg < settings.translateValue && translateNeg >= 0) {
                              $(element).css({
                                  'transform': settings.translate+'(' + translateNeg + '%)'
                              });
                          }
                      }
                  }
  
              });
          };
  
          var init = function () {
              breakpoint = 767;
              windowWidth = $(window).width();
              if (settings.mobile == false || settings.addcss == false) {
                  if (windowWidth > breakpoint) {
                      if (settings.negative) {
                          $(element).css({
                              'transform': settings.translate+'(' + settings.translateValue + '%)'
                          });
                      } else {
                          $(element).css({
                              'transform': settings.translate+'(-' + settings.translateValue + '%)'
                          });
                      }
  
                      scroll();
                  }
              }
          };
  
          init();
  
  
          // Apply options
          return this;
  
      };
  
  }(jQuery));