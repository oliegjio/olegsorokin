///<reference path="typings/globals/jquery/index.d.ts"/>
///<reference path="typings/globals/slick-carousel/index.d.ts"/>
///<reference path="d.ts/jquery-scrollspy.d.ts"/>
///<reference path="d.ts/pace.d.ts" />
///<reference path="d.ts/parallax.d.ts" />
///<reference path="d.ts/progressbar.d.ts" />

$(() => {
  let $welcome_section_shadow: JQuery = $('.welcome-section__shadow').first();
  let $header: JQuery = $('.header').first();
  let $carousel: JQuery = $('.header-carousel').first();
  let $body: JQuery = $('body');
  let $open_offcanvas: JQuery = $('#open-offcanvas');
  let $site_overlay: JQuery = $('.site-overlay').first();
  let $offcanvas_menu: JQuery = $('.offcanvas-menu').first();
  let $parallax_break: JQuery = $('.parallax-break');

  if($body.scrollTop() > 0) {
    $header.addClass('header--fixed');
  }

  let $progress_bars: JQuery = $('.skills-section__progress-bar');
  let progress_bars_instances: Array<any> = [];
  let $progress_bars_labels: JQuery = $('.skills-section__progress-percent');
  let progress_bars_percentages: Array<number> = [];
  let progress_bars_coordinates: Array<number> = [];

  for(let i = 0; i < $progress_bars.length; i++) {
    if($progress_bars_labels[i].innerHTML.length === 3) {
      progress_bars_percentages[i] = parseInt($progress_bars_labels[i].innerHTML.substr(0, 2));
    } else if ($progress_bars_labels[i].innerHTML.length === 2) {
      progress_bars_percentages[i] = parseInt($progress_bars_labels[i].innerHTML.substr(0, 1));
    }

    progress_bars_instances[i] = new ProgressBar.Line($progress_bars[i], {
      easing: 'easeOut',
      strokeWidth: 3,
      color: '#0099CC',
      svgStyle: {
        'border-radius': '10px',
        'height': '20px',
        'width': '100%'
      },
      duration: 3000
    });

    let path = progress_bars_instances[i].path;
    path.style.strokeLinecap = 'round';
    progress_bars_instances[i].set(0.5);
    progress_bars_instances[i].setText($progress_bars_labels[i]);

    progress_bars_instances[i].animate(progress_bars_percentages[i] / 100);

    setTimeout(() => {
      let progress_bar_width: number = $($progress_bars[0]).outerWidth(true);
      let percent = (progress_bar_width / 100) * progress_bars_percentages[i];
      let label = $($progress_bars_labels[i]);
      label.css('left', (progress_bar_width / 2) - (progress_bar_width - percent) - label.width() + 'px');
      setTimeout(() => {
        label.css('transition', 'none');
      }, 2500);
    }, 250)
  }

  $(window).resize(() => {
    for(let i = 0; i < $progress_bars_labels.length; i++) {
      let progress_bar_width: number = $($progress_bars[0]).outerWidth(true);
      let percent = (progress_bar_width / 100) * progress_bars_percentages[i];
      let label = $($progress_bars_labels[i]);
      label.css('left', (progress_bar_width / 2) - (progress_bar_width - percent) - label.width() + 'px');
    }
  });

  $parallax_break.parallax({imageSrc: '../images/future/sky2_1.jpg'});

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
