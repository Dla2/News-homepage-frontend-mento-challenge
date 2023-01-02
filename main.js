//hamburger menu for mobile screens functionality

const hamburger = document.querySelector('.hamburger');
const hamburgerIconOpen = document.querySelector('.open-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const hamburgerIconClose = document.createElement('img');
hamburgerIconClose.classList.add('close-menu');
hamburgerIconClose.src = 'assets/images/icon-menu-close.svg';


hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    if(hamburger.firstElementChild == hamburgerIconOpen) {
        hamburger.firstElementChild.replaceWith(hamburgerIconClose);
    } else if(hamburger.firstElementChild == hamburgerIconClose) {
        hamburger.firstElementChild.replaceWith(hamburgerIconOpen)
    }

})