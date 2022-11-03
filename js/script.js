// Використовуючи функцію if...else,
//напишіть код, який запитуватиме:
//"Яка офіційна назва JavaScript?"
//Якщо користувач вводить "ECMAScript",
// показати через alert: "Вірно!"
//інакше відобразити:"Не знаєте? ECMAScript!"


// let userInput = prompt("Яка офіційна назва JavaScript?");
// console.log(userInput);

// if (userInput === "ECMAScript") {
//   alert("Вірно!");
// } else {
//   alert('Не знаєте? ECMAScript!');
// }

// const message =
//   userInput === "ECMAScript" ? "Вірно!" : "Не знаєте? ECMAScript!";

// alert(message);


// task 2

// Напишіть цикл, який виводить у консоль
// числа від max до min за спаданням
// Додайте (сумма) усі парні числа від max до min

// const max = 50;
// const min = 23;
// let total = 0;

// for (let i = max; i >= min; i -= 1){
    
//     if (i % 2 !== 0) {
//        continue
//     }
//     total += i
// }

// console.log(total);
// Task 3
//4. Напишіть код, який запитуватиме
//Логін за допомогою prompt і логуватиме результат
//В консоль браузера

//Якщо відвідувач вводить "Адмін",
//то prompt запитує пароль.
//Якщо нічого не ввели або натиснута клавіша Esc
//Вивести стороку "Скасовано"
// В іншому випадку вивести рядок "Я вас не знаю"

//Пароль перевіряти так:
//Якщо введено пароль "Я головний",
//то вивести рядок "Здрастуйте!"
//інакше виводити рядок "Невірний пароль!"

const userLogin = prompt("Login");
if(userLogin === "Admin") {const userPassword = prompt ("Enter password")
if(userPassword === "I am hungry") {
    console.log("Hello");
} else {console.log("Wrong passord");}
} else if(userLogin === null) {
    console.log("cancel")
} else {console.log("I do not know")};

