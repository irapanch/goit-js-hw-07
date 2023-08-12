import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems); //вивели галерею із зображеннями  в консоль


const galleryList = document.querySelector('.gallery'); // отримали посилання на ul class="gallery"

const gallery = galleryItems // створюємо змінну, що містить галерею зображень
  .map(        // перебираємо кожний елемент галереї і створюємо рядок з розміткою <li> для кожного елемента галереї
    item =>
      `<li class="gallery__item"><a class="gallery__link" href="${item.original}"><img class="gallery__image" src="${item.preview}"   alt="${item.description}" ></a></li>` // додаємо зображення і атрибути до кожного елемента 
  )
  .join(''); // об'єднуємо всі рядки в один рядок

galleryList.insertAdjacentHTML('beforeend', gallery); // додаємо список з li до нашого ul
let lightbox; // змінна модального вікна

lightbox = new SimpleLightbox('.gallery a', {  // створюємо модальне вікно  з великим зображенням 

    captionsData: "alt",  // додане відображення підписів до зображень з атрибута alt
    navText: ['&#128281;', '&#128284;'], // / додані авторські стрілки    
    closeText: '&#128064;', //// / додана авторська кнопка exit
    
});





// =========================================

// Зроби таку саму галерею як в першому завданні, але використовуючи бібліотеку SimpleLightbox, яка візьме на себе обробку кліків по зображеннях, відкриття і закриття модального вікна, а також гортання зображень за допомогою клавіатури.

// Необхідно трохи змінити розмітку картки галереї, використовуй цей шаблон.

// <li class="gallery__item">
//    <a class="gallery__link" href="large-image.jpg">
//       <img class="gallery__image" src="small-image.jpg" alt="Image description" />
//    </a>
// </li>

// Виконуй це завдання у файлах 02-lightbox.html і 02-lightbox.js. Розбий його на декілька підзавдань:

// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї. Використовуй готовий код з першого завдання.
// Підключення скрипту і стилів бібліотеки, використовуючи CDN сервіс cdnjs. Необхідно додати посилання на два файли: simple-lightbox.min.js і simple-lightbox.min.css.
// Ініціалізація бібліотеки після створення і додання елементів галереї у ul.gallery. Для цього ознайомся з документацією SimpleLightbox - насамперед секції «Usage» і «Markup».
// Подивися в документації секцію «Options» і додай відображення підписів до зображень з атрибута alt. Нехай підпис буде знизу і з'являється через 250 мілісекунд після відкриття зображення.