// JavaScript to handle smooth scrolling to sections
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Add an event listener for form submission in contact section
document.querySelector('.contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert("Thank you; ${krateesh}! Your message has been sent.");
        // Here you can add code to send the form data to your email or server
    } else {
        alert('Please fill in all fields before submitting.');
    }
});