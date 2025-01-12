// Wait for the document to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    
    // Dynamic Background Change Function
    const body = document.querySelector('body');
    const backgroundImages = [
        'https://source.unsplash.com/random?nature',
        'https://source.unsplash.com/random?city',
        'https://source.unsplash.com/random?technology',
        'https://source.unsplash.com/random?night',
    ];
    let currentBackgroundIndex = 0;

    // Function to change the background image dynamically every 10 seconds
    function changeBackground() {
        body.style.backgroundImage = `url(${backgroundImages[currentBackgroundIndex]})`;
        currentBackgroundIndex = (currentBackgroundIndex + 1) % backgroundImages.length;
    }

    // Change background image every 10 seconds
    setInterval(changeBackground, 10000);
    changeBackground();  // Initial background change on load

    // Smooth scroll effect when clicking on anchor links (optional)
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(link.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form validation and interaction (if needed)
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        // You can perform client-side validation before submission
        const name = document.querySelector('input[name="name"]').value;
        const email = document.querySelector('input[name="email"]').value;
        const phone = document.querySelector('input[name="phone"]').value;
        const message = document.querySelector('textarea[name="message"]').value;

        if (!name || !email || !phone || !message) {
            alert('Please fill out all fields before submitting.');
            e.preventDefault();  // Prevent form submission if validation fails
        } else {
            // Optional: You can show a success message or animation before submission
            alert('Message sent successfully!');
        }
    });

    // Adding a fade-in effect on page load for message container
    const messageContainer = document.querySelector('.message-container');
    messageContainer.classList.add('fade-in');

    // Optionally, adding a small animation to the submit button when clicked
    const submitButton = document.querySelector('.submit-btn');
    submitButton.addEventListener('click', () => {
        submitButton.classList.add('clicked');
        setTimeout(() => {
            submitButton.classList.remove('clicked');
        }, 2000);
    });
    
    // Optional: Adding small UI feedback effects
    document.querySelectorAll('input, textarea').forEach(element => {
        element.addEventListener('focus', () => {
            element.style.borderColor = '#ff7e5f';
        });
        element.addEventListener('blur', () => {
            element.style.borderColor = '#ddd';
        });
    });
});
