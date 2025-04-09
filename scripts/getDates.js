

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


const pageVisitCounter = document.createElement("div");
pageVisitCounter.classList.add("page-visit-counter");


let visitCount = localStorage.getItem("pageVisitCount");
if (!visitCount) {
    visitCount = 0;
}

visitCount++;
localStorage.setItem("pageVisitCount", visitCount);


pageVisitCounter.textContent = `Page Visits: ${visitCount}`;
document.querySelector(".information").appendChild(pageVisitCounter);


const googleMapIframe = document.querySelector("iframe.google-map");
googleMapIframe.setAttribute("loading", "lazy");


const images = document.querySelectorAll("img");

images.forEach((img) => {
    img.setAttribute("loading", "lazy");
});