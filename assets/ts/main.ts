///<reference path="typings/globals/jquery/index.d.ts"/>
///<reference path="typings/globals/slick-carousel/index.d.ts"/>
///<reference path="d.ts/jquery-scrollspy.d.ts"/>
import * as Test from './test';

$(() => {
  let $welcome_section_shadow: JQuery = $('.welcome-section__shadow').first();
  let $header: JQuery = $('.header').first();
  let $carousel: JQuery = $('.header-carousel').first();
  let $body: JQuery = $('body');

  $header.scrollspy({
    min: $header.height() / 2,
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
});
