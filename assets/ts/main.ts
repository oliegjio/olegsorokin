///<reference path="typings/globals/jquery/index.d.ts"/>
///<reference path="typings/globals/slick-carousel/index.d.ts"/>
///<reference path="d.ts/jquery-scrollspy.d.ts"/>
///<reference path="d.ts/pace.d.ts" />

$(() => {
  let $welcome_section_shadow: JQuery = $('.welcome-section__shadow').first();
  let $header: JQuery = $('.header').first();
  let $carousel: JQuery = $('.header-carousel').first();
  let $body: JQuery = $('body');
  let $open_offcanvas: JQuery = $('#open-offcanvas');
  let $site_overlay: JQuery = $('.site-overlay').first();
  let $offcanvas_menu: JQuery = $('.offcanvas-menu').first();
  // let $pace_overlay: JQuery = $('.pace-overlay').first();

  if($body.scrollTop() > 0) {
    $header.addClass('header--fixed');
  }

  // Pace.on("start", () => {
  //   $pace_overlay.css({'visibility': 'visible', 'opacity': '1'});
  // });
  //
  // Pace.on("done", () => {
  //   $pace_overlay.css({'visibility': 'hidden', 'opacity': '0', 'transition': 'visibility 0s linear 1s, opacity 1s ease'});
  // });

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
    appendArrows: $welcome_section_shadow,
    autoplaySpeed: 2000,
    arrows: true,
    fade: true,
    infinite: true,
    speed: 2500,
    swipe: false
  });

  $open_offcanvas.click(() => {
    $open_offcanvas.toggleClass('hamburger--open');
  });

  $site_overlay.click(() => {
    $open_offcanvas.removeClass('hamburger--open');
  });

});
