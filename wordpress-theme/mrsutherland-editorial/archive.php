<?php
if (!defined('ABSPATH')) {
    exit;
}
get_header();
?>

<header class="archive-header scroll-reveal">
    <h1 class="archive-title"><?php the_archive_title(); ?></h1>
    <?php if (get_the_archive_description()) : ?>
        <div class="archive-description"><?php the_archive_description(); ?></div>
    <?php endif; ?>
</header>

<?php if (have_posts()) : ?>
    <div class="posts-list editorial-posts-list">
        <?php
        $index = 0;
        while (have_posts()) : the_post();
            $delay = $index * 80;
            $index++;
        ?>
            <article id="post-<?php the_ID(); ?>" <?php post_class('post-card scroll-reveal'); ?> style="transition-delay: <?php echo (int) $delay; ?>ms;">
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
