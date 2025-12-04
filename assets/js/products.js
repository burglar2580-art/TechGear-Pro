// --- FILE: products.js ---
// This file contains jQuery logic specifically for the Products Page (products.html).

$(document).ready(function() {
    
    // JQUERY EFFECT 2: Enhance product cards with hover animations.
    // This provides visual feedback when the user interacts with a product listing.
    const productCards = $('.product-card');
    
    if (productCards.length > 0) {
        productCards.hover(
            // Function to run when the mouse enters (mouseenter)
            function() {
                $(this).css({
                    'transform': 'scale(1.03) translateY(-5px)', // Lift slightly
                    'box-shadow': '0 10px 20px rgba(0, 0, 0, 0.5)' // Add deep shadow
                });
            }, 
            // Function to run when the mouse leaves (mouseleave)
            function() {
                $(this).css({
                    'transform': 'scale(1) translateY(0)',
                    'box-shadow': 'none'
                });
            }
        );
        
        // Event listener for the 'Add to Cart' button.
        // This simulates a successful cart addition without actual server-side logic.
        $('.add-to-cart-btn').on('click', function(e) {
            e.preventDefault();
            // Select the message box
            const messageBox = $('#product-message');
            
            // Use .finish() to stop any previous animation, then fade in, delay, and fade out.
            messageBox.finish().fadeIn(300).delay(1500).fadeOut(500);
        });
    }
});