// ===============================
// AUTO UPDATE COPYRIGHT YEAR
// ===============================
document.addEventListener("DOMContentLoaded", function () {
    const yearSpan = document.getElementById("current-year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});

// ===============================
// CONTACT FORM VALIDATION
// ===============================
function validateForm(event) {
    event.preventDefault(); // Prevent automatic submission

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const errorBox = document.getElementById("error-message");

    errorBox.innerText = ""; // Reset previous messages

    // Validate name
    if (name === "") {
        errorBox.innerText = "Please enter your name.";
        return false;
    }

    // Validate email
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
        errorBox.innerText = "Please enter a valid email address.";
        return false;
    }

    // Validate message
    if (message === "") {
        errorBox.innerText = "Please enter your message.";
        return false;
    }

    // Success message
    alert("Thank you for contacting M Flavor! We'll get back to you soon.");
    document.getElementById("contact-form").reset();
    return true;
}

// ===============================
// SLIDESHOW FUNCTIONALITY
// ===============================
let slideIndex = 0;

function showSlides() {
    const slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    if (slides.length > 0) {
        slides[slideIndex - 1].style.display = "block";
    }

    setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

document.addEventListener("DOMContentLoaded", showSlides);
