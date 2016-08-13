$(function () {
    var $welcomeSectionShadow = $('.welcome-section__shadow').first();
    var $header = $('.header').first();
    var $headerCarousel = $('.header-carousel').first();
    var $body = $('body');
    var $openOffcanvas = $('#open-offcanvas');
    var $siteOverlay = $('.site-overlay').first();
    var $offcanvasMenu = $('.offcanvas-menu').first();
    var $parallaxBreak = $('.parallax-break');
    var $progressBars = $('.skills-section__progress-bar');
    var activatedProgressBars = [false, false, false, false];
    var $whatIDoSectionParallax = $('.what-i-do-section__parallax');
    var $whatIDoSectionCarousel = $('.what-i-do-section__carousel');
    var $whatIDoSectionContentWrapper = $('.what-i-do-section__content-wrapper');
    var _loop_1 = function(i) {
        var $progressBar = $($progressBars[i]);
        $progressBar.scrollspy({
            min: $progressBar.offset().top - $(window).innerHeight(),
            max: $body.height(),
            onEnter: function () {
                if (activatedProgressBars[i] === true)
                    return;
                var percentage = parseInt($progressBar.children().get(0).innerHTML.replace('%', ''));
                var progress = 40;
                var interval = setInterval(function () {
                    $progressBar.css('width', progress + '%');
                    progress += 0.5;
                    if (progress === percentage) {
                        clearInterval(interval);
                    }
                }, 10);
                activatedProgressBars[i] = true;
            }
        });
    };
    for (var i = 0; i < $progressBars.length; i++) {
        _loop_1(i);
    }
    $parallaxBreak.parallax({ imageSrc: '../images/sky1.jpg' });
    $whatIDoSectionParallax.parallax({ imageSrc: '../images/sky2.jpg' });
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
    $headerCarousel.slick({
        appendArrows: $welcomeSectionShadow,
        autoplaySpeed: 2000,
        arrows: true,
        fade: true,
        infinite: true,
        speed: 2500,
        swipe: false
    });
    $whatIDoSectionCarousel.slick({
        appendArrows: $whatIDoSectionContentWrapper,
        infinite: true,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $openOffcanvas.click(function () {
        $openOffcanvas.toggleClass('hamburger--open');
    });
    $siteOverlay.click(function () {
        $openOffcanvas.removeClass('hamburger--open');
    });
    $(window).scroll();
});

//# sourceMappingURL=map/main.js.map
