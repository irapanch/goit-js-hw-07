
// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>



const fsControl = document.getElementById("font-size-control"); //отримуємо посилання на інпут з іd= "font-size-control"
const text = document.getElementById("text"); //отримуємо посилання на span з іd= "text"

fsControl.addEventListener("input", movePlate); //додаємо обробник події  на рух повзунка

function movePlate() { //функція викликається, якщо рухатиметься повзунок

 text.style.fontSize = fsControl.value + "px"; //змінюємо значення  fontSize елемента  на отримане  і додаємо одиницю виміру "px"
}

