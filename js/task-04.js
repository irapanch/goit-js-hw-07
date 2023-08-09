// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.




let counterValue = 0; // створили змінну, в якій буде зберігатися поточне значення лічильника, ініціалізували її значенням 0

const minusButton = document.querySelector('[data-action="decrement"]'); //дісталися до butto з атрибутом data-action="decrement"
const plusButton = document.querySelector('[data-action="increment"]'); //дісталися до butto з атрибутом data-action="increment"
const valueSpan = document.querySelector('#value'); // дісталися до span з id="value"



minusButton.addEventListener("click", () => { // подія кліку викликає функцію
  counterValue --;    // зменшення значення змінної на одиницю
  valueSpan.textContent = counterValue; //відображення нового значення в елементі з id="value"
});

plusButton.addEventListener("click", () => { // подія кліку викликає функцію
  counterValue ++;  // збільшення значення змінної на одиницю
  valueSpan.textContent = counterValue;   // відображення нового значення в елементі з id="value"
});
