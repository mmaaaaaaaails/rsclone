import { table } from './statistics';

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
const help = document.querySelector('.help__button');

function openStats() {
    search.style.display = 'none';
    slider.style.display = 'none';
    table.style.display = 'block';
    help.style.marginTop = '100px';
}

function openMain() {
    table.style.display = 'none';
    search.style.display = 'flex';
    slider.style.display = 'block';
    help.style.marginTop = '0px';
}

mainPage.addEventListener('click', () => {
    openMain();
});

stats.addEventListener('click', () => {
    openStats();
});

menuLinks.forEach((link) => {
    link.addEventListener('click', () => {
        menuLinks.forEach((item) => {
            item.classList = 'menu__link';
            link.classList.add('menu__link--active');
        });
    });
});

openMenuLevel();
hideMenuLevel();

export { openMain, openStats };
