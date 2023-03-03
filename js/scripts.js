// /**
//  * Copyright @ by CodeLyoko Teams
//  * Author: Thành Nam Nguyễn
//  */

/* Navigation */
const toggle = document.querySelector('.hamburger');
const menu = document.querySelector('.navbar');

// Toggle mobile menu
function toggleMenu() {
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
    } else {
        menu.classList.add('active');
    }
}

// Event listeners
toggle.addEventListener('click', toggleMenu, false);
