$(function() {
    /* фильтр по категориям*/
    let filter = $("[data-filter]");



    filter.on("click", function(event) {
        event.preventDefault(); /*чтобы сам клик на ссылку работал+ отменяем стандартное поведение ссылки */


        let cat = $(this).data('filter'); /* когда нажимаем на ссылку,ей должен соответствовать опред класс*/
        if (cat == 'all') {
            $("[data-cat]").removeClass("hide"); /* для всех значений,если отедльная категория -то срабатывает фильтер */
        } else {

            $("[data-cat]").each(function() /* сами условия*/ {
                let workCat = $(this).data('cat'); /*data-cat в html */
                if (workCat != cat) {
                    $(this).addClass('hide'); /* в Css добавляем класс hide и пишем ему display:none*/
                } else {
                    $(this).removeClass('hide');
                }
            });
        }
    });

    // Modals //
    const modalCall = $("[data-modal]");
    const modalClose = $("[data-close]");
    modalCall.on("click", function(event) {

        let $this = $(this);
        let modalId = $this.data('modal');
        $(modalId).addClass('show');

        $("body").addClass('no-scroll'); //чтобы мы не могли скролить страницу основную,а только модальную //

        // Анимация для открытия модалки//

        setTimeout(function() {
            $(modalId).find(".modal__dialog").css({

                transform: "rotateX(0)"
            });
        }, 300); //делаем небольшую задержку // 


    });


    modalClose.on("click", function(event) {

        let $this = $(this);
        let modalParent = $this.parents('.modal'); //  ищем по родит классу//
        modalParent.removeClass('show');

        $("body").removeClass('no-scroll');
    });




    $(".modal").on("click", function(event) {

        $(this).removeClass('show');

        $("body").removeClass('no-scroll'); // модалка будет закрываться и при нажатии на экран //
    });




    $(".modal__dialog").on("click", function(event) {

        event.stopPropagation(); // чтобы когда мы пишем текст внутри модалки,он не закрывался//
    });

    // burger-menu//

    const navToggle = $("#navToggle");
    const nav = $("#nav");

    navToggle.on("click", function(event) {

        event.preventDefault();

        nav.toggleClass("show");


    });




});