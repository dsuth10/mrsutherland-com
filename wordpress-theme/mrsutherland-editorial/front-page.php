<?php
if (!defined('ABSPATH')) {
    exit;
}
get_header();
?>

<section class="front-hero editorial-hero">
    <div class="scroll-reveal editorial-hero-inner">
        <p class="editorial-label">Where AI and Education Meet</p>
        <h1 class="editorial-title"><?php bloginfo('name'); ?></h1>
        <p class="editorial-lead"><?php bloginfo('description'); ?></p>
    </div>
</section>

<?php
$front_posts = new WP_Query(array(
    'post_type'      => 'post',
    'posts_per_page' => 10,
    'post_status'    => 'publish',
    'orderby'        => 'date',
));
if ($front_posts->have_posts()) :
?>
    <section class="front-posts editorial-posts">
        <div class="editorial-posts-inner">
            <h2 class="scroll-reveal editorial-section-title">Recent posts</h2>
            <div class="posts-list editorial-posts-list">
                <?php
                $index = 0;
                while ($front_posts->have_posts()) :
                    $front_posts->the_post();
                    $delay = $index * 80;
                    $index++;
                ?>
                    <article id="post-<?php the_ID(); ?>" <?php post_class('post-card scroll-reveal'); ?> style="transition-delay: <?php echo (int) $delay; ?>ms;">
                        <header class="entry-header">
                            <h3 class="entry-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
                            <div class="entry-meta"><?php the_date(); ?> &mdash; <?php the_author(); ?></div>
                        </header>
                        <div class="entry-summary">
                            <?php the_excerpt(); ?>
                        </div>
                    </article>
                <?php endwhile; ?>
            </div>
        </div>
    </section>
<?php
endif;
wp_reset_postdata();
?>

<?php get_footer(); ?>
