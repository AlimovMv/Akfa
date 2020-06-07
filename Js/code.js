$(document).ready(function () {
    $("#carousel1").owlCarousel({
        loop: true, //Зацикливаем слайдер
        margin: 50, //Отступ от элемента справа в 50px
        nav: true, //Отключение навигации
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

$(document).ready(function () {
    $("#carousel2").owlCarousel({
        loop: true, //Зацикливаем слайдер
        nav: true, //Отключение навигации
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
                items: 3
            }
        }
    });
});

$(document).ready(function () {
    $("#carousel3").owlCarousel({
        loop: true, //Зацикливаем слайдер
        nav: true, //Отключение навигации
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
});

function submitOnClick(buttonlink, user, password) {

    alert("Вы нажали на кнопку " + buttonlink.name);
}