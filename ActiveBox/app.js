$(function() {
    /* Fixed header */

    let header = $("#header");
    let intro = $("#intro");

    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
    let nav = $("#nav");
    let navToggle = $("#navToggle");

    checkScroll(scrollPos, introH);
    $(window).on("scroll resize", function() {

        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();
        checkScroll(scrollPos, introH)


    });

    function checkScroll(scrollPos, introH) {
        if (scrollPos > introH) {
            header.addClass("fixed");

        } else {
            header.removeClass("fixed");
        }


    }

    /* smooth scroll */
    $("[data-scroll]").on("click", function(event) {

        event.preventDefault(); /* отменяет стандартное поведение ссылки*/

        let elementID = $(this).data('scroll');
        let elementOffset = $(elementID).offset().top;
        nav.removeClass("show");


        $("html,body").animate({
            scrollTop: elementOffset - 70 /* чтобы при скроле красиво попадал на нужный блок,не перекрывал его */
        }, 700); /* скорость анимации*/

    });

    /* nav toggle */



    navToggle.on("click", function(event) {

        event.preventDefault();
        nav.toggleClass("show");

    });

    /* slider   https://kenwheeler.github.io/slick/ */
    let slider = $("#reviewsSlider");


    slider.slick({
        infinite: true,
        /*если false,то после последнего слайда не будет скролить на начало*/
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
    });



});