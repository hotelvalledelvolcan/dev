
// -------   Mail Send ajax

// $(document).ready(function () {
//   var form = $('#myForm'); // contact form
//   var submit = $('.submit-btn'); // submit button
//   var alert = $('.alert-msg'); // alert div for show alert message

//   // form submit event
//   form.on('submit', function (e) {
//     e.preventDefault(); // prevent default form submit

//     $.ajax({
//       url: 'mail.php', // form action url
//       type: 'POST', // form submit method get/post
//       dataType: 'html', // request type html/json/xml
//       data: form.serialize(), // serialize form data
//       beforeSend: function () {
//         alert.fadeOut();
//         submit.html('Sending....'); // change submit button text
//       },
//       success: function (data) {
//         alert.html(data).fadeIn(); // fade in response data
//         form.trigger('reset'); // reset form
//         submit.attr("style", "display: none !important");; // reset submit button text
//       },
//       error: function (e) {
//         console.log(e)
//       }
//     });
//   });
// });

// (function ($) {
//   'use strict';

//   $.ajaxChimp = {
//     responses: {
//       'We have sent you a confirmation email': 0,
//       'Please enter a valid email': 1,
//       'An email address must contain a single @': 2,
//       'The domain portion of the email address is invalid (the portion after the @: )': 3,
//       'The username portion of the email address is invalid (the portion before the @: )': 4,
//       'This email address looks fake or invalid. Please enter a real email address': 5
//     },
//     translations: {
//       'en': null
//     },
//     init: function (selector, options) {
//       $(selector).ajaxChimp(options);
//     }
//   };

//   $.fn.ajaxChimp = function (options) {
//     $(this).each(function (i, elem) {
//       var form = $(elem);
//       var email = form.find('input[type=email]');
//       var label = form.find('.info');

//       var settings = $.extend({
//         'url': form.attr('action'),
//         'language': 'en'
//       }, options);

//       var url = settings.url.replace('/post?', '/post-json?').concat('&c=?');

//       form.attr('novalidate', 'true');
//       email.attr('name', 'EMAIL');

//       form.submit(function () {
//         var msg;
//         function successCallback(resp) {
//           if (resp.result === 'success') {
//             msg = 'We have sent you a confirmation email';
//             label.removeClass('error').addClass('valid');
//             email.removeClass('error').addClass('valid');
//           } else {
//             email.removeClass('valid').addClass('error');
//             label.removeClass('valid').addClass('error');
//             var index = -1;
//             try {
//               var parts = resp.msg.split(' - ', 2);
//               if (parts[1] === undefined) {
//                 msg = resp.msg;
//               } else {
//                 var i = parseInt(parts[0], 10);
//                 if (i.toString() === parts[0]) {
//                   index = parts[0];
//                   msg = parts[1];
//                 } else {
//                   index = -1;
//                   msg = resp.msg;
//                 }
//               }
//             }
//             catch (e) {
//               index = -1;
//               msg = resp.msg;
//             }
//           }

//           // Translate and display message
//           if (
//             settings.language !== 'en'
//             && $.ajaxChimp.responses[msg] !== undefined
//             && $.ajaxChimp.translations
//             && $.ajaxChimp.translations[settings.language]
//             && $.ajaxChimp.translations[settings.language][$.ajaxChimp.responses[msg]]
//           ) {
//             msg = $.ajaxChimp.translations[settings.language][$.ajaxChimp.responses[msg]];
//           }
//           label.html(msg);

//           label.show(2000);
//           if (settings.callback) {
//             settings.callback(resp);
//           }
//         }

//         var data = {};
//         var dataArray = form.serializeArray();
//         $.each(dataArray, function (index, item) {
//           data[item.name] = item.value;
//         });

//         $.ajax({
//           url: url,
//           data: data,
//           success: successCallback,
//           dataType: 'jsonp',
//           error: function (resp, text) {
//             console.log('mailchimp ajax submit error: ' + text);
//           }
//         });

