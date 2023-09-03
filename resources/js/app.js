const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');
const menuClose = document.querySelector('.close-menu')

menu.addEventListener('click', () => {
    nav.classList.add('mobile');
})

menuClose.addEventListener('click', () => {
    nav.classList.remove('mobile');
})