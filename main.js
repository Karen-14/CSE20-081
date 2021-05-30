const menuIcon = document.querySelector('.menu')
const nav = document.querySelector('.nav-area')

function toggleMenu() {
    menuIcon.classList.toggle('active')
    nav.classList.toggle('active')
}

menuIcon.addEventListener('click', toggleMenu)