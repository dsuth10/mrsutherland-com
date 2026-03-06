<?php
/**
 * Plugin Name: Remove Blue Top Line
 * Description: Removes the global blue line/border at the top of all pages (theme or plugin artifact). Enqueue after theme so overrides apply.
 * Version: 1.0.0
 * Author: Mr Sutherland
 */

if (!defined('ABSPATH')) {
    exit;
}

add_action('wp_head', 'mrsutherland_remove_blue_line_css', 999);

function mrsutherland_remove_blue_line_css() {
    ?>
    <style id="mrsutherland-remove-blue-line">
    /* Remove blue top line across site (theme/header border) */
    body,
    html,
    #page,
    .site,
    .site-header,
    #masthead,
    header[role="banner"],
    .wp-site-blocks > *:first-child,
    [class*="wrapper"]:first-child {
        border-top: none !important;
        box-shadow: none !important;
    }
    body::before,
    html::before,
    #page::before,
    .site::before {
        display: none !important;
    }
    </style>
    <?php
}
