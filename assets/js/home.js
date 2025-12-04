// --- FILE: home.js ---
// This file contains jQuery effects specifically for the Home Page (index.html).

$(document).ready(function() {
    
    // JQUERY EFFECT 1: Smoothly fade in the Hero content on load.
    // We use jQuery's animation capabilities for a polished, visual entrance effect.
    // We target the main title, subtitle, and the "Shop Now" button.
    const heroElements = $('.hero-title, .hero-subtitle, .hero-title + a');
    
    // Check if these elements exist before trying to animate them (good practice for shared scripts)
    if (heroElements.length > 0) {
        heroElements.delay(300).animate({ 
            opacity: 1 
        }, 1000); // 1000ms = 1 second fade duration
    }

    // Since the featured categories section uses basic CSS transitions, 
    // we don't need additional jQuery for them here.
});