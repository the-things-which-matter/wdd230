document.addEventListener("DOMContentLoaded", () => {
    //  Set last modified date
   
    document.getElementById("currentyear").textContent = new Date().getFullYear();
    document.getElementById('last-modified').textContent = document.lastModified;
   
    
    const hamburgerButton = document.querySelector('.hamburger-button');
    const menuItems = document.querySelector('#menu-items');

    if (hamburgerButton && menuItems) {
        hamburgerButton.addEventListener('click', () => {
            const isOpen = menuItems.classList.toggle('show');
            hamburgerButton.setAttribute("aria-expanded", isOpen);
            menuItems.setAttribute("aria-hidden", !isOpen);
        });
    }

  
    const visitMessage = document.getElementById("visit-message");
    const lastVisit = localStorage.getItem("lastVisit");
    const currentDate = Date.now(); 

    if (!lastVisit) {
        visitMessage.textContent = "Welcome! This is your first visit.";
    } else {
        const lastVisitDate = parseInt(lastVisit, 10);
        const daysBetween = Math.floor((currentDate - lastVisitDate) / (1000 * 60 * 60 * 24));

        if (daysBetween === 0) {
            visitMessage.textContent = "Welcome back! You visited today.";
        } else if (daysBetween === 1) {
            visitMessage.textContent = "Welcome back! You last visited yesterday.";
        } else {
            visitMessage.textContent = `Welcome back! You last visited ${daysBetween} days ago.`;
        }
    }


    localStorage.setItem("lastVisit", currentDate);
});