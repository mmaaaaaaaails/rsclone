import './assets/css/main.css';
import './js/common';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

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
    const url = 'https://www.omdbapi.com/?s=dream&page=&apikey=58b35b66';
    const response = await fetch(url);
    const data = await response.json();
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

getMovie();
