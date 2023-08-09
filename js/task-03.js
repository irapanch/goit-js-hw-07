// Напиши скрипт для створення галереї зображень на підставі масиву даних. HTML містить список ul.gallery.

// <ul class="gallery"></ul>

// Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>. Для створення розмітки використовуй шаблонні рядки і метод insertAdjacentHTML().

// Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.

// Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.

const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

 
const gallery = document.querySelector('.gallery'); // дісталися до ul з class="gallery"

  
const createGallery = images.map(({ url, alt }) =>  // ітерації по масиву images
  
  `<li><img src="${url}" alt="${alt}" /></li>`) //   отримуємо значення властивостей url і alt з кожного об'єкта у масиві через деструктуризацію. За допомогою шаблонного рядку формуємо розмітку кожного зображення у вигляді рядка HTML
  .join('');  // об'єднуємо елементи масиву в один рядок, розділяємо порожнім рядком замість коми

gallery.insertAdjacentHTML('beforeend', createGallery); //вставляємо розмітку у кінець нашого списку  gallery за одну операцію