const menuButton = document.getElementById('menu');
const arrowUpMenu = document.getElementById('arrow-up');
const nav = document.getElementById('nav');

menuButton.addEventListener('click', () => {

    nav.classList.toggle('position-menu');
});

arrowUpMenu.addEventListener('click', () => {
    
    nav.classList.toggle('position-menu');
});