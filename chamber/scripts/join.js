// join.js

// Wait for the DOM to load before running any script
document.addEventListener("DOMContentLoaded", () => {
    // Set current year
    const yearElement = document.getElementById("currentyear");
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Set last modified date
    const lastModifiedElement = document.getElementById("last-modified");
    if (lastModifiedElement) {
        lastModifiedElement.textContent = document.lastModified;
    }

    // Handle timestamp for form submissions
    const timestampField = document.getElementById("timestamp");
    if (timestampField) {
        const currentDate = new Date();
        timestampField.value = currentDate.toISOString(); 
    }

    // Hamburger menu toggle (if exists)
    const menuToggle = document.getElementById("menuToggle");
    const nav = document.querySelector("nav");

    if (menuToggle && nav) {
        menuToggle.addEventListener("click", () => {
            const isOpen = nav.style.display === "block";
            nav.style.display = isOpen ? "none" : "block";
            menuToggle.textContent = isOpen ? "≡" : "✖";
        });
    }

    // Dark mode toggle
    const darkModeToggle = document.getElementById("darkModeToggle");
    const body = document.body;

    if (darkModeToggle) {
        darkModeToggle.addEventListener("click", () => {
            body.classList.toggle("dark-mode");
            localStorage.setItem("darkMode", body.classList.contains("dark-mode"));
        });

        // Apply dark mode from localStorage on load
        if (localStorage.getItem("darkMode") === "true") {
            body.classList.add("dark-mode");
        }
    }

    // Form email validation
    const form = document.getElementById("membership-form");
    if (form) {
        form.addEventListener("submit", function(event) {
            const email = document.getElementById("email").value;
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

            if (!emailRegex.test(email)) {
                alert("Please enter a valid email address.");
                event.preventDefault();
            }
        });
    }
});