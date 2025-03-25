
document.getElementById('last-modified').textContent = document.lastModified;
        

const hamburgerButton = document.querySelector('.hamburger-button');
const menuItems = document.querySelector('#menu-items');

hamburgerButton.addEventListener('click', () => {
    menuItems.classList.toggle('show');
});