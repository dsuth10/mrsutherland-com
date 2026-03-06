<?php
if (!defined('ABSPATH')) {
    exit;
}
get_header();
?>

<?php while (have_posts()) : the_post(); ?>
    <article id="post-<?php the_ID(); ?>" <?php post_class('single-article'); ?>>
        <header class="entry-header scroll-reveal">
            <h1 class="entry-title"><?php the_title(); ?></h1>
            <div class="entry-meta"><?php the_date(); ?> &mdash; <?php the_author(); ?></div>
        </header>
        <div class="entry-content">
            <?php the_content(); ?>
        </div>
    </article>
<?php endwhile; ?>

<?php get_footer(); ?>
