<?php

function os_theme_script()
{
  global $wp_scripts;

  wp_enqueue_script(
    'all_js',
    get_template_directory_uri() . '/script/all.js',
    array('jquery', 'jquery_scrollspy_js', 'stellar_js', 'flexibility_js', 'respond_js', 'html5shiv_js'),
    false,
    true
  );
  wp_enqueue_script(
    'stellar_js',
    'https://cdnjs.cloudflare.com/ajax/libs/stellar.js/0.6.2/jquery.stellar.min.js',
    array('jquery'),
    false,
    true
  );
  wp_enqueue_script(
    'jquery_scrollspy_js',
    get_template_directory_uri() . '/bower_components/jquery-scrollspy/jquery-scrollspy.js',
    array(),
    false,
    true
  );
  wp_enqueue_script(
    'flexibility_js',
    'https://cdnjs.cloudflare.com/ajax/libs/flexibility/2.0.1/flexibility.js',
    array(),
    false,
    false
  );
  wp_enqueue_script(
    'respond_js',
    'https://cdnjs.cloudflare.com/ajax/libs/respond.js/1.4.2/respond.js',
    array(),
    false,
    false
  );
  wp_enqueue_script(
    'html5shiv_js',
    'https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js',
    array(),
    false,
    false
  );

  $wp_scripts->add_data('html5shiv_js', 'conditional', 'lt IE 9');
  $wp_scripts->add_data('respond_js', 'conditional', 'lt IE 9');
}
add_action('wp_enqueue_scripts', 'os_theme_script');

function os_theme_style()
{
  wp_enqueue_style(
		'style_css',
		get_template_directory_uri() . '/style.css',
		array(),
		false,
		'all'
	);
}
add_action('wp_enqueue_scripts', 'os_theme_style');
