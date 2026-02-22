<?php
/**
 * Plugin Name: Unassigned Button Link
 * Description: Changes "Unassigned" button text to "Effects of Flooding" and adds link
 * Version: 1.0.2
 * Author: Auto-generated
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

// Add JavaScript to footer - using priority to ensure it runs
function add_unassigned_button_script() {
    ?>
    <script type="text/javascript">
    (function() {
        function updateUnassignedButton() {
            // Search all elements to find one with "Unassigned" text
            const allElements = document.querySelectorAll('*');
            for (let el of allElements) {
                if (el.textContent && el.textContent.trim() === 'Unassigned') {
                    // Update the text content
                    el.textContent = 'Effects of Flooding';
                    
                    // Make it a link if it isn't already
                    if (el.tagName === 'A') {
                        el.href = 'https://mrsutherland.net/effects-of-flooding-sorter/';
                        el.style.cursor = 'pointer';
                        console.log('Button text changed to "Effects of Flooding" and link updated');
                    } else {
                        // Convert to clickable if it's not already an anchor
                        el.style.cursor = 'pointer';
                        el.setAttribute('role', 'button');
                        el.addEventListener('click', function(e) {
                            e.preventDefault();
                            window.location.href = 'https://mrsutherland.net/effects-of-flooding-sorter/';
                        });
                        console.log('Button text changed to "Effects of Flooding" and click handler added');
                    }
                    return true;
                }
            }
            return false;
        }
        
        // Try immediately
        if (!updateUnassignedButton()) {
            // If not found yet, wait for DOM
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', function() {
                    updateUnassignedButton();
                });
            } else {
                // Try again after delays
                setTimeout(function() {
                    if (!updateUnassignedButton()) {
                        setTimeout(updateUnassignedButton, 1000);
                    }
                }, 100);
            }
        }
    })();
    </script>
    <?php
}
// Use high priority to ensure it loads, and also add to wp_head as backup
add_action('wp_footer', 'add_unassigned_button_script', 999);
add_action('wp_head', 'add_unassigned_button_script', 999);
