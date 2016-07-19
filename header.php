<!DOCTYPE html>
<html>
  <head>
    <script type="text/javascript">
      var templateUrl = '<?= get_template_directory_uri(); ?>';
    </script>
    <meta charset="utf-8">
    <title><?php the_title('', ' | '); bloginfo('name'); ?></title>
    <?php wp_head(); ?>
  </head>
  <body <?php body_class(); ?>>
    <header>
      <h1><span class="text-accent">O</span>leg <span class="text-accent">S</span>orokin</h1>
    </header>
