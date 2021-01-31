import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

const searchBtn = document.querySelector('.search__btn');
const searchArea = document.querySelector('.search__input');
let film = localStorage.getItem('film');
let data;
let keywords;

const mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 20,
    direction: 'horizontal',
    loop: true,
    slideToClickedSlide: false,
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
    if (data.Search === undefined) {
        const error = document.createElement('p');
        error.className = 'error';
        error.textContent = `Nothing for '${film}'`;
        document.querySelector('.slider-container').append(error);
    } else {
        data.Search.forEach((element) => {
            async function getRating() {
                const res = await fetch(`https://www.omdbapi.com/?i=${element.imdbID}&apikey=9b67fc54`);
                const extraData = await res.json();
                const cardsFilms = `<div class="swiper-slide">
                <div class="сards">
                    <a href="${siteUrl}${element.imdbID}" target="_blank">
                        <img class="сards__poster" src="${element.Poster}">
                    </a>
                    <a class="сards__title" href="${siteUrl}${element.imdbID}" target="_blank">${element.Title}</a>
                    <p class="сards__year">${element.Year} (${extraData.Country})</p>
                    <div class="сards__raiting">
                        <span class="сards__star"></span>
                        <p class="сards__number">${extraData.imdbRating}</p>
                    </div>

                    </div>
                </div>`;
                mySwiper.appendSlide(cardsFilms);
                return data;
            }
            getRating();
        });
    }
}

function searchFilm() {
    film = searchArea.value.trim();
    if (film !== '') {
        localStorage.setItem('film', film);
        if (keywords === undefined) {
            keywords = film;
            localStorage.setItem(film, 1);
        } else if (keywords.includes(film) === false) {
            keywords.push(film);
            localStorage.setItem(film, 1);
        } else {
            let count = +localStorage.getItem(film);
            count += 1;
            localStorage.setItem(film, count);
        }
        let total = +localStorage.getItem('total');
        total += 1;
        localStorage.setItem('total', total);
        localStorage.setItem('keywords', keywords);
        document.location.reload();
    }
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
    form.reset();
    searchArea.focus();
}

cross.addEventListener('click', () => {
    clearInput();
});

export { keywords, form, clearInput };
