
import { images } from "../gallery-items.js";

/*Для коректной работы локальной страницы, необходимо исправить пути
<link rel="stylesheet" href="css/styles.css" />
<script src="gallery-items.js" type="module"></script>
<script src="js/task.js" type="module"></script>

Для использования данных из модуля gallery-items.js необходимо експортировать их из модуля
export const images = [

и импортировать по месту использования (в task.js )
import { images } from "../gallery-items.js";

Тепер нет необходимости в дублировании переменной images в task.js (удалите ее)

Не давайте функциям названия, которые вводят в заблуждение.
Ведь функция isOpenModal на самом деле возвращает true если окно закрыто.

Измените или название этой функции,
или ее содержимоє
(на return refs.modal.classList.contains('is-open') и тогда проверяйте if (!isOpenModal()) return

  */

const refs = {
  gallery: document.querySelector('ul.gallery'),
  modal: document.querySelector('div.lightbox'),
  modalImg: document.querySelector('img.lightbox__image'),
  modalBtn: document.querySelector('button[data-action="close-lightbox"]'),
  overlay: document.querySelector('div.lightbox__overlay'),
}

let currentIndex = 0;

images.forEach((image, index) => {
  const { preview, original, description } = image;
  const imgRef = document.createElement('img');
  imgRef.setAttribute("src", preview);
  imgRef.setAttribute("data-source", original);
  imgRef.setAttribute("alt", description);
  imgRef.setAttribute("data-index", index);

  imgRef.classList.add("gallery__image");

  const anchorRef = document.createElement('a');
  anchorRef.setAttribute("href", original);
  anchorRef.classList.add("gallery__link");

  const liRef = document.createElement('li');
  liRef.classList.add("gallery__item");

  liRef.appendChild(anchorRef).appendChild(imgRef);
  refs.gallery.appendChild(liRef);
}
)

function openModal() {
  refs.modal.classList.add('is-open');
}

function closeModal() {
  refs.modal.classList.remove('is-open');
  setImage('');
}

function setImage(url) {
  refs.modalImg.setAttribute("src", url);
}

function onOverlayClick(event) {
  if (event.target === event.currentTarget) {
    closeModal();
  }
}

function isOpenModal() {
  return !refs.modal.classList.contains('is-open')
  //return refs.modal.classList.contains('is-open') и тогда проверяйте if (!isOpenModal()) return

}

function showNextImage(direction) {
  direction === 'right' ? currentIndex++ : currentIndex--;

  if (currentIndex >= images.length) {
    currentIndex = 0
  }

  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }

  const urlOriginal = images[currentIndex].original;
  setImage(urlOriginal);
}

refs.gallery.addEventListener('click', (event) => {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') return;

  currentIndex = event.target.dataset.index;

  const urlOriginal = event.target.dataset.source;
  setImage(urlOriginal);
  openModal();
})

refs.modalBtn.addEventListener('click', () => {
  closeModal();

})

refs.overlay.addEventListener('click', onOverlayClick)

document.addEventListener('keydown', (event) => {
  if (isOpenModal()) return

  switch (event.code) {
    case 'Escape':
      closeModal()
      break;

    case 'ArrowRight':
      showNextImage('right')
      break;

    case 'ArrowLeft':
      showNextImage('left')
      break;

    default:
      return;
  }
})







