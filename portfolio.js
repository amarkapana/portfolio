// dynamicTextColor.js

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Basic form validation
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '' || email === '' || message === '') {
            alert('Please fill out all fields.');
            return;
        }

        // Replace with your own logic for form submission (e.g., AJAX call)
        // For demonstration purposes, let's simulate a successful submission
        alert('Message sent successfully!');
        contactForm.reset();
    });
});
// dynamicTextColor.js

document.addEventListener('DOMContentLoaded', function() {
    const socialIcons = document.querySelectorAll('.social-icons a');

    // Add event listeners for hover effects
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseover', function() {
            // Add class or apply transformation
            this.style.transform = 'translateY(-5px)';
        });

        icon.addEventListener('mouseout', function() {
            // Reset transformation on mouseout
            this.style.transform = 'translateY(0)';
        });
    });
});
