///<reference path="typings/globals/jquery/index.d.ts"/>
///<reference path="typings/globals/slick-carousel/index.d.ts"/>
///<reference path="d.ts/jquery-scrollspy.d.ts"/>
///<reference path="d.ts/pace.d.ts" />
///<reference path="d.ts/parallax.d.ts" />
///<reference path="d.ts/progressbar.d.ts" />
///<reference path="d.ts/textillate.d.ts" />

$(() => {
    let $welcomeSectionShadow: JQuery = $('.welcome-section__shadow').first();
    let $header: JQuery = $('.header').first();
    let $headerCarousel: JQuery = $('.header-carousel').first();
    let $body: JQuery = $('body');
    let $openOffcanvas: JQuery = $('#open-offcanvas');
    let $siteOverlay: JQuery = $('.site-overlay').first();
    let $offcanvasMenu: JQuery = $('.offcanvas-menu').first();
    let $parallaxBreak: JQuery = $('.parallax-break');
    let $progressBars: JQuery = $('.skills-section__progress-bar');
    let activatedProgressBars: Array < boolean > = [false, false, false, false];
    let $headerAboutLink: JQuery = $('.header__about-link');
    let $headerContactLink: JQuery = $('.header__contact-link');
    let $aboutMeSection: JQuery = $('.about-me-section');
    let $contactMeSection: JQuery = $('.contact-me-section');
    let $advantagesSectionAdvantage: JQuery = $('.advantages-section__advantage');
    let $welcomeSectionPrimaryHeader: JQuery = $('.welcome-section__primary-header');
    let $welcomeSectionSecondaryHeader: JQuery = $('.welcome-section__secondary-header');
    let $welcomeSectionSlogan: JQuery = $('.welcome-section__slogan');
    let $welcomeSectionPrimaryButton: JQuery = $('.welcome-section .primary-button');
    let $aboutMeSectionTextWrapper: JQuery = $('.about-me-section__text-wrapper');
    let $aboutMeSectionImageWrapper: JQuery = $('.about-me-section__image-wrapper');
    let $contactMeSectionHeader: JQuery = $('.contact-me-section__header');
    let $contactMeForm: JQuery = $('#contact-me-form');
    let $contactMeSectionSubmit: JQuery = $('.contact-me-section__submit');

    let isMobile: boolean = false;
    if (
        navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/webOS/i) ||
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/iPod/i) ||
        navigator.userAgent.match(/BlackBerry/i) ||
        navigator.userAgent.match(/Windows Phone/i)
    ) {
        isMobile = true;
    }

    if (!isMobile) {
        $aboutMeSectionTextWrapper.scrollspy({
            min: $aboutMeSectionTextWrapper.offset().top - $(window).innerHeight(),
            max: $('body').height(),
            onEnter: () => {
                $aboutMeSectionTextWrapper
                    .addClass('animated')
                    .addClass('bounceInLeft');
            }
        });

        $aboutMeSectionImageWrapper.scrollspy({
            min: $aboutMeSectionImageWrapper.offset().top - $(window).innerHeight(),
            max: $('body').height(),
            onEnter: () => {
                $aboutMeSectionImageWrapper
                    .addClass('animated')
                    .addClass('bounceInRight');
            }
        });

        $contactMeForm.scrollspy({
            min: $contactMeForm.offset().top - $(window).innerHeight() + ($contactMeForm.height() / 2),
            max: $('body').height(),
            onEnter: () => {
                $contactMeForm.css('visibility', 'visible');
                $contactMeForm
                    .addClass('animated')
                    .addClass('flipInX');
            }
        });

        for (let i = 0; i < $advantagesSectionAdvantage.length; i++) {
            let $advantage = $($advantagesSectionAdvantage[i]);
            $advantage.scrollspy({
                min: $advantage.offset().top - $(window).innerHeight(),
                max: $body.height(),
                onEnter: () => {
                    if ($advantage.hasClass('animated')) return;
                    $advantage.addClass('animated').addClass('bounceInLeft');
                }
            });
        }

        setTimeout(() => {
            $welcomeSectionShadow.css('background-color', 'rgba(0, 0, 0, 0.20)');
            $welcomeSectionPrimaryButton
                .show()
                .addClass('animated')
                .addClass('slideInUp');
        }, 600);

        function primaryButtonRemoveAnimation(): void {
            $welcomeSectionPrimaryButton
                .removeClass('animated')
                .removeClass('slideInUp');
        }

        $welcomeSectionPrimaryButton.mouseenter(() => {
            primaryButtonRemoveAnimation();
            $welcomeSectionPrimaryButton
                .addClass('animated')
                .addClass('pulse')
                .addClass('infinite');
        });

        $welcomeSectionPrimaryButton.mouseleave(() => {
            primaryButtonRemoveAnimation();
            $welcomeSectionPrimaryButton
                .removeClass('animated')
                .removeClass('pulse')
                .removeClass('infinite');
        });

    } else {
        $contactMeForm.css('visibility', 'visible');
    }

    for (let i = 0; i < $progressBars.length; i++) {
        let $progressBar = $($progressBars[i]);
        $progressBar.scrollspy({
            min: $progressBar.offset().top - $(window).innerHeight() - 150,
            max: $body.height(),
            onEnter: () => {
                if (activatedProgressBars[i] === true) return;
                let percentage: number = parseInt($progressBar.children().get(0).innerHTML.replace('%', ''));
                let progress: number = 40;
                if (isMobile == false) {
                    let interval: number = setInterval(() => {
                        $progressBar.css('width', progress + '%');
                        progress += 0.5;
                        if (progress === percentage) {
                            clearInterval(interval);
                        }
                    }, 10);
                } else {
                    $progressBar.css('width', percentage + '%');
                }
                activatedProgressBars[i] = true;
            }
        });
    }

    $headerAboutLink.click((event) => {
        event.preventDefault()
        $('html body').animate({
            scrollTop: $aboutMeSection.offset().top - ($aboutMeSection.height() / 2)
        }, 700);
    });

    $headerContactLink.click((event) => {
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
        onEnter: (element, position) => {
            $header.addClass('header--fixed');
            $header.find('.primary-button').addClass('primary-button--color-dark--hover');
        },
        onLeave: (element, position) => {
            $header.removeClass('header--fixed');
            $header.find('.primary-button').removeClass('primary-button--color-dark--hover');
        }
    });

    $headerCarousel.slick({
        // autoplay: true,
        appendArrows: $welcomeSectionShadow,
        autoplaySpeed: 5000,
        arrows: true,
        fade: true,
        infinite: true,
        speed: 2500,
        swipe: false
    });

    $openOffcanvas.click(() => {
        $openOffcanvas.toggleClass('hamburger--open');
    });

    $siteOverlay.click(() => {
        $openOffcanvas.removeClass('hamburger--open');
    });

    $contactMeSectionSubmit.click((event) => {
        event.preventDefault();
        $.ajax({
            type: 'POST',
            url: 'mail.php',
            data: $contactMeForm.serialize(),
            success: (response) => {

            },
            error: () => {

            }
        });
    });

    $(window).scroll();
});
