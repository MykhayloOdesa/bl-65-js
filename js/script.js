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

// // Task 7
// // Дополни код так, чтобы в переменной allGenres был массив всех жанров книг(свойство genres)
// // из массива books, а в переменной uniqueGenres массив уникальных жанров - без повторений.

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
//   .reduce((acc, elem) => (acc.includes(elem) ? acc : [...acc, elem]), []);
// console.log(allGenres);

// // Task 8
// // Потрібно перевірити "same" масиви числа з першого в квадраті дорівнюють числам другого

// const a = [121, 144, 19, 161, 19, 144, 19, 11];
// const b = [121, 14641, 20736, 361, 25921, 361, 20736, 361];

// const same = function (a, b) {
//   const sortA = [...a].sort((prev, next) => {
//     return prev - next;
//   });
//   const sortB = [...b].sort((prev, next) => {
//     return prev - next;
//   });

//   // const sortADouble = sortA.map((elem) => {
//   //   return elem * elem;
//   // });
//   // for (let i = 0; i < sortADouble.length; i += 1) {
//   //   if (sortADouble[i] !== sortB[i]) {
//   //     return false;
//   //   }
//   // }
//   // return true;

//   return sortA
//     .map((elem) => elem * elem)
//     .every((element, index) => element === sortB[index]);

//   console.log(sortA);
//   console.log(sortB);
//   console.log(sortADouble);
// };

// console.log(same(a, b));

// // Task 9

// const people = [
//   {
//     name: "Alex",
//     know: ["Alex", "Jhon"],
//   },
//   {
//     name: "Eva",
//     know: ["Alex", "Jhon"],
//   },
//   {
//     name: "Ivan",
//     know: ["Jhon", "Eva"],
//   },
//   {
//     name: "Jhon",
//     know: [],
//   },
// ];
// //нарцис  'Jhon'

// const people2 = [
//   {
//     name: "Alex",
//     know: ["Alex", "Jhon"],
//   },
//   {
//     name: "Jhon",
//     know: [],
//   },
//   {
//     name: "Eva",
//     know: [],
//   },
//   {
//     name: "Ivan",
//     know: ["Jhon", "Eva"],
//   },
// ];
// //немає нарциса'

// const people3 = [
//   {
//     name: "Alex",
//     know: ["Alex", "Eva"],
//   },
//   {
//     name: "Jhon",
//     know: [],
//   },
//   {
//     name: "Eva",
//     know: ["Alex", "Jhon"],
//   },
//   {
//     name: "Ivan",
//     know: ["Jhon", "Eva"],
//   },
// ];
// //немає нарциса

// const people4 = [
//   {
//     name: "Alex",
//     know: ["Alex", "Jhon"],
//   },
//   {
//     name: "Jhon",
//     know: ["Eva"],
//   },
//   {
//     name: "Eva",
//     know: ["Alex", "Jhon"],
//   },
//   {
//     name: "Ivan",
//     know: ["Jhon", "Eva"],
//   },
// ];
// //немає нарциса
// //Нарциса знають всі, нарцис не знає нікого

// const narName = (people) => {
//   const narc = people.find(({ know }) => know.length === 0);
//   if (!narc) {
//     console.log("немає нарциса");
//     return;
//   }
//   console.log(narc);

//   const result = people.every((element) => {
//     if (element.name === narc.name) {
//       return true;
//     }
//     return element.know.includes(narc.name);
//   });

//   if (result) {
//     console.log("нарцис:", narc.name);
//   } else {
//     console.log("немає нарциса");
//   }
// };

// narName(people);
// narName(people2);
// narName(people3);
// narName(people4);

// // Task 10

// const findAllGenres = (books) => {
//   return books
//     .reduce((acc, elem) => [...acc, ...elem.genres], [])
//     .reduce(
//       (acc, elem) => ({ ...acc, [elem]: acc[elem] ? (acc[elem] += 1) : 1 }),
//       {}
//     );
// };

// console.log(findAllGenres(books));

// // Task 11

// const vehicles = [
//   {
//     make: "Honda",
//     model: "CR-V",
//     type: "suv",
//     amount: 14,
//     price: 24045,
//     onSale: true,
//   },
//   {
//     make: "Honda",
//     model: "Accord",
//     type: "sedan",
//     amount: 2,
//     price: 22455,
//     onSale: true,
//   },
//   {
//     make: "Mazda",
//     model: "Mazda 6",
//     type: "sedan",
//     amount: 8,
//     price: 24195,
//     onSale: false,
//   },
//   {
//     make: "Mazda",
//     model: "CX-9",
//     type: "suv",
//     amount: 7,
//     price: 31520,
//     onSale: true,
//   },
//   {
//     make: "Toyota",
//     model: "4Runner",
//     type: "suv",
//     amount: 19,
//     price: 34210,
//     onSale: false,
//   },
//   {
//     make: "Toyota",
//     model: "Sequoia",
//     type: "suv",
//     amount: 16,
//     price: 45560,
//     onSale: false,
//   },
//   {
//     make: "Toyota",
//     model: "Tacoma",
//     type: "truck",
//     amount: 4,
//     price: 24320,
//     onSale: true,
//   },
//   {
//     make: "Ford",
//     model: "F-150",
//     type: "truck",
//     amount: 11,
//     price: 27110,
//     onSale: true,
//   },
//   {
//     make: "Ford",
//     model: "Fusion",
//     type: "sedan",
//     amount: 13,
//     price: 22120,
//     onSale: true,
//   },
//   {
//     make: "Ford",
//     model: "Explorer",
//     type: "suv",
//     amount: 6,
//     price: 31660,
//     onSale: false,
//   },
// ];

