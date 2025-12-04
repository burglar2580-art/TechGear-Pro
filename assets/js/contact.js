// --- FILE: contact.js ---
// This file contains the form validation and submission handling for the Contact Page (contact.html).

// Wait until the document is fully ready (not just loaded)
document.addEventListener('DOMContentLoaded', () => {

    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        // JS EVENT 2: Contact Form Validation
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); 
            
            let isValid = true; 

            // Reusable function to check individual fields and display errors
            const validateField = (id, errorId, condition) => {
                const input = document.getElementById(id);
                const error = document.getElementById(errorId);
                
                if (condition(input.value)) {
                    // Field is invalid, show error and mark for failure
                    error.classList.remove('hidden');
                    isValid = false;
                    input.classList.add('border-red-500');
                } else {
                    // Field is valid, hide error and clean up styling
                    error.classList.add('hidden');
                    input.classList.remove('border-red-500');
                }
            };

            // 1. Validate Name (must be at least 3 chars)
            validateField('name', 'name-error', value => value.length < 3);

            // 2. Validate Email (simple check for '@' and '.')
            validateField('email', 'email-error', value => !/\S+@\S+\.\S+/.test(value));
            
            // 3. Validate Subject (must select an option)
            validateField('subject', 'subject-error', value => value === "");

            // 4. Validate Message (cannot be empty)
            validateField('message', 'message-error', value => value.trim() === "");

            if (isValid) {
                // If all validation passed, simulate success
                const successMessage = document.getElementById('submission-success');
                if (successMessage) {
                    successMessage.classList.remove('hidden');
                }
                contactForm.reset(); 
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    if (successMessage) {
                        successMessage.classList.add('hidden');
                    }
                }, 5000);
            }
        });
    }
});