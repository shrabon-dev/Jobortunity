$(function () {

    "use strict";
    $('.i__bar__menu').click(function(){
        $(this).fadeOut()
        $('.icon__cross').fadeIn()
     });
     $('.icon__cross').click(function(){
       $(this).fadeOut()
       $('.i__bar__menu').fadeIn()
     });

    // =====Pre Loader===== //
     
    // var loader = document.getElementById("loader");
    // window.addEventListener("load", function () {

    //     loader.style.visibility = "hidden";

    // });

    // ======Menufix===== //

    $(window).scroll(function(){
        if($(window).scrollTop()>750){
           $(".backTotop").fadeIn()
        }else{
           $(".backTotop").fadeOut()
    
        }
    
        if($(window).scrollTop()>300){
            $(".menu").addClass("fixed__menu")
          }else(
            $(".menu").removeClass("fixed__menu")
          )
      
    })


     // =====Closes responsive menu when a scroll link is clicked===== //

     $('.nav-link').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });


    // ======Smooth Scroll===== //

    // $('a[href*="#"]')
    //     .not('[href="#"]')
    //     .not('[href="#0"]')
    //     .click(function (event) {
    //         if (
    //             location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
    //             location.hostname == this.hostname
    //         ) {
    //             var target = $(this.hash);
    //             target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    //             if (target.length) {
    //                 event.preventDefault();
    //                 $('html, body').animate({
    //                     scrollTop: target.offset().top
    //                 }, 1000, function () {
    //                     var $target = $(target);
    //                     $target.focus();
    //                     if ($target.is(":focus")) {
    //                         return false;
    //                     } else {
    //                         $target.attr('tabindex', '-1');
    //                         $target.focus();
    //                     };
    //                 });
    //             }
    //         }
    //     });

  
    // ======Slick Slider===== //

    $(' .banner__img--slider').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 1000,
        speed: 1300,
        fade:true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
    }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
    }
  ]

    });

    $(' .testi__slider').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 1300,
        speed: 1300,
        asNavFor:'.testi__details__slider',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
    }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
    }
  ]

    });
    $('.testi__details__slider').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 1300,
        asNavFor:'.testi__slider',
        speed: 1300,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
    }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
    }
  ]

    });


    // =====scroll top===== //


    // $(".scroll_top").on('click', function () {
    //     $("html,body").animate({
    //         scrollTop: 0,
    //     }, 800);
    // });
    // $(window).on('scroll', function () {
    //     var scrolling = $(this).scrollTop();

    //     if (scrolling > 200) {
    //         $(".scroll_top").fadeIn();
    //     } else {
    //         $(".scroll_top").fadeOut();
    //     }
    // });



    // =====Aos Js===== n//

    AOS.init();



});
$('.venobox').venobox(); 

$('.counter').counterUp({
    delay: 10,
    time: 3000
});