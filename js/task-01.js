// Напиши скрипт, який:
// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.

const categoryList = document.querySelector('#categories'); // дісталися до ul з id="categories"
const categoryItem = categoryList.children //дісталися до li, 
categoryItem.length // визначили кількість li
console.log(`Number of categories: ${categoryItem.length}`); //виводимо в консоль кількість категорій в ul#categories, тобто елементів li.item.




// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.


const categoryArr = [...categoryItem]; // перетворили в масив
categoryArr.forEach((category) => {  // перебираємо масив

  const categoryName = category.querySelector('h2').innerText; // отримуємо доступ до елемента з допомогою селектора h2 всередині елемента category і повертаємо текстовий контент цього елемента

  const categoryItemEl = category.querySelectorAll('li').length; // вибираємо всіх елементи <li> всередині елемента category й повертаємо їх кількість

  console.log(`Category: ${categoryName}`);  
  console.log(`Elements: ${categoryItemEl}`); // виводимо в консоjль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії
});



// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5
