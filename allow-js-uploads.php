<?php
/**
 * Allow JavaScript file uploads in WordPress
 * Add this to your theme's functions.php file or as a plugin
 */

// Allow .js files to be uploaded
function allow_js_uploads($mimes) {
    $mimes['js'] = 'application/javascript';
    return $mimes;
}
add_filter('upload_mimes', 'allow_js_uploads');

// Set correct MIME type for .js files
function fix_js_mime_type($data, $file, $filename) {
    if (pathinfo($filename, PATHINFO_EXTENSION) === 'js') {
        $data['type'] = 'application/javascript';
    }
    return $data;
}
add_filter('wp_check_filetype_and_ext', 'fix_js_mime_type', 10, 3);


