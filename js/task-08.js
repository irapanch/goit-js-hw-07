
// Напиши скрипт управління формою логіна.

// <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Login</button>
// </form>

// Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.




const userForm = document.querySelector('.login-form'); // Знаходимо форму з класом "login-form"
console.dir(userForm)
userForm.addEventListener('submit', submitForm); // додаємо прослуховувач подій 'submit' до форми

function submitForm(event){ // функція виконується, коли юзер  надсилає форму 
  event.preventDefault(); // спершу виконується метод , який перешкоджає стандартній поведінці форми (оновлення сторінки)
  const { email, password } = userForm.elements; // деструктуризуємо обєкт для отримання ключів  і зберігаємо значення відповідних елементів email і password в змінні з тими ж іменами
  
  if (email.value === '' || password.value === '') { // перевіряємо, чи всі поля заповнені. Якщо вони порожні, з'являється спливаюче повідомлення 
    alert('Всі поля повинні бути заповнені');
  } else {  // якщо поля не  порожні
    const dataForm = { //створюємо об'єкт dataForm
      email : email.value,  // витягуємо з полів властивість email
      password: password.value // витягуємо з полів властивість  password
    };
    
    console.log(dataForm); // виводимо в консоль дані з відправленої форми
    
    userForm.reset(); // очищуємо форму після відправки
  }
};




// попередній варіант 

// const userForm = document.querySelector('.login-form'); // Знаходимо форму з класом "login-form"

// userForm.addEventListener('submit', submitForm); // додаємо прослуховувач подій 'submit' до форми

// function submitForm(event){ // функція виконується, коли юзер  надсилає форму 
//   event.preventDefault(); // спершу виконується метод , який перешкоджає стандартній поведінці форми (оновлення сторінки)
//   const userEmail = userForm.elements.email.value; //витягуємо значення поля "email"
//   const userPassword = userForm.elements.password.value; //витягуємо значення поля "password"
  
//   if (userEmail === '' || userPassword === '') { // перевіряємо, чи всі поля заповнені. Якщо вони порожні, з'являється спливаюче повідомлення 
//     alert('Всі поля повинні бути заповнені');
//   } else {  // якщо поля не  порожні
//     const dataForm = { //створюємо об'єкт dataForm
//        email : userEmail,  // витягуємо з полів властивість email
//        password : userPassword // витягуємо з полів властивість  password
//     };
    
//     console.log(dataForm); // виводимо в консоль дані з відправленої форми
    
//     userForm.reset(); // очищуємо форму після відправки
//   }
// };
