const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

function openMenuLevel() {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('change');
        menu.classList.add('menu__open', 'menu__camera');
    });
}

function hideMenuLevel() {
    document.addEventListener('click', (event) => {
        if (!event.target.closest('.change')) {
            menu.classList.remove('menu__open');
            hamburger.classList.remove('change');
        }
    });
}

openMenuLevel();
hideMenuLevel();
