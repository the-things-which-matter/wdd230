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
});