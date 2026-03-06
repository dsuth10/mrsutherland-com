<?php
if (!defined('ABSPATH')) {
    exit;
}
get_header();
?>

<?php if (have_posts()) : ?>
    <div class="posts-list">
        <?php while (have_posts()) : the_post(); ?>
            <article id="post-<?php the_ID(); ?>" <?php post_class('post-card'); ?>>
                <header class="entry-header">
                    <h2 class="entry-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
                    <div class="entry-meta"><?php the_date(); ?> &mdash; <?php the_author(); ?></div>
                </header>
                <div class="entry-summary">
                    <?php the_excerpt(); ?>
                </div>
            </article>
        <?php endwhile; ?>
    </div>
    <?php the_posts_pagination(); ?>
<?php else : ?>
    <p><?php esc_html_e('No posts found.', 'mrsutherland-editorial'); ?></p>
<?php endif; ?>

<?php get_footer(); ?>
