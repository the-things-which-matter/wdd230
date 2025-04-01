document.addEventListener("DOMContentLoaded", () => {
    // Display last modified date
    document.getElementById('last-modified').textContent = document.lastModified;

    // Hamburger menu functionality
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
});