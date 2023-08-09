
// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

// #validation-input {
//   border: 3px solid #bdbdbd;  білий
// }

// #validation-input.valid {
//   border-color: #4caf50;  зелений
// }

// #validation-input.invalid {
//   border-color: #f44336;    червоний
// }



const valideInput = document.querySelector('#validation-input'); //отримуємо посилання на інпут з іd= "validation-input"

valideInput.addEventListener('input', borderInput); // додали слухач події, який почнеться, коли введені дані зміняться

function borderInput() { // запускаємо функцію, коли вводяться символи у інпут
    
    if ((valideInput.value.length < valideInput.dataset.length) ||
        (valideInput.value.length > valideInput.dataset.length)) {  // Якщо довжина введених даних не дорівнює значенню атрибута data-length у valideInput, тоді видаляється клас "valid" та додається клас "invalid"
        valideInput.classList.remove('valid');
        valideInput.classList.add('invalid');
    } else {  
        valideInput.classList.remove('invalid');
        valideInput.classList.add('valid');
    } // інакше (якщо дорівнює), тоді видаляється клас "invalid" та додається клас "valid"
}    


//(valideInput.value.length !== parseInt(valideInput.dataset.length))
 //перевіряє довжину введених даних і повертає true, якщо вони не рівні

