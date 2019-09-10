function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find('.burger-menu__button');
    let links = menu.find('.burger-menu__link');
    let overlay = menu.find('.burger-menu__overlay');



    button.on('click', (e) => {
        e.preventDefault();
        toggleMenu();
    });
    links.on('click', () =>
        toggleMenu());


    overlay.on('click', () =>
        toggleMenu());

    function toggleMenu() {

        menu.toggleClass('burger-menu_active');

        if (menu.hasClass('burger-menu_active')) {
            $('body').css('overflow', 'hidden');
        } else {
            $('body').css('overflow', 'visible');
        }
    }
}
burgerMenu('.burger-menu');


$(function() {

    $('a[data-target^="anchor"]').bind('click.smoothscroll', function() {

        var target = $(this).attr('href'),
            to_top = $(target).offset().top;
        $('body,html').animate({ scrollTop: to_top }, 700);
        return false;
    });
});

$('body').append('<button class="btn__up"/>');
$('.btn__up').click(function() {

    $('body').animate({ 'scrollTop': 0 }, 1000);

    $('html').animate({ 'scrollTop': 0 }, 1000); //чтобы на разных браузерах работало

});

$(window).scroll(function() {
    if ($(window).scrollTop() > 200) {
        $('.btn__up').addClass('active');
    } else {
        $('.btn__up').removeClass('active');

    }

}); //ЧТОБЫ когда проскролили текст появлялась стрелка,не сразу