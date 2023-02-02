import { openMain, openStats } from './hamburger';
import { clearInput } from './common';
import { openModal, closeModal } from './modal';

document.addEventListener('keydown', (e) => {
    if (e.altKey && e.code === 'KeyA') {
        openMain();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.altKey && e.code === 'KeyS') {
        openStats();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.altKey && e.code === 'KeyJ') {
        document.location.reload();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.altKey && e.code === 'KeyH') {
        clearInput();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.altKey && e.code === 'KeyK') {
        openModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.altKey && e.code === 'KeyL') {
        closeModal();
    }
});
