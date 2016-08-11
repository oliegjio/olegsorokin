$(function () {
    var $welcome_section_shadow = $('.welcome-section__shadow').first();
    var $header = $('.header').first();
    var $carousel = $('.header-carousel').first();
    var $body = $('body');
    var $open_offcanvas = $('#open-offcanvas');
    var $site_overlay = $('.site-overlay').first();
    var $offcanvas_menu = $('.offcanvas-menu').first();
    var $parallax_break = $('.parallax-break');
    if ($body.scrollTop() > 0) {
        $header.addClass('header--fixed');
    }
    $parallax_break.parallax({ imageSrc: '../images/future/sky2_1.jpg', androidFix: false });
    $header.scrollspy({
        min: 1,
        max: $body.height(),
        onEnter: function (element, position) {
            $header.addClass('header--fixed');
            $header.find('.primary-button').addClass('primary-button--color-dark--hover');
        },
        onLeave: function (element, position) {
            $header.removeClass('header--fixed');
            $header.find('.primary-button').removeClass('primary-button--color-dark--hover');
        }
    });
    $carousel.slick({
        appendArrows: $welcome_section_shadow,
        autoplaySpeed: 2000,
        arrows: true,
        fade: true,
        infinite: true,
        speed: 2500,
        swipe: false
    });
    $open_offcanvas.click(function () {
        $open_offcanvas.toggleClass('hamburger--open');
    });
    $site_overlay.click(function () {
        $open_offcanvas.removeClass('hamburger--open');
    });
});

//# sourceMappingURL=map/main.js.map
