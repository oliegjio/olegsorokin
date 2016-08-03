(function($) {
  return $(function() {
    var $header, $welcome_section_shadow;
    $welcome_section_shadow = $('.welcome-section-shadow');
    $header = $('header');
    console.log($header.offset().top);
    $header.scrollspy({
      min: $header.offset().top + 55,
      onEnter: function(element, position) {
        return $header.addClass('fixed-header');
      },
      onLeave: function(element, position) {
        return $header.removeClass('fixed-header');
      }
    });
    return $('#carousel').slick({
      appendArrows: $welcome_section_shadow.get(0),
      autoplaySpeed: 2000,
      arrows: true,
      fade: true,
      infinite: true,
      speed: 2500,
      swipe: false
    });
  });
})(jQuery);
