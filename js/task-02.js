
// HTML містить порожній список ul#ingredients.

// <ul id="ingredients"></ul>

// JavaScript містить масив рядків.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.


const ulElement = document.querySelector("#ingredients"); // дісталися до ul з id="ingredients"

const newElements = ingredients.map((elem, index) => { //перебираємо масив

  let liElement = document.createElement('li'); // створюємо новий елемент li
  liElement.textContent = ingredients[index]; // встановлюємо текстовий вміст елементу li
  liElement.className = 'item'; // додаємо клас "item" до спискового елементу liElement
  return liElement;
});
ulElement.append(...newElements);
//вставляємо усі <li> з фрагмета за одну операцію у список ul#ingredients

 


