document.addEventListener("DOMContentLoaded", () => {
  
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


    const visitCountKey = 'visitCount';
    let visitCount = localStorage.getItem(visitCountKey);

    if (!visitCount) {
        visitCount = 0;
    }

    visitCount++;
    localStorage.setItem(visitCountKey, visitCount);

    const visitCountElement = document.getElementById('visit-count');
    if (visitCountElement) {
        visitCountElement.textContent = visitCount;
    }

   
    const visitMessage = document.getElementById("visit-message");
    const lastVisit = localStorage.getItem("lastVisit");
    const currentDate = new Date().getTime();

    if (!lastVisit) {
        visitMessage.textContent = "Welcome! This is your first visit.";
    } else {
        const lastVisitDate = parseInt(lastVisit);
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

