(($)->
  console.log animation.variable
  $ ->
    $welcome_section_shadow = $('.welcome-section-shadow')
    $header = $('header')

    console.log $header.offset().top

    $header.scrollspy
      min: $header.offset().top + 55
      onEnter: (element, position) ->
        $header.addClass 'fixed-header'
      onLeave: (element, position) ->
        $header.removeClass 'fixed-header'

    $ '#carousel'
      .slick
        # autoplay: true
        appendArrows: $welcome_section_shadow.get(0)
        autoplaySpeed: 2000
        arrows: true
        fade: true
        infinite: true
        speed: 2500
        swipe: false
)(jQuery)
