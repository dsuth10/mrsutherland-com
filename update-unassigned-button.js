// JavaScript to add link to "Unassigned" button
// This can be added to WordPress via:
// 1. Appearance > Theme Editor > Footer (footer.php)
// 2. Appearance > Customize > Additional CSS/JavaScript
// 3. Or via a plugin like "Insert Headers and Footers"

(function() {
    function updateUnassignedButton() {
        // Find all clickable elements
        const elements = document.querySelectorAll('a, [role="button"], button');
        for (let el of elements) {
            // Check if this is the "Unassigned" button
            if (el.textContent && el.textContent.trim() === 'Unassigned') {
                // Update it to be a proper link
                if (el.tagName === 'A') {
                    el.href = 'https://mrsutherland.net/effects-of-flooding-sorter/';
                    el.style.cursor = 'pointer';
                } else {
                    // Convert button/div to link
                    el.addEventListener('click', function(e) {
                        e.preventDefault();
                        window.location.href = 'https://mrsutherland.net/effects-of-flooding-sorter/';
                    });
                }
                return true;
            }
        }
        return false;
    }
    
    // Run immediately
    if (!updateUnassignedButton()) {
        // If not found yet, wait for DOM
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', updateUnassignedButton);
        } else {
            // Try again after a short delay in case content loads asynchronously
            setTimeout(function() {
                updateUnassignedButton();
            }, 500);
        }
    }
})();
