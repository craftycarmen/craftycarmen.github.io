"use strict";

jQuery(document).ready(function ($) {

    $(window).on('load', function () {
        $(".loaded").fadeOut();
        $(".preloader").delay(1000).fadeOut("slow");
    });

    /*---------------------------------------------*
     * Mobile menu
     ---------------------------------------------*/
    $('#bs-example-navbar-collapse-1').find('a[href*="#"]:not([href="#"])').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 40)
                }, 1000);
                if ($('.navbar-toggle').is(':visible')) {
                    $(this).closest('.navbar-collapse').collapse('toggle');
                }
                return false;
            }
        }
    });

    /*---------------------------------------------*
     * STICKY scroll
     ---------------------------------------------*/
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.navbar-fixed-top').addClass('menu-scroll');
        } else {
            $('.navbar-fixed-top').removeClass('menu-scroll');
        }
    });

    /*---------------------------------------------*
     * Counter 
     ---------------------------------------------*/
    $('.statistic-counter').counterUp({
        delay: 10,
        time: 2000
    });

    /*---------------------------------------------*
     * WOW
     ---------------------------------------------*/
    var wow = new WOW({
        mobile: false // trigger animations on mobile devices (default is true)
    });
    wow.init();

    /* ---------------------------------------------------------------------
     Carousel
     ---------------------------------------------------------------------= */
    $('.slider').owlCarousel({
        responsiveClass: true,
        autoplay: false,
        items: 1,
        loop: true,
        dots: true,
        nav: false,
        navText: [
            "<i class='lnr lnr-chevron-left'></i>",
            "<i class='lnr lnr-chevron-right'></i>"
        ],
        autoplayHoverPause: true
    });

    /*---------------------------------------------*
     * EasyPieChart
     ---------------------------------------------*/
    $('.chart').easyPieChart({
        animate: 2000,
        scaleColor: false,
        lineWidth: 10,
        lineCap: 'square',
        size: 130,
        trackColor: false,
        barColor: '#498af3',
        onStep: function (from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
        }
    });

    /*---------------------------------------------*
     * Scroll Up
     ---------------------------------------------*/
    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
            $('.scrollup').fadeIn('slow');
        } else {
            $('.scrollup').fadeOut('slow');
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({ scrollTop: 0 }, 1000);
        return false;
    });
});
