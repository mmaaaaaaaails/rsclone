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

const menuLinks = document.querySelectorAll('.menu__link');
const mainPage = document.querySelector('#main__page');
const stats = document.querySelector('#stats');
const search = document.querySelector('.search');
const slider = document.querySelector('.slider-container');
const table = document.querySelector('.table');
const help = document.querySelector('.help__button');
const radio = document.querySelector('.radio');

mainPage.addEventListener('click', () => {
    table.style.display = 'none';
    search.style.display = 'flex';
    slider.style.display = 'block';
    help.style.display = 'block';
    radio.style.display = 'flex';
});

stats.addEventListener('click', () => {
    search.style.display = 'none';
    slider.style.display = 'none';
    table.style.display = 'block';
    help.style.display = 'none';
    radio.style.display = 'none';
});

menuLinks.forEach((link) => {
    link.addEventListener('click', () => {
        menuLinks.forEach((item) => item.classList = 'menu__link');
        link.classList.add('menu__link--active');
    });
});

openMenuLevel();
hideMenuLevel();
