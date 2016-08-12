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
    var $progress_bars = $('.skills-section__progress-bar');
    var progress_bars_instances = [];
    var $progress_bars_labels = $('.skills-section__progress-percent');
    var progress_bars_percentages = [];
    var progress_bars_coordinates = [];
    var _loop_1 = function(i) {
        if ($progress_bars_labels[i].innerHTML.length === 3) {
            progress_bars_percentages[i] = parseInt($progress_bars_labels[i].innerHTML.substr(0, 2));
        }
        else if ($progress_bars_labels[i].innerHTML.length === 2) {
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
        var path = progress_bars_instances[i].path;
        path.style.strokeLinecap = 'round';
        progress_bars_instances[i].set(0.5);
        progress_bars_instances[i].setText($progress_bars_labels[i]);
        progress_bars_instances[i].animate(progress_bars_percentages[i] / 100);
        setTimeout(function () {
            var progress_bar_width = $($progress_bars[0]).outerWidth(true);
            var percent = (progress_bar_width / 100) * progress_bars_percentages[i];
            var label = $($progress_bars_labels[i]);
            label.css('left', (progress_bar_width / 2) - (progress_bar_width - percent) - label.width() + 'px');
            setTimeout(function () {
                label.css('transition', 'none');
            }, 2500);
        }, 250);
    };
    for (var i = 0; i < $progress_bars.length; i++) {
        _loop_1(i);
    }
    $(window).resize(function () {
        for (var i = 0; i < $progress_bars_labels.length; i++) {
            var progress_bar_width = $($progress_bars[0]).outerWidth(true);
            var percent = (progress_bar_width / 100) * progress_bars_percentages[i];
            var label = $($progress_bars_labels[i]);
            label.css('left', (progress_bar_width / 2) - (progress_bar_width - percent) - label.width() + 'px');
        }
    });
    $parallax_break.parallax({ imageSrc: '../images/future/sky2_1.jpg' });
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
