// --- FILE: common.js ---
// This file holds the JavaScript logic that needs to run on *every* page.
// We keep utilities like setting the year and core navigation functions here.

// 1. Utility: Set the Current Year in the Footer
// This ensures the copyright date is always up-to-date without manual editing.
function setCurrentYear() {
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
}

// 2. JS Event: Highlights the currently active page link.
// This function checks the browser's current URL and applies the 'active-nav' style
// to the corresponding link in the navigation bar.
function highlightActiveNav() {
    // Determine the name of the current file (e.g., "index.html" or "products.html")
    const path = window.location.pathname;
    // Use 'index.html' if the path is just '/' or empty
    const currentFile = path.substring(path.lastIndexOf('/') + 1) || 'index.html'; 

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active-nav');
        
        // Check if the link's href matches the current file
        if (link.getAttribute('href') === currentFile) {
            link.classList.add('active-nav');
        }
    });
}

// 3. JS Event: Mobile menu toggle handler
// Opens and closes the hamburger menu on smaller screens.
function setupMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
}


// Wait until the entire document structure is loaded before running our setup functions.
window.addEventListener('load', () => {
    setCurrentYear();
    highlightActiveNav();
    setupMobileMenu();
});