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

  if($body.scrollTop() > 0) {
    $header.addClass('header--fixed');
  }

  let $progressBars: JQuery = $('.skills-section__progress-bar');
  let $progressBarsLabels: JQuery = $('.skills-section__progress-percent');
  let progressBarsPercentages: Array<number> = [];

  for(let i = 0; i < $progressBars.length; i++) {
    progressBarsPercentages[i] = parseInt($progressBarsLabels[i].innerHTML.replace('%', ''));
    let progress: number = 30;

    let interval: number = setInterval(() => {
      let progressBar = $($progressBars[i]);
      let label = $($progressBarsLabels[i]);

      progressBar.css('width', progress + '%');

      progress += 0.5;
      console.log(progress);

      if(progress === progressBarsPercentages[i]) {
        clearInterval(interval);
      }
    }, 10);
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

});
