$(function () {
    var $welcomeSectionShadow = $('.welcome-section__shadow').first();
    var $header = $('.header').first();
    var $carousel = $('.header-carousel').first();
    var $body = $('body');
    var $openOffcanvas = $('#open-offcanvas');
    var $siteOverlay = $('.site-overlay').first();
    var $offcanvasMenu = $('.offcanvas-menu').first();
    var $parallaxBreak = $('.parallax-break');
    if ($body.scrollTop() > 0) {
        $header.addClass('header--fixed');
    }
    var $progressBars = $('.skills-section__progress-bar');
    var $progressBarsLabels = $('.skills-section__progress-percent');
    var progressBarsPercentages = [];
    var _loop_1 = function(i) {
        progressBarsPercentages[i] = parseInt($progressBarsLabels[i].innerHTML.replace('%', ''));
        var progress = 30;
        var interval = setInterval(function () {
            var progressBar = $($progressBars[i]);
            var label = $($progressBarsLabels[i]);
            progressBar.css('width', progress + '%');
            progress += 0.5;
            console.log(progress);
            if (progress === progressBarsPercentages[i]) {
                clearInterval(interval);
            }
        }, 10);
    };
    for (var i = 0; i < $progressBars.length; i++) {
        _loop_1(i);
    }
    $parallaxBreak.parallax({ imageSrc: '../images/future/sky2_1.jpg' });
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
        appendArrows: $welcomeSectionShadow,
        autoplaySpeed: 2000,
        arrows: true,
        fade: true,
        infinite: true,
        speed: 2500,
        swipe: false
    });
    $openOffcanvas.click(function () {
        $openOffcanvas.toggleClass('hamburger--open');
    });
    $siteOverlay.click(function () {
        $openOffcanvas.removeClass('hamburger--open');
    });
});

//# sourceMappingURL=map/main.js.map
