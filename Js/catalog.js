$(document).ready(function () {
    $('.header__login').click(function (event) {
        $('.popup__login').removeClass('close');
        $('.popup__login').addClass('open');
    });


    $('.popup__login').click(function (event) {
        $('.popup__login').removeClass('open');
        $('.popup__login').addClass('close');
    });
    $('.popup__login-close').click(function (event) {
        $('.popup__login').removeClass('open');
        $('.popup__login').addClass('close');
    });


    $('.popup__login-button').click(function (event) {
        $('.header__login').removeClass('active');
        $('.header__login').addClass('inactive');

        $('.orders').removeClass('inactive');
        $('.orders').addClass('active');

        $('.products__item-addToOrder').removeClass('inactive');
        $('.products__item-addToOrder').addClass('active');
    });
});