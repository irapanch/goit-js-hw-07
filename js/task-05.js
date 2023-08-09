
// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>


const nameIn = document.querySelector('#name-input');  //дісталися до input з id="name-input"
const nameOut = document.querySelector('#name-output'); //дісталися до input з id="name-output"

nameIn.addEventListener('input', function () { //введення даних в інпут викликає функцію
    nameIn.value !== '' // якщо введене значення не пустий рядок
    ? (nameOut.textContent = nameIn.value) // оновлюємо текстовий вміст елемента name-output
    : (nameOut.textContent = 'Anonymous'); // інакше - встановлюємо значення "Anonymous"
});



// =======================================================

// nameIn.addEventListener('input', function() { //введення даних в інпут викликає функцію
//     nameOut.textContent = nameIn.value || 'Anonymous'; // оновлюємо текстовий вміст елемента name-output з введеного значення name-input або встановлюємо значення "Anonymous", якщо поле вводу порожнє
//   });
