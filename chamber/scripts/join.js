// join.js

document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

menuToggle.addEventListener("click", () => {
    nav.style.display = nav.style.display === "block" ? "none" : "block";
    menuToggle.textContent = nav.style.display === "block" ? "✖" : "≡";
});


const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.body;


darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", body.classList.contains("dark-mode"));
});


if (localStorage.getItem("darkMode") === "true") {
    body.classList.add("dark-mode");
}






document.addEventListener("DOMContentLoaded", function() {
    const timestampField = document.getElementById("timestamp");
    if (timestampField) {
        const currentDate = new Date();
        timestampField.value = currentDate.toISOString(); 
    }
});


const form = document.getElementById('membership-form');
if (form) {
    form.addEventListener('submit', function(event) {
    x
        const email = document.getElementById('email').value;
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            event.preventDefault(); 
        }
    });
}