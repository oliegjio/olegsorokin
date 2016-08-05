System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters:[],
        execute: function() {
            $(function () {
                var $welcome_section_shadow = $('.welcome-section-shadow');
                var $header = $('header');
                var $carousel = $('#carousel');
                $header.scrollspy({
                    min: $header.offset().top + 55,
                    onEnter: function (element, position) {
                        $header.addClass('fixed-header');
                    },
                    onLeave: function (element, position) {
                        $header.removeClass('fixed-header');
                    }
                });
                $carousel.slick({
                    appendArrows: $welcome_section_shadow.get(0),
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
