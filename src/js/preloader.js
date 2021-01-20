function loadData() {
    return new Promise((resolve) => {
        setTimeout(resolve, 2000);
    });
}

const preloader = document.querySelector('.preloader');
preloader.style.display = 'block';

loadData()
    .then(() => {
        preloader.style.display = '';
    });
