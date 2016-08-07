System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters:[],
        execute: function() {
            $(function () {
                var $welcome_section_shadow = $('.welcome-section-shadow').first();
                var $header = $('.header').first();
                var $carousel = $('.carousel').first();
                var $body = $('body');
                $header.scrollspy({
                    min: $header.height() / 2,
                    max: $body.height(),
                    onEnter: function (element, position) {
                        console.log($body.height());
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
            });
        }
    }
});

//# sourceMappingURL=map/main.js.map
