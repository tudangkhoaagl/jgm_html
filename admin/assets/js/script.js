$(document).ready(function () {

    $('.navbar-toggler').on('click', function () {
        $('#vertical-menu').toggleClass('show');
    });

    $('.menu-toggle').on('click', function (event) {
        event.preventDefault();
        $(this).next('.submenu').slideToggle();
        $(this).next('.submenu').toggleClass('sub-menu-active');
        $(this).toggleClass('active');
    });
});
