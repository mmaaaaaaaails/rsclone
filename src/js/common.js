import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

const searchBtn = document.querySelector('.search__btn');
const searchArea = document.querySelector('.search__input');
const film = localStorage.getItem('film');
let data;
let keywords;

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
    const url = `https://www.omdbapi.com/?s=${film}&page=&apikey=58b35b66`;
    searchArea.value = film;
    const response = await fetch(url);
    data = await response.json();
    const siteUrl = 'https://www.imdb.com/title/';
    data.Search.forEach((element) => {
        async function getRating() {
            const res = await fetch(`https://www.omdbapi.com/?i=${element.imdbID}&apikey=9b67fc54`);
            const rating = await res.json();
            const cardsFilms = `<div class="swiper-slide">
            <div class="сards">
            <img class="сards__poster" src="${element.Poster}">
            <a class="сards__title" href="${siteUrl}${element.imdbID}" target="_blank">${element.Title}</a>
            <p class="сards__year">${element.Year}</p>
            <p>${rating.imdbRating}</p>
            </div>
            </div>`;
            mySwiper.appendSlide(cardsFilms);
            return data;
        }
        getRating();
    });
}

function searchFilm() {
    localStorage.setItem('film', searchArea.value);
    if (keywords === undefined) {
        keywords = searchArea.value;
        localStorage.setItem(searchArea.value, 1);
    } else if (keywords.includes(searchArea.value) === false) {
        keywords.push(searchArea.value);
        localStorage.setItem(searchArea.value, 1);
    } else {
        let count = +localStorage.getItem(searchArea.value);
        count += 1;
        localStorage.setItem(searchArea.value, count);
    }
    localStorage.setItem('keywords', keywords);
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

if (film !== null) {
    getMovie();
    keywords = localStorage.getItem('keywords').split(',');
}

const cross = document.querySelector('.search--cross');
const form = document.querySelector('.search');

function clearInput() {
    cross.addEventListener('click', () => {
        form.reset();
    });
}

clearInput();

export { keywords };
