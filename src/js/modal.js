const popup = document.createElement('div');
popup.className = 'modal modal__hide';
document.body.append(popup);

const modal = document.querySelector('.modal');

function showModal() {
    const popupContent = document.createElement('div');
    popupContent.className = 'modal__content';
    popup.append(popupContent);

    const popupClose = document.createElement('span');
    popupClose.className = 'modal__close';
    popupClose.innerHTML = '&times;';
    popupContent.append(popupClose);

    const popupInfo = document.createElement('div');
    popupInfo.className = 'info';
    popupContent.append(popupInfo);

    const infoTitle = document.createElement('h2');
    infoTitle.className = 'info__title';
    infoTitle.innerHTML = 'Press and drag the slide';
    popupInfo.append(infoTitle);

    const infoImage = document.createElement('img');
    infoImage.className = 'info__image';
    infoImage.src = '/assets/img/swipe.png';
    infoImage.alt = 'swipe slide';
    popupInfo.append(infoImage);
}

function openModal() {
    const buttonHelp = document.querySelector('.help__button');
    buttonHelp.addEventListener('click', () => {
        modal.classList.add('modal__open');
        modal.classList.remove('modal__hide');
    });
}

function closeModalCross() {
    const modalClose = document.querySelector('.modal__close');
    modalClose.addEventListener('click', () => {
        modal.classList.remove('modal__open');
    });
}

function closeModal() {
    document.addEventListener('click', (event) => {
        if (event.target.closest('.modal')) {
            modal.classList.remove('modal__open');
        }
    });
}

showModal();
openModal();
closeModalCross();
closeModal();
