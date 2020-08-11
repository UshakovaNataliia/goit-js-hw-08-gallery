import images from "./gallery-items.js";

const gallery = images.map(el =>
    `<li class="gallery__item"><a class="gallery__link" href="${el.original}"><img class="gallery__image" src="${el.preview}" data-source="${el.original}" alt="${el.description}"/></a></li>`
  ).join("");


const ul = document.querySelector(".js-gallery");
const modalContainer = document.querySelector(".js-lightbox");
const closeModalBtn = document.querySelector("button[data-action=close-lightbox]");
const openImage = document.querySelector(".lightbox__image");
const backDrop = document.querySelector(".lightbox__content");


ul.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
backDrop.addEventListener("click", backDropClose);


function backDropClose(event) {
  if (event.target === event.currentTarget) {
    closeModal();
  };
};

function closeWithEscape(event) {
  if (event.key === "Escape") {
    closeModal();
  };
};

function closeModal() {
  modalContainer.classList.remove("is-open");
  window.removeEventListener("keyup", closeWithEscape);

  openImage.src = "";
};

function openModal(event) {
  event.preventDefault();
  window.addEventListener("keyup", closeWithEscape);
    if (event.target !== event.currentTarget) {
    modalContainer.classList.add("is-open");
  };

  openImage.src = event.target.dataset.source;
};

const galleryInsert = ul.insertAdjacentHTML("beforeend", gallery);
console.log(galleryInsert);