import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

const searchBtn = document.querySelector('.search__btn');
const searchArea = document.querySelector('.search__input');
let data;
let url = 'https://www.omdbapi.com/?s=dream&page=&apikey=58b35b66';

const mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 20,
    direction: 'horizontal',
    loop: true,
    slideToClickedSlide: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        800: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        320: {
            slidesPerView: 1,
        },
    },
});

async function getMovie() {
    const film = localStorage.getItem('film');
    if (film !== null) {
        url = `https://www.omdbapi.com/?s=${film}&page=&apikey=58b35b66`;
        searchArea.value = film;
    }
    const response = await fetch(url);
    data = await response.json();
    const siteUrl = 'https://www.imdb.com/title/';
    data.Search.forEach((element) => {
        const cardsFilms = `<div class="swiper-slide">
        <div class="сards">
        <img class="сards__poster" src="${element.Poster}">
        <a class="сards__title" href="${siteUrl}${element.imdbID}" target="_blank">${element.Title}</a>
        <p class="сards__year">${element.Year}</p>
        </div>
        </div>`;
        mySwiper.appendSlide(cardsFilms);
        return data;
    });
}

function searchFilm() {
    url = `https://www.omdbapi.com/?s=${searchArea.value}&page=&apikey=58b35b66`;
    localStorage.setItem('film', searchArea.value);
    document.location.reload();
}

searchBtn.addEventListener('click', () => {
    searchFilm();
});

function checkEnter(e) {
    if (e.keyCode === 13) {
        e.preventDefault();
        searchFilm();
    }
}

searchArea.addEventListener('keydown', checkEnter, false);

getMovie();
