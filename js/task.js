
//import images from "../gallery-items"
const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

const refs = {
  gallery: document.querySelector('ul.gallery'),
  modal: document.querySelector('div.lightbox'),
  modalImg: document.querySelector('img.lightbox__image'),
  modalBtn: document.querySelector('button[data-action="close-lightbox"]'),


}

images.forEach((image) => {
  const { preview, original, description } = image;
  const imgRef = document.createElement('img');
  imgRef.setAttribute("src", preview);
  imgRef.setAttribute("data-source", original);
  imgRef.setAttribute("alt", description);
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
}

function setImage(url) {
  refs.modalImg.setAttribute("src", url);
}

refs.gallery.addEventListener('click', (event) => {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') return;

  const urlOriginal = event.target.dataset.source;
  setImage(urlOriginal);
  openModal();
})

refs.modalBtn.addEventListener('click', () => {
  closeModal();
  setImage('');
})
