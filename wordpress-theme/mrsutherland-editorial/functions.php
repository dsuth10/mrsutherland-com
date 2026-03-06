<?php
/**
 * Mr Sutherland Editorial theme functions and setup.
 */

if (!defined('ABSPATH')) {
    exit;
}

function mrsutherland_editorial_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', array('search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script'));
    add_theme_support('responsive-embeds');
    add_theme_support('wp-block-styles');
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'mrsutherland-editorial'),
    ));
}
add_action('after_setup_theme', 'mrsutherland_editorial_setup');

function mrsutherland_editorial_scripts() {
    wp_enqueue_style(
        'mrsutherland-editorial-fonts',
        'https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Source+Sans+3:ital,wght@0,400;0,600;0,700;1,400&display=swap',
        array(),
        null
    );
    wp_enqueue_style(
        'mrsutherland-editorial-style',
        get_stylesheet_uri(),
        array('mrsutherland-editorial-fonts'),
        wp_get_theme()->get('Version')
    );
    wp_enqueue_script(
        'mrsutherland-editorial-scroll-reveal',
        get_template_directory_uri() . '/js/scroll-reveal.js',
        array(),
        wp_get_theme()->get('Version'),
        true
    );
}
add_action('wp_enqueue_scripts', 'mrsutherland_editorial_scripts');
