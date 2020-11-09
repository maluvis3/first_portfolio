$(document).ready(function () {

    // mobile menu click event
    $(".menuBtn").click(function () {
        $(this).toggleClass("on");
        if ($(this).hasClass("on")) {
            $(".gnb").animate({ right: 0 }, 300);
        } else {
            $(".gnb").animate({ right: '-100%' }, 300);
        }

        if ($("header").hasClass("on")) {
            if ($(this).hasClass("on")) {
                $(this).find("div").css("background", "#fff");
            } else {
                $(this).find("div").css("background", "#101010");
            }
        }
    });



    //Check to see if the window is top if not then display button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    //Click event to scroll to top
    $('.scrollToTop').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });



    // main page portfolio slide section
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        navText: [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        navContainer: '.main-content .custom-nav',
        dots: false,
        autoplay: false,
        autoplayTimeout: 2000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    });

    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true
    });

    new WOW().init();

});