///<reference path="typings/globals/jquery/index.d.ts"/>
///<reference path="typings/globals/slick-carousel/index.d.ts"/>
///<reference path="d.ts/jquery-scrollspy.d.ts"/>
///<reference path="d.ts/pace.d.ts" />
///<reference path="d.ts/parallax.d.ts" />
///<reference path="d.ts/progressbar.d.ts" />

$(() => {
  let $welcomeSectionShadow: JQuery = $('.welcome-section__shadow').first();
  let $header: JQuery = $('.header').first();
  let $carousel: JQuery = $('.header-carousel').first();
  let $body: JQuery = $('body');
  let $openOffcanvas: JQuery = $('#open-offcanvas');
  let $siteOverlay: JQuery = $('.site-overlay').first();
  let $offcanvasMenu: JQuery = $('.offcanvas-menu').first();
  let $parallaxBreak: JQuery = $('.parallax-break');
  let $progressBars: JQuery = $('.skills-section__progress-bar');
  let activatedProgressBars: Array<boolean> = [false, false, false, false];

  for(let i = 0; i < $progressBars.length; i++) {
    let $progressBar = $($progressBars[i]);
    $progressBar.scrollspy({
      min: $progressBar.offset().top - $(window).innerHeight(),
      max: $body.height(),
      onEnter: () => {
        if(activatedProgressBars[i] === true) return;

        let percentage: number = parseInt($progressBar.children().get(0).innerHTML.replace('%', ''));
        let progress: number = 40;

        let interval: number = setInterval(() => {
          $progressBar.css('width', progress + '%');

          progress += 0.5;

          if(progress === percentage) {
            clearInterval(interval);
          }
        }, 10);

        activatedProgressBars[i] = true;
      }
    });
  }

  $parallaxBreak.parallax({imageSrc: '../images/future/sky2_1.jpg'});

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

  $carousel.slick({
    // autoplay: true,
    appendArrows: $welcomeSectionShadow,
    autoplaySpeed: 2000,
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

  $(window).scroll();
});