// // 1. Реалізувати фільтр за властивістю amount і отримати тільки назва моделі
// const filteredModels = vehicles
//   .filter(({ amount }) => amount >= 12)
//   .map(({ model }) => model);

// console.log(filteredModels);

// // 2. Отримати машини на розпродажі і сортувати за зменшенням ціни
// const onSales = vehicles
//   .filter(({ onSale }) => onSale)
//   .sort((a, b) => b.price - a.price);

// console.table(onSales);

// ********************************

// class Client {
//   #login;
//   #email;
//   constructor(login, email) {
//     this.#login = login;
//     this.#email = email;
//   }
//   get login() {
//     return this.#login;
//   }
//   set login(newLogin) {
//     this.#login = newLogin;
//   }
//   get email() {
//     return this.#email;
//   }
//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const client1 = new Client("mango", "test@mail.com");
// console.log(client1);

// console.log(client1.email);

// client1.email = "rtrt@dfd.fd";
// console.log(client1.email);

// ===============

// class UnsplashAPI {
//   #query = "";
//   #page = 1;
//   #per_page;
//   constructor({ per_page = 12 } = {}) {
//     this.#per_page = per_page;
//   }
//   getPhotos() {
//     console.log({
//       query: this.#query,
//       page: this.#page,
//       per_page: this.#per_page,
//     });
//     console.log("Back-End Request");
//   }
//   incrementPage() {
//     this.#page += 1;
//   }
//   resetPage() {
//     this.#page = 1;
//   }
//   get query() {
//     return this.#query;
//   }
//   set query(newEntry) {
//     this.#query = newEntry;
//   }
// }

// const unsplashAPI = new UnsplashAPI();
// unsplashAPI.query = "cat";
// unsplashAPI.getPhotos();
// unsplashAPI.incrementPage();
// unsplashAPI.incrementPage();
// unsplashAPI.incrementPage();
// unsplashAPI.getPhotos();
// unsplashAPI.resetPage();
// console.log(unsplashAPI);

// =======worker
//5. Створити клас Worker, у якого є властивості name, age, salary.
//У класу Worker є метод getSalary.
//Створити клас TopLevelWorker, у якого є властивість hierarchyLevel
//і який успадковує клас Worker, додаючи метод getHierarchyLevel
//Реалізувати завдання за допомогою ES5 прототипів та ES6 класів

// class Worker {
//   static Level = {middle: "middle", junior: "junior", senior: "senior"}
//   constructor({name, age, salary} ={}) {
//     this.name =name;
//     this.age = age;
//     this.salary = salary;
//   }
//   getSalary() {
//     return this.salary;
//   }

// }
// const developer = new Worker({name: "Petro", age: 29, salary: 55000});
// console.log(developer.getSalary());
// console.log(developer);

// class TopLevelWorker extends Worker{
//   constructor(obj, hierarchyLevel) {
//     super(obj);
//     this.hierarchyLevel = hierarchyLevel;

//   }
//   getHierarchyLevel() {
//     return this.hierarchyLevel;
//   }
// }

// const middleDeveloper = new TopLevelWorker({name: "Vasyl", age: 88, salary: 66000}, Worker.Level.middle );
// console.log(middleDeveloper);
// console.log(middleDeveloper.getHierarchyLevel());
// console.log(middleDeveloper.__proto__ === TopLevelWorker.prototype);
// console.log(developer.__proto__ === Worker.prototype);
// console.log(developer.prototype);
// console.log(Worker.__proto__ === Function.prototype);
// console.log(Function.prototype.__proto__ === Object.prototype);
// console.log(Object.prototype.__proto__);
// console.log(Function.prototype.__proto__.__proto__);
// console.log(Worker.__proto__.__proto__.__proto__);
// console.log(Worker.prototype.__proto__ === Object.prototype);
// console.log(middleDeveloper.__proto__.__proto__.__proto__.__proto__);

// const age = 21;
// // console.log(age.__proto__ === Number.prototype);
// console.log(Number.prototype.__proto__ === Object.prototype);
// console.log(Number.__proto__ === Function.prototype);
// console.log(Array.__proto__ === Function.prototype);
// console.log(Function.__proto__ === Function.prototype);
// console.log(Object.prototype);

//1. Створити маркований перелік.
//Створити кнопки "Add" "Remove", які змінюватимуть склад списку
//Створити input з якого будемо отримувати значення, яке буде в li
//* Парним li вказати червоне тло, непарним - синім
//Для виконання завдання використовуйте createElement

const container = document.querySelector(".js-container");

const input = document.createElement("input");
const addBtn = document.createElement("button");
const removeBtn = document.createElement("button");
const list = document.createElement("ol");

container.append(input, addBtn, removeBtn, list);
addBtn.textContent = "ADD";
removeBtn.textContent = "REMOVE";

addBtn.addEventListener("click", () => {
  console.log(input.value);
  const markupItem = document.createElement("li");
  markupItem.textContent = input.value ? input.value : "default value";
  list.append(markupItem);
  const isEvent = list.children.length % 2 === 0;
  markupItem.style.backgroundColor = isEvent ? "red" : " blue";
  input.value = "";
});

removeBtn.addEventListener("click", () => {
  if (!list.hasChildNodes()) return;
  list.lastElementChild.remove();
});

console.log(Notiflix);
