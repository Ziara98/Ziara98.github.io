window.addEventListener('DOMContentLoaded', () => { // Эта строчка говорит о том, что выполнение кода должно начаться только после того, как все DOMдерево загрузится.
    // Это позвоялет избежать ошибок, если, например, что-то еще не загрузилось, а js уже пытается взаимодействовать с этим незагруженным элементом.

    // МОДАЛЬНЫЕ ОКНА//
    ;
    (function() {

        const modal = document.querySelector('.wrapper');
        const modalBtn = document.querySelectorAll('.btn');
        const body = document.getElementsByTagName('body')[0];
        const modalClose = document.querySelector('.close');

        modalBtn.forEach(btn => {
            btn.addEventListener('click', () => {
                modal.classList.toggle('modal__show');
                body.classList.toggle('no-scroll');
            });
        });

        modalClose.addEventListener('click', () => {
            if (modal.classList.contains('modal__show')) {
                modal.classList.remove('modal__show');
                body.classList.remove('no-scroll');
            }
        });
    })();

    // НАЖИМАЕМ НА КНОПКУ И МЕНЯЕТСЯ КАРТИНКА У  1 БЛОКА  И ТЕКСТ У ДРУГОГО (ТЕКСТ ПРОПИСАН ЧЕРЕЗ JS)
    ;
    (function() {

        // Определяем ВСЕ элементы (кнопки) с указанным классом. Получаем коллекцию элементов или псевдомассив
        const sliderBtns = document.querySelectorAll('.btn--nec');
        // Определяем картинку по классу
        const image = document.querySelector('.nec__item__img');
        // Определяем заголовок блока с текстом по классу
        const title = document.querySelector('.mid__title');
        // Определяем блок с текстом по классу
        const text = document.querySelector('.mid__text');
        // Создаем массив с ссылками на гифки
        const imagesArr = ['img/gif-1.gif', 'img/gif-2.gif', 'img/gif-3.gif', 'img/gif-4.gif'];
        // Создаем массив с заголовками текстовых блоков
        const titlesArr = ['Рабочее место', 'Компьютер и смартфон с гарнитурой', 'Стабильный интернет', 'Желание зарабатывать'];
        // Создаем массив с текстом
        const textsArr = [
            'Пусть это будет Ваш любимый стол, кресло, диван... Ваше местонахождение может быть где угодно. Вы располагаетесь в удобном вам месте',
            'Android-смартфон версия от 4.1 и выше',
            'Для комфортной работы потребуется стабильное интернет соединение',
            'Желание работать и развиваться в сфере продаж. Возможность самостоятельно определять свой уровень дохода'
        ];

        // Берем псевдомассив кнопок и перебираем его. Btn - это каждый элемент этого псевдомассива. Его можно называть как угодно (например, item). 
        // Просто каждый разработчик пишет код так, чтобы было легче его воспринимать. Мы перебираем пседомассив из button, поэтому и называем кажду из них btn. Так понятнее и удобнее.
        // Index - порядковый номер каждого элемента псевдомассива. Также может именоваться по-разному. Иногда пишут просто i.
        sliderBtns.forEach((btn, index) => {
            // Перебирая псевдомассив мы на каждый его элемент (кнопку) вешаем обработчик событий (в нашем случае click).
            btn.addEventListener('click', () => {
                // При клике выполняется следующий код. Мы задаем картинке аттрибут src. Берем массив ссылок на гифки и выбираем из него элемент (ссылку) с порядковым номером, равным 
                // индексу текущего элемента (то есть той кнопки, по которой мы кликнули)
                // Например, кликнули по 3-й кнопке. Она имеет индекс 2 (отсчет в массивах начинается с 0). И мы заменяем текущую активную ссылку на ссылку, которая находится в массиве
                // как элемент с индексом 2. То есть третья ссылка по порядку. Получается клик по 3-й кнопке, подставляет 3-ю ссылку в img. 
                image.setAttribute('src', imagesArr[index]);
                // С заголовками и текстом все происходит аналогично. Подставляется элемент с индексом той кнопки, по которой был совершен клик.


            });
        });
    })();

    // ПЕРЕХОДЫ ЯКОРНЫХ ССЫЛОК
    ;
    (function() {

        //ЧТОБЫ ССЫЛКИ ПЛАВНО ПЕРЕХОДИЛИ НА НУЖНЫЙ БЛОК,это на все якорные ссылки распространяется,на обычные нет/
        let arrow = document.querySelectorAll('[href^="#"]'), //выбираем все ссылки к якорю на странице
            v = 1; // скорость, может иметь дробное значение через точку (чем меньше значение - тем больше скорость)
        for (let i = 0; i < arrow.length; i++) {
            arrow[i].addEventListener('click', function(e) { //по клику на ссылку
                e.preventDefault(); //отменяем стандартное поведение
                let w = window.pageYOffset, // производим прокрутка прокрутка
                    hash = this.href.replace(/[^#]*(.*)/, '$1'); // к id элемента, к которому нужно перейти
                t = document.querySelector(hash).getBoundingClientRect().top, // отступ от окна браузера до id
                    start = null;
                requestAnimationFrame(step);

                function step(time) {
                    if (start === null) start = time;
                    let progress = time - start,
                        r = (t < 0 ? Math.max(w - progress / v, w + t) : Math.min(w + progress / v, w + t));
                    window.scrollTo(0, r);
                    if (r != w + t) {
                        requestAnimationFrame(step)
                    } else {
                        location.hash = hash // URL с хэшем
                    }
                }
            }, false);
        }
    })();


    // ANIMATE CSS
    ;
    (function() {

        const screens = document.querySelectorAll('.screen');
        const animatedElements = document.querySelectorAll('.animated');


        function getVisibleScreen() {
            let visibleScreen = 0;
            let winHeight = window.innerHeight;
            let scrollTop = window.pageYOffset;
            let currentMiddle = winHeight / 2 - 100;
            let screenHeight, screenTop;

            screens.forEach((item, index) => {
                screenHeight = item.offsetHeight;
                screenTop = item.offsetTop;

                if (currentMiddle > screenTop - scrollTop) {
                    visibleScreen = index;
                }
            });
            return visibleScreen;
        }

        let timeout;

        function animateScrollTo(scrollValue, k) {
            let currentScroll = window.pageYOffset;
            let delta = (k) ? 50 : -50;

            if ((currentScroll >= scrollValue && k) || (currentScroll <= scrollValue && !k)) {
                window.scrollTo(0, scrollValue);
                clearTimeout(timeout);
            } else {
                window.scrollTo(0, currentScroll + delta);
                timeout = setTimeout(animateScrollTo, 20, scrollValue, k);
            }
        }

        // function animateElements(activeNum){
        //     animatedElements.forEach(function (item, index) {
        //         item.classList.add('animation-run');
        //     });
        // }

        function animateElements() {
            let winHeight = window.innerHeight;
            let scrollTop = window.pageYOffset;

            animatedElements.forEach((item, index) => {
                if (item.offsetTop - scrollTop < winHeight - item.offsetHeight) {
                    item.classList.add('animation-run');
                }
            });
        }

        window.addEventListener('scroll', () => {
            // menuSize();
            // activeMenuItem(getVisibleScreen());
            animateElements(getVisibleScreen());
            animateElements();
        });

        window.addEventListener('load', () => {
            // menuSize();
            // activeMenuItem(getVisibleScreen());
            animateElements(getVisibleScreen());
            animateElements();
        });

        // menuItems.forEach(function (item, index) {
        //     item.addEventListener('click', function (event) {
        //         event.preventDefault();
        //         var screenTop = screens[index].offsetTop;
        //         var direction = true;
        //         if(screenTop < window.pageYOffset) {
        //             direction = false;
        //         }
        //         animateScrollTo(screenTop, direction);
        //     });
        // });

    })();

});