//         // Translate and display submit message
//         var submitMsg = 'Submitting...';
//         if (
//           settings.language !== 'en'
//           && $.ajaxChimp.translations
//           && $.ajaxChimp.translations[settings.language]
//           && $.ajaxChimp.translations[settings.language]['submit']
//         ) {
//           submitMsg = $.ajaxChimp.translations[settings.language]['submit'];
//         }
//         label.html(submitMsg).show(2000);

//         return false;
//       });
//     });
//     return this;
//   };
// })(jQuery);



// Avoid `console` errors in browsers that lack a console.
(function () {
  var method;
  var noop = function () { };
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());

// Place any jQuery/helper plugins in here.

(function ($) {
  "use strict"


  // /* 1. Proloder */
  // $(window).on('load', function () {
  //   $('#preloader-active').delay(450).fadeOut('slow');
  //   $('body').delay(450).css({
  //     'overflow': 'visible'
  //   });
  // });

  /* 2. sticky And Scroll UP */
  // $(window).on('scroll', function () {
  //   var scroll = $(window).scrollTop();
  //   if (scroll < 400) {
  //     $(".header-sticky").removeClass("sticky-bar");
  //     $('#back-top').fadeOut(500);
  //   } else {
  //     $(".header-sticky").addClass("sticky-bar");
  //     $('#back-top').fadeIn(500);
  //   }
  // });

  // // Scroll Up
  // $('#back-top a').on("click", function () {
  //   $('body,html').animate({
  //     scrollTop: 0
  //   }, 800);
  //   return false;
  // });


  /* 3. slick Nav */
  // mobile_menu
  
  // var menu = $('ul#navigation');
  // if (menu.length) {
  //   menu.slicknav({
  //     prependTo: ".mobile_menu",
  //     closedSymbol: '+',
  //     openedSymbol: '-'
  //   });
  // };



  /* 4. MainSlider-1 */
  // h1-hero-active
//Cover.jsx

  // function mainSlider() {
  //   var BasicSlider = $('.slider-active');
  //   BasicSlider.on('init', function (e, slick) {
  //     var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
  //     doAnimations($firstAnimatingElements);
  //   });
  //   BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
  //     var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
  //     doAnimations($animatingElements);
  //   });
  //   try {
  //     BasicSlider.slick({
  //       autoplay: true,
  //       autoplaySpeed: 2000,
  //       dots: false,
  //       fade: true,
  //       arrows: false,
  //       prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
  //       nextArrow: '<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',
  //       responsive: [{
  //         breakpoint: 1024,
  //         settings: {
  //           slidesToShow: 1,
  //           slidesToScroll: 1,
  //           infinite: true,
  //         }
  //       },
  //       {
  //         breakpoint: 991,
  //         settings: {
  //           slidesToShow: 1,
  //           slidesToScroll: 1,
  //           arrows: false
  //         }
  //       },
  //       {
  //         breakpoint: 767,
  //         settings: {
  //           slidesToShow: 1,
  //           slidesToScroll: 1,
  //           arrows: false
  //         }
  //       }
  //       ]
  //     });
  //   } catch (error) {

  //   }



  //   function doAnimations(elements) {
  //     var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
  //     elements.each(function () {
  //       var $this = $(this);
  //       var $animationDelay = $this.data('delay');
  //       var $animationType = 'animated ' + $this.data('animation');
  //       $this.css({
  //         'animation-delay': $animationDelay,
  //         '-webkit-animation-delay': $animationDelay
  //       });
  //       $this.addClass($animationType).one(animationEndEvents, function () {
  //         $this.removeClass($animationType);
  //       });
  //     });
  //   }
  // }
  // mainSlider();



  /* 5. Gallery Active */

//Galery.jsx
  // tns({
  //   container: '.my-slider-photos',
  //   autoplay: true,
  //   autoplayTimeout: 4000,
  //   swipeAngle: false,
  //   speed: 600,
  //   items: 2,
  //   mouseDrag: true,
  //   nav: false,
  //   controls: false,
  //   autoplayButtonOutput: false,
  //   responsive: {
  //     640: {
  //       edgePadding: 20,
  //       gutter: 20,
  //       items: 2
  //     },
  //     700: {
  //       gutter: 30
  //     },
  //     900: {
  //       items: 3
  //     },
  //     900: {
  //       items: 5
  //     }
  //   }
  // });


  /* 4. Testimonial Active*/

  //Testimonials.jsx
  // tns({
  //   container: '.my-slider-clients',
  //   autoplay: false,
  //   autoplayTimeout: 2000,
  //   swipeAngle: false,
  //   speed: 200,
  //   items: 2,
  //   mouseDrag: true,
  //   nav: false,
  //   autoplayButtonOutput: false,
  //   prevButton: "#prevbutton",
  //   nextButton: "#nextbutton",
  //   responsive: {
  //     640: {
  //       edgePadding: 20,
  //       gutter: 20,
  //       items: 2
  //     },
  //     700: {
  //       gutter: 30
  //     }
  //   }
  // });


  /* 6. Nice Selectorp  */
  var nice_Select = $('select');
  if (nice_Select.length) {
    nice_Select.niceSelect();
  }

  /* 5. Popular Active */
  var client_list = $('.popular-item');
  if (client_list.length) {
    client_list.owlCarousel({
      slidesToShow: 4,
      slidesToScroll: 1,
      loop: true,
      center: true,
      margin: 10,
      autoplay: true,
      speed: 3000,
      smartSpeed: 2000,
      nav: false,
      dots: false,

      autoplayHoverPause: true,
      responsive: {
        0: {
          nav: false,
          items: 1,
          center: false,
        },
        768: {
          nav: false,
          items: 2,
        },
        992: {
          nav: false,
          items: 3,
        },
        1200: {
          nav: false,
          items: 4,
        }
      }
    });
  }


  // services active
  $('.client-active').slick({
    dots: false,
    infinite: true,
    autoplay: true,

    speed: 400,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      },
    ]
  });



  /* 7. data-background */
  $("[data-background]").each(function () {
    $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
  });


  /* 10. WOW active */
  new WOW().init();

  // // 11. ---- Mailchimp js --------//  
  // function mailChimp() {
  //   $('#mc_embed_signup').find('form').ajaxChimp();
  // }
  // mailChimp();


  // 12 Pop Up Img
  var popUp = $('.single_gallery_part, .img-pop-up');
  if (popUp.length) {
    popUp.magnificPopup({
      type: 'image',
      gallery: {
        enabled: true
      }
    });
  }
  // 12 Pop Up Video
  //VideoPreview.jsx
  // $('.popup-video').magnificPopup({ type: 'iframe', closeOnContentClick: true });

  // /* 13. counterUp*/
  // $('.counter').counterUp({
  //   delay: 10,
  //   time: 3000
  // });

  /* 14. Datepicker */
  $('#datepicker1').datepicker();
  $('#datepicker2').datepicker();

  // 15. Time Picker
  $('#timepicker').timepicker();

  //16. Overlay
  $(".snake").snakeify({
    speed: 200
  });


  //17.  Progress barfiller

  //  $('#bar1').barfiller();
  //  $('#bar2').barfiller();
  //  $('#bar3').barfiller();
  //  $('#bar4').barfiller();
  //  $('#bar5').barfiller();
  //  $('#bar6').barfiller();




  // Modal Activation
  $('.search-switch').on('click', function () {
    $('.search-model-box').fadeIn(400);
  });

  $('.search-close-btn').on('click', function () {
    $('.search-model-box').fadeOut(400, function () {
      $('#search-input').val('');
    });
  });

})(jQuery);

