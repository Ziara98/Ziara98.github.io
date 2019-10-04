$(document).ready(function() {
    $('.gallery__inner').slick({

        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        fade: true,

    });

    // burger-menu//

    const navToggle = $("#navToggle");
    const nav = $("#nav");
    const social = $("#social");
    const contact = $("#contact");

    navToggle.on("click", function(event) {

        event.preventDefault();

        nav.toggleClass("show");
        social.toggleClass("showing");
        contact.toggleClass("shows");

    });
    $('body').append('<button class="btn__up"/>');
    $('.btn__up').click(function() {

        $('body').animate({ 'scrollTop': 0 }, 1000);

        $('html').animate({ 'scrollTop': 0 }, 1000); //чтобы на разных браузерах работало

    });
});

$(window).scroll(function() {
    if ($(window).scrollTop() > 200) {
        $('.btn__up').addClass('active');
    } else {
        $('.btn__up').removeClass('active');

    }

});