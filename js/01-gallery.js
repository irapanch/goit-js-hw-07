import { galleryItems } from './gallery-items.js';
// Change code below this line


const list = document.querySelector('.gallery');

list.addEventListener('click', onClick);

document.addEventListener('keydown', onEscape);

const gallery = galleryItems
  .map(
    item =>
      `<li class="gallery__item"><a class="gallery__link" href="#"><img class="gallery__image" src="${item.preview}"  data-source="${item.original}" alt="${item.description}"></a></li>`
  )
  .join('');

list.insertAdjacentHTML('beforeend', gallery);

let instance;

function onClick(event) {
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }

  instance = basicLightbox.create(
    ` <img src="${event.target.dataset.source}" alt="${event.target.alt}">`
  );

  instance.show();
}

function onEscape(event) {
  if (event.code === 'Escape') {
    instance.close();
  }
}
// =============================================

// console.log(galleryItems);

// const list = document.querySelector('.gallery'); // отримали посилання на ul class="gallery"

// list.addEventListener('click', onClick); // додали прослуховувач подій на список  ul

// document.addEventListener('keydown', onEscape); // додали прослуховувач, що реєструє подію, яка спрацьовує, коли користувач натискає Escape на клавіатурі

// const gallery = galleryItems // створюємо змінну, що містить галерею зображень
//   .map(        // перебираємо кожний елемент галереї і створюємо рядок з розміткою <li> для кожного елемента галереї
//     item =>
//       `<li class="gallery__item"><a class="gallery__link" href="#"><img class="gallery__image" src="${item.preview}"  data-source="${item.original}" alt="${item.description}"></a></li>` // додаємо зображення і атрибути до кожного елемента 
//   )
//   .join(''); // об'єднуємо всі рядки в одну стрічку

// list.insertAdjacentHTML('beforeend', gallery); // додаємо список з li до нашого ul

// let instance;

// function onClick(event) {
//   if (!event.target.classList.contains('gallery__image')) {
//     return;
//   }

//   instance = basicLightbox.create(
//     ` <img src="${event.target.dataset.source}" alt="${event.target.alt}">`
//   );

//   instance.show();
// }

// function onEscape(event) {
//   if (event.code === 'Escape') {
//     instance.close();
//   }
// }

// Створи галерею з можливістю кліку по її елементах і перегляду повнорозмірного зображення у модальному вікні. Подивися демо відео роботи галереї.

// Виконуй це завдання у файлах 01-gallery.html і 01-gallery.js. Розбий його на декілька підзавдань:

// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
// Реалізація делегування на ul.gallery і отримання url великого зображення.
// Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані (.min) файли бібліотеки.
// Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.
// Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.
// Розмітка елемента галереї
// Посилання на оригінальне зображення повинно зберігатися в data-атрибуті source на елементі <img>, і вказуватися в href посилання. Не додавай інші HTML теги або CSS класи, крім тих, що містяться в цьому шаблоні.

// {/* <li class="gallery__item">
//   <a class="gallery__link" href="large-image.jpg">
//     <img
//       class="gallery__image"
//       src="small-image.jpg"
//       data-source="large-image.jpg"
//       alt="Image description"
//     />
//   </a>
// </li> */}

// Зверни увагу на те, що зображення обгорнуте посиланням, отже по кліку за замовчуванням користувач буде перенаправлений на іншу сторінку. Заборони цю поведінку за замовчуванням.

// Закриття з клавіатури
// УВАГА
// Наступний функціонал не обов'язковий для здавання завдання, але буде хорошою додатковою практикою.

// Додай закриття модального вікна після натискання клавіші Escape. Зроби так, щоб прослуховування клавіатури було тільки доти, доки відкрите модальне вікно. Бібліотека basicLightbox містить метод для програмного закриття модального вікна.