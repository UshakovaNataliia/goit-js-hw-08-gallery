


import gallery from './gallery-items.js';

const refs ={
  gallery: document.querySelector('.js-gallery'),
  modal: document.querySelector('.js-lightbox'),
  overlay: document.querySelector('.lightbox__overlay'),
  content: document.querySelector('.lightbox__content'),
  contentImg: document.querySelector('.lightbox__image'),
  closeBtn: document.querySelector('.lightbox__button'),
  gallerySrc: gallery.map((item) => item.original),
  
};
function createGallery () {
  const images = gallery.map(img => `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${img.original}"
  >
    <img
      class="gallery__image"
      src="${img.preview}"
      data-source="${img.original}"
      alt="${img.description}"
    />
  </a>
</li>`).join('');
const cards = refs.gallery.insertAdjacentHTML('beforeend', images);
return cards;
};

createGallery();

refs.gallery.addEventListener('click', openModal);
refs.closeBtn.addEventListener('click', closeModal);
refs.modal.addEventListener('click', closeModal);
window.addEventListener('keydown', closeModalWithEsc);
window.addEventListener('keydown', keyboardChange);

function openModal (event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') return;

  refs.modal.classList.add('is-open');
  refs.contentImg.src = event.target.dataset.source;
  refs.closeBtn.alt = event.target.alt; 

}

function closeModal() {
  refs.modal.classList.remove('is-open');
  window.removeEventListener('keydown', openModal);
  refs.contentImg.src = '';
}

function closeModalWithEsc (event) {
  if (event.code === "Escape") {
    closeModal();   
  }
}

function keyboardChange(event) {
  if (event.code === "ArrowRight") {
    for (let i = 0; i < refs.gallerySrc.length - 1; i += 1) {
      if (refs.gallerySrc[i] === refs.contentImg.src) {
        refs.contentImg.src = refs.gallerySrc[i + 1];
        break;
      }
    }
  }else if (event.code === "ArrowLeft") {
    for (let i = 1; i < refs.gallerySrc.length; i += 1) {
      if (refs.gallerySrc[i] === refs.contentImg.src) {
        refs.contentImg.src = refs.gallerySrc[i - 1];
        break;
      }
    }
  }
}