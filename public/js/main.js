$(function () {
    var $welcomeSectionShadow = $('.welcome-section__shadow').first();
    var $header = $('.header').first();
    var $headerCarousel = $('.header-carousel').first();
    var $body = $('body');
    var $openOffcanvas = $('#open-offcanvas');
    var $siteOverlay = $('.site-overlay').first();
    var $offcanvasMenu = $('.offcanvas-menu').first();
    var $offcanvasMenuHomeLink = $('.offcanvas-menu__home-link');
    var $offcanvasMenuContactLink = $('.offcanvas-menu__contact-link');
    var $offcanvasMenuAboutLink = $('.offcanvas-menu__about-link');
    var $parallaxBreak = $('.parallax-break');
    var $progressBars = $('.skills-section__progress-bar');
    var activatedProgressBars = [false, false, false, false];
    var $headerAboutLink = $('.header__about-link');
    var $headerContactLink = $('.header__contact-link');
    var $aboutMeSection = $('.about-me-section');
    var $contactMeSection = $('.contact-me-section');
    var $advantagesSectionAdvantage = $('.advantages-section__advantage');
    var $welcomeSectionPrimaryHeader = $('.welcome-section__primary-header');
    var $welcomeSectionSecondaryHeader = $('.welcome-section__secondary-header');
    var $welcomeSectionSlogan = $('.welcome-section__slogan');
    var $welcomeSectionPrimaryButton = $('.welcome-section .primary-button');
    var $aboutMeSectionTextWrapper = $('.about-me-section__text-wrapper');
    var $aboutMeSectionImageWrapper = $('.about-me-section__image-wrapper');
    var $contactMeSectionHeader = $('.contact-me-section__header');
    var $contactMeForm = $('#contact-me-form');
    var $contactMeSectionSubmit = $('.contact-me-section__submit');
    var isMobile = false;
    if (navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/webOS/i) ||
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/iPod/i) ||
        navigator.userAgent.match(/BlackBerry/i) ||
        navigator.userAgent.match(/Windows Phone/i)) {
        isMobile = true;
    }
    if (!isMobile) {
        $aboutMeSectionTextWrapper.scrollspy({
            min: $aboutMeSectionTextWrapper.offset().top - $(window).innerHeight(),
            max: $('body').height(),
            onEnter: function () {
                $aboutMeSectionTextWrapper
                    .addClass('animated')
                    .addClass('bounceInLeft');
            }
        });
        $aboutMeSectionImageWrapper.scrollspy({
            min: $aboutMeSectionImageWrapper.offset().top - $(window).innerHeight(),
            max: $('body').height(),
            onEnter: function () {
                $aboutMeSectionImageWrapper
                    .addClass('animated')
                    .addClass('bounceInRight');
            }
        });
        $contactMeForm.scrollspy({
            min: $contactMeForm.offset().top - $(window).innerHeight() + ($contactMeForm.height() / 4),
            max: $('body').height(),
            onEnter: function () {
                $contactMeForm.css('visibility', 'visible');
                $contactMeForm
                    .addClass('animated')
                    .addClass('flipInX');
            }
        });
        var _loop_1 = function(i) {
            var $advantage = $($advantagesSectionAdvantage[i]);
            $advantage.scrollspy({
                min: $advantage.offset().top - $(window).innerHeight(),
                max: $body.height(),
                onEnter: function () {
                    if ($advantage.hasClass('animated'))
                        return;
                    $advantage.addClass('animated').addClass('bounceInLeft');
                }
            });
        };
        for (var i = 0; i < $advantagesSectionAdvantage.length; i++) {
            _loop_1(i);
        }
        setTimeout(function () {
            $welcomeSectionShadow.css('background-color', 'rgba(0, 0, 0, 0.20)');
            $welcomeSectionPrimaryButton
                .show()
                .addClass('animated')
                .addClass('slideInUp');
        }, 600);
        function primaryButtonRemoveAnimation() {
            $welcomeSectionPrimaryButton
                .removeClass('animated')
                .removeClass('slideInUp');
        }
        $welcomeSectionPrimaryButton.mouseenter(function () {
            primaryButtonRemoveAnimation();
            $welcomeSectionPrimaryButton
                .addClass('animated')
                .addClass('pulse')
                .addClass('infinite');
        });
        $welcomeSectionPrimaryButton.mouseleave(function () {
            primaryButtonRemoveAnimation();
            $welcomeSectionPrimaryButton
                .removeClass('animated')
                .removeClass('pulse')
                .removeClass('infinite');
        });
    }
    else {
        $contactMeForm.css('visibility', 'visible');
    }
    var _loop_2 = function(i) {
        var $progressBar = $($progressBars[i]);
        $progressBar.scrollspy({
            min: $progressBar.offset().top - $(window).innerHeight() - 150,
            max: $body.height(),
            onEnter: function () {
                if (activatedProgressBars[i] === true)
                    return;
                var percentage = parseInt($progressBar.children().get(0).innerHTML.replace('%', ''));
                var progress = 40;
                if (isMobile == false) {
                    var interval_1 = setInterval(function () {
                        $progressBar.css('width', progress + '%');
                        progress += 0.5;
                        if (progress === percentage) {
                            clearInterval(interval_1);
                        }
                    }, 10);
                }
                else {
                    $progressBar.css('width', percentage + '%');
                }
                activatedProgressBars[i] = true;
            }
        });
    };
    for (var i = 0; i < $progressBars.length; i++) {
        _loop_2(i);
    }
    $headerAboutLink.click(function (event) {
        event.preventDefault();
        $('html body').animate({
            scrollTop: $aboutMeSection.offset().top - ($aboutMeSection.height() / 2)
        }, 700);
    });
    $offcanvasMenuHomeLink.click(function (event) {
        event.preventDefault();
        $('html body').animate({
            scrollTop: 0
        }, 700);
        $openOffcanvas.click();
    });
    $offcanvasMenuAboutLink.click(function (event) {
        event.preventDefault();
        $('html body').animate({
            scrollTop: $aboutMeSection.offset().top - ($aboutMeSection.height() / 12)
        }, 700);
        $openOffcanvas.click();
    });
    $offcanvasMenuContactLink.click(function (event) {
        event.preventDefault();
        $('html body').animate({
            scrollTop: $contactMeSection.offset().top - ($contactMeSection.height() / 12)
        }, 700);
        $openOffcanvas.click();
    });
    $headerContactLink.click(function (event) {
        event.preventDefault();
        $('html body').animate({
            scrollTop: $contactMeSection.offset().top - ($contactMeSection.height() / 8)
        }, 700);
    });
    $parallaxBreak.parallax({
        imageSrc: 'images/sky.jpg',
        parallax: 'scroll'
    });
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
        autoplaySpeed: 5000,
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
    $contactMeSectionSubmit.click(function (event) {
        event.preventDefault();
        $.ajax({
            type: 'POST',
            url: 'mail.php',
            data: $contactMeForm.serialize(),
            success: function (response) {
            },
            error: function () {
            }
        });
    });
    $(window).scroll();
});

//# sourceMappingURL=map/main.js.map
