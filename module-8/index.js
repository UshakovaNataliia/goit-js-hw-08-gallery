// Создай галерею с возможностью клика по ее элементам и просмотра полноразмерного изображения в модальном окне. 
// Превью результата посмотри по ссылке.

// Разбей задание на несколько подзадач:

// Создание и рендер разметки по массиву данных и предоставленному шаблону.
// Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.
// Открытие модального окна по клику на элементе галереи.
// Подмена значения атрибута src элемента img.lightbox__image.
// Закрытие модального окна по клику на кнопку button[data-action="close-modal"].
// Очистка значения атрибута src элемента img.lightbox__image. Это необходимо для того,
// чтобы при следующем открытии модального окна, пока грузится изображение, мы не видели предыдущее.


// Разметка элемента галереи
// Ссылка на оригинальное изображение должна храниться в data-атрибуте source на элементе img, 
// и указываться в href ссылки (это необходимо для доступности).

// Дополнительно
// Следующий функционал не обязателен при сдаче задания, но будет хорошей практикой по работе с событиями.

// Закрытие модального окна по клику на div.lightbox__overlay.
// Закрытие модального окна по нажатию клавиши ESC.
// Пролистывание изображений галереи в открытом модальном окне клавишами "влево" и "вправо".


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
  const img = event.target.dataset.source;
  openImage.src = img;
  if (event.target !== event.currentTarget) {
    modalContainer.classList.add("is-open");
  };
};

const galleryInsert = ul.insertAdjacentHTML("beforeend", gallery);
console.log(galleryInsert);