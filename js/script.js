// // Task 1
// // Використовуючи функцію if...else,
// // напишіть код, який запитуватиме:
// // "Яка офіційна назва JavaScript?"
// // Якщо користувач вводить "ECMAScript",
// // показати через alert: "Вірно!"
// // інакше відобразити:"Не знаєте? ECMAScript!"

// let userInput = prompt("Яка офіційна назва JavaScript?");
// console.log(userInput);

// if (userInput === "ECMAScript") {
//   alert("Вірно!");
// } else {
//   alert("Не знаєте? ECMAScript!");
// }

// const message =
//   userInput === "ECMAScript" ? "Вірно!" : "Не знаєте? ECMAScript!";
// alert(message);

// // Task 2
// // Напишіть цикл, який виводить у консоль
// // числа від max до min за спаданням
// // Додайте (сумма) усі парні числа від max до min

// const max = 50;
// const min = 23;
// let total = 0;

// for (let i = max; i >= min; i -= 1) {
//   if (i % 2 !== 0) {
//     continue;
//   }
//   total += i;
// }

// console.log(total);

// // Task 3
// // Напишіть код, який запитуватиме
// // Логін за допомогою prompt і логуватиме результат
// // В консоль браузера

// // Якщо відвідувач вводить "Адмін",
// // то prompt запитує пароль.
// // Якщо нічого не ввели або натиснута клавіша Esc
// // Вивести стороку "Скасовано"
// // В іншому випадку вивести рядок "Я вас не знаю"

// // Пароль перевіряти так:
// // Якщо введено пароль "Я головний",
// // то вивести рядок "Здрастуйте!"
// // інакше виводити рядок "Невірний пароль!"

// const userLogin = prompt("Login");
// if (userLogin === "Admin") {
//   const userPassword = prompt("Enter password");
//   if (userPassword === "I am hungry") {
//     console.log("Hello");
//   } else {
//     console.log("Wrong passord");
//   }
// } else if (userLogin === null) {
//   console.log("cancel");
// } else {
//   console.log("I do not know");
// }

// const userLogin = prompt("Login");
// switch (userLogin) {
//   case "Admin":
//     const userPassword = prompt("Enter password");
//     switch (userPassword) {
//       case "I am hungry":
//         console.log("Hello");
//         break;
//       default:
//         console.log("Wrong passord");
//     }
//     break;
//   case null:
//     console.log("cancel");
//     break;
//   default:
//     console.log("I do not know");
// }

// // Task 4
// // При завантаженні сторінки користувачеві пропонується
// // В prompt ввести число. Введення додається до значення
// // Змінної total.
// // Операція введення числа триває до того часу,
// // Поки користувач не натисне кнопку Cancel в prompt.
// // Після того, як користувач припинив введення натиснувши на
// // кнопку Cancel, показати alert з рядком "Загальна сума введених чисел дорівнює [число]."
// // Робити перевірку,що користувач ввів саме число,
// // а не довільний набір символів не потрібно.

// let number = prompt("Enter number");
// let total = 0;
// while (number) {
//   total += Number(number);
//   number = prompt("Enter number");
// }
// console.log(total);

// // Task5
// // Напишіть цикл, який пропонує ввести
// // число більше 100 через prompt.
// // Якщо відвідувач ввів інше число - попросити
// // Ввести ще раз і так далі.
// // Цикл має питати число, поки відвідувач не
// // введе число більше 100, або натисне кнопку
// // Скасування в prompt

// let number = prompt("введіть число більше 100");
// while (number < 100 && number !== null) {
//   number = prompt("введіть число більше 100");
// }
// console.log(number);

// // Task 6
// // Дано рядок, що складається із символів, наприклад, 'abcde'.
// // Перевірте, що першим символом цього рядка є буква 'a'.
// // Якщо це так - виведіть 'так', інакше виведіть 'ні'.

// const string = "abcde";
// if (string[0] === "a") {
//   console.log("так");
// } else {
//   console.log("ні");
// }

// const string = "abcde";
// const message = string.startsWith("d") ? "так" : "ні";
// console.log(message);

// // Task7

// Дополни код так, чтобы в переменной allGenres был массив всех жанров книг (свойство genres) из массива books, а в переменной uniqueGenres массив уникальных жанров - без повторений.

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// // Change code below this line
// const allGenres = books
//   .reduce((acc, elem) => [...acc, ...elem.genres], [])
//   .reduce((acc, elem) => acc.includes(elem) ? acc : [...acc, elem], []);
// console.log(allGenres);

// TASK 8

// const findAllGenres = (books) => {
//   return books
//     .reduce((acc, elem) => [...acc, ...elem.genres], [])
//     .reduce(
//       (acc, elem) => ({ ...acc, [elem]: acc[elem] ? (acc[elem] += 1) : 1 }),
//       {}
//     );
// };

// console.log(findAllGenres(books));
const vehicles = [
  { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true },
  { make: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true },
  { make: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 8, price: 24195, onSale: false },
  { make: 'Mazda', model: 'CX-9', type: 'suv', amount: 7, price: 31520, onSale: true },
  { make: 'Toyota', model: '4Runner', type: 'suv', amount: 19, price: 34210, onSale: false },
  { make: 'Toyota', model: 'Sequoia', type: 'suv', amount: 16, price: 45560, onSale: false },
  { make: 'Toyota', model: 'Tacoma', type: 'truck', amount: 4, price: 24320, onSale: true },
  { make: 'Ford', model: 'F-150', type: 'truck', amount: 11, price: 27110, onSale: true },
  { make: 'Ford', model: 'Fusion', type: 'sedan', amount: 13, price: 22120, onSale: true },
  { make: 'Ford', model: 'Explorer', type: 'suv', amount: 6, price: 31660, onSale: false },
];
//1.Реалізувати фільтр за властивістю amount і отримати
// Тільки назва моделі
const filteredModels = vehicles.filter(({ amount }) => amount >= 12).map(({model}) => model);
console.log(filteredModels);

//2.Отримати машини на розпродажі і сортувати за зменшенням ціни
const onSales = vehicles.filter(({onSale}) => onSale).sort((a, b) => b.price - a.price);
 console.table(onSales);