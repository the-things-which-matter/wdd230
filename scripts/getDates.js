
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;


const menuToggle = document.getElementById("menuToggle");
const nav = document.querySelector("nav");

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
