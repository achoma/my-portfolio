import { galleryItems } from './gallery-items.js';
const gallery = document.querySelector(".gallery")
const images = galleryItems.map(({preview, original, description}) => {
    return `<li>
        <div class="gallery__item">
            <a class="gallery__item" href="${original}">
               <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        </div> </li>`})        
        
        gallery.insertAdjacentHTML(`beforeend`, images.join(""))
        
const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });