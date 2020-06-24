$(document).ready(function () {

    $('.socialButton').click(function (event) {
        $('.socialButton-open').toggleClass('active');
    });

    $('.ordersButton').click(function (event) {
        $('.orders').toggleClass('active');
        $('.ordersButton').toggleClass('clicked');
        $('body').toggleClass('lock');
    });

    $('.burgermenu').click(function (event) {

        $('body').addClass('lock');
        $('.burgermenu').removeClass('active');
        $('.burgermenu').addClass('inactive');

        $('.burgermenu-x').removeClass('inactive');
        $('.burgermenu-x').addClass('active');

        $('.socialButton-open').removeClass('inactive');
        $('.socialButton-open').addClass('active');

        $('.header__nav').removeClass('inactive');
        $('.header__nav').addClass('active');

        //При нажатии на burger нужно отображать блок .header__nav:before
        //$('.header__nav:before').removeClass('inactive');
        //$('.header__nav:before').addClass('active');


    });

    $('.burgermenu-x').click(function (event) {

        $('body').removeClass('lock');
        $('.burgermenu-x').removeClass('active');
        $('.burgermenu-x').addClass('inactive');

        $('.burgermenu').removeClass('inactive');
        $('.burgermenu').addClass('active');

        $('.socialButton-open').removeClass('active');
        $('.socialButton-open').addClass('inactive');

        $('.header__nav').removeClass('active');
        $('.header__nav').addClass('inactive');

        //При нажатии на burger нужно скрыть блок .header__nav:before
        //$('.header__nav:before').removeClass('active');
        //$('.header__nav:before').addClass('inactive');

    });



    $('.loginButton').click(function (event) {
        $('body').addClass('lock');
        $('.popup__login').removeClass('close');
        $('.popup__login').addClass('open');
    });


    $('.popup__login-button').click(function (event) {
        $('body').removeClass('lock');
        $('.popup__login').removeClass('open');
        $('.popup__login').addClass('close');
    });

    $('.popup__login-close').click(function (event) {
        $('body').removeClass('lock');
        $('.popup__login').removeClass('open');
        $('.popup__login').addClass('close');
    });

    $('.popup__login-button').click(function (event) {
        $('body').removeClass('lock');
        $('.loginButton').removeClass('active');
        $('.loginButton').addClass('inactive');

        $('.ordersButton').removeClass('inactive');
        $('.ordersButton').addClass('active');

        $('.products__item-addToOrder').removeClass('inactive');
        $('.products__item-addToOrder').addClass('active');
    });



    $('.popup__productCard-button').click(function (event) {
        $('body').removeClass('lock');
        $('.popup__productCard').removeClass('open');
        $('.popup__productCard').addClass('close');
    });

    $('.popup__productCard-close').click(function (event) {
        $('body').removeClass('lock');
        $('.popup__productCard').removeClass('open');
        $('.popup__productCard').addClass('close');
    });

    $('.products__item-addToOrder').click(function (event) {
        $('body').addClass('lock');
        $('.popup__productCard').removeClass('close');
        $('.popup__productCard').addClass('open');
    });

    $('.popup__productCard-cancel').click(function (event) {
        $('body').removeClass('lock');
        $('.popup__productCard').removeClass('open');
        $('.popup__productCard').addClass('close');
    });

    $("#carouselPartners").owlCarousel({
        loop: true, //Зацикливаем слайдер
        margin: 50, //Отступ от элемента справа в 50px
        nav: false, //Отключение навигации
        autoplay: true, //Автозапуск слайдера
        smartSpeed: 1000, //Время движения слайда
        autoplayTimeout: 3000, //Время смены слайда
        responsive: { //Адаптивность. Кол-во выводимых элементов при определенной ширине.
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });

    $("#carouselFeedbacks").owlCarousel({
        loop: true, //Зацикливаем слайдер
        nav: false, //Отключение навигации
        responsiveClass: true,
        navText: ["<img src='images/prev.png'>", "<img src='images/next.png'>"],
        autoplay: true, //Автозапуск слайдера
        smartSpeed: 1000, //Время движения слайда
        autoplayTimeout: 3000, //Время смены слайда
        responsive: { //Адаптивность. Кол-во выводимых элементов при определенной ширине.
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 3
            }
        }
    });

    $("#carouselHeader").owlCarousel({
        loop: true, //Зацикливаем слайдер
        nav: false, //Отключение навигации
        autoplay: true, //Автозапуск слайдера
        smartSpeed: 1000, //Время движения слайда
        autoplayTimeout: 2000, //Время смены слайда
        autoWidth: true,
        responsive: { //Адаптивность. Кол-во выводимых элементов при определенной ширине.
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    $("#carouselcertifications").owlCarousel({
        loop: true, //Зацикливаем слайдер
        margin: 50, //Отступ от элемента справа в 50px
        nav: false, //Отключение навигации
        autoplay: true, //Автозапуск слайдера
        smartSpeed: 1000, //Время движения слайда
        autoplayTimeout: 3000, //Время смены слайда
        responsive: { //Адаптивность. Кол-во выводимых элементов при определенной ширине.
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });
});

function submitOnClick(buttonlink, user, password) {
    alert("Вы нажали на кнопку " + buttonlink.name);
}