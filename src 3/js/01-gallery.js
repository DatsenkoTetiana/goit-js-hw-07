import { galleryItems } from "./gallery-items.js";
// Change code below this line
const boxGallery = document.querySelector(`.gallery`);

const createMarkUp = (galleryItems) =>
  galleryItems
    .map(
      ({ preview, original, description }) =>
        `<div class="gallery__item">  <a class="gallery__link"
      href = '${original}';>
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`
    )
    .join("");
const insertGalleryItems = (image) => {
  boxGallery.querySelector(`.gallery`);
  boxGallery.insertAdjacentHTML(`beforeend`, image);
};
boxGallery.addEventListener(`click`, onOpen);
insertGalleryItems(createMarkUp(galleryItems));
function onOpen(e) {
  e.preventDefault();
  const isGallery = e.target.dataset.source;
  console.log(isGallery);
  const instance = basicLightbox.create(`
    <img src= "${isGallery}">
`);
  instance.show();
}
window.addEventListener("keydown", onEscDown);
function onEscDown(e) {
  if (e.code === "Escape") {
      instance.close();
    window.removeEventListener("keydown", onEscDown);
  }
}

// console.log(galleryItems);
// еще один вариант
// import { galleryItems } from './gallery-items.js';
// // Change code below this line
// const boxGallery = document.querySelector(".gallery");
// const markup = createMarkup(galleryItems);

// boxGallery.insertAdjacentHTML("beforeend", markup);
// boxGallery.addEventListener("click", onClick);

// function createMarkup(items) {
//   return  items
//   .map(item => { 
//     return `
//     <div class="gallery__item">
//     <a class="gallery__link" href="${item.original}">
//       <img
//         class="gallery__image"
//         src="${item.preview}"
//         data-source="${item.original}"
//         alt="${item.description}"
//       />
//     </a>
//   </div>
//   `;
//   })
//   .join(" ");
// };

// function onClick(e) {
//     e.preventDefault(); 
//     if (e.target.nodeName !== "IMG") {
//         return;
//     };
// 	const instance = basicLightbox.create(`
//     <img src="${e.target.dataset.source}">
// 	`);
    
//     instance.show();
    
//     window.addEventListener("keydown", onEscDown );
//     function onEscDown(e) {
//         if (event.code === "Escape") {
//             instance.close();
//             window.removeEventListener("keydown", onEscDown );
//         };
//     };
// };
// console.log(galleryItems);
