//////////////////////////2.5 Функции///////////////////
////////////////////////////////////////////////////////


function calc(a, b) {
    let sum = a + b;
    let mult = a * b;
    console.log(`сумма параметров равно ${sum}
    произведение равно ${mult}`)
}


function sayhello(name) {
    alert(`привет! ${name}`);
}
sayhello('Peter');


const sayHi = function () {
    console.log('Hello');
}
sayHi();


sayBye();
function sayBye() {
    console.log('Good bye');
}


sayHi();
const sayHi = function () {
    console.log('Hi!');
}

// ОШИБКА
"use strict";
let age = prompt("Сколько Вам лет?", 18);
// в зависимости от условия объявляем функцию
if (age < 18) {

    function printMessage() {
        console.log("Привет!");
    }

} else {

    function printMessage() {
        console.log("Здравствуйте!");
    }

}
printMessage();


// НЕТ ОШИБКИ
"use strict";
let age = prompt("Сколько Вам лет?", 18);
let printMessage;
// в зависимости от условия объявляем функцию
if (age < 18) {

    printMessage = function () {
        console.log("Привет!");
    }

} else {

    printMessage = function () {
        console.log("Здравствуйте!");
    }

}
printMessage();

// СТРЕЛОЧНАЯ ФУНКЦИЯ
const name = () => {
}

let sum = (a, b) => a + b;

let mult = (a, b) => {
    let result = a * b;
    return result;
}

function showText() {
    let message = "Привет!";
    alert(message);
}

showText();
alert(message);

// ВСТАВЛЯЕМ ФУНКЦИЮ JS В HTML ЧЕРЕЗ ONCLICK
function delMessage() {
    let del = confirm('Вы правда хотите удалить сообщение?');
    if (del) {
        alert('Сoобщение удалено');
    } else {
        alert('Ничего срашного, мы ничего не удалили')
    }
}
//вариант с тернарным оператором
function delMessage() {
    let del = confirm('Вы правда хотите удалить сообщение?');
    let message = del ? 'Сообщение удалено' : 'Ничего страшного, мы ничего не удалили';
    alert(message);
}

// НЕ ПОНЯТНО
const puzzle = (a, b) => {
    if (a > b) {
        return a + b;
    } else {
        return a * b;
    }
}
console.log(puzzle(20, 3));


// ОБЪЕКТЫ СОБАКА И КОШКА ЛАЯТ
function bark(dog) {
    console.log(`${dog.name} лает: Гав!`);
}

const dog = {
    name: 'Шарик',
    breed: 'корги',
    weight: 6,
    age: 2
}

const cat = {
    name: 'Барсик',
    breed: 'перс',
    weight: 3,
    age: 4
}

bark(dog); // 'Шарик лает: Гав!'
bark(cat); // 'Барсик лает: Гав!'

// ДОБАВИЛИ ФУНКЦИЮ В СВОЙСТВО ОБЪЕКТА
// Свойство объекта, принимающее в качестве 
// значения объявление функции,называется методом объекта

const dog = {
    name: 'Шарик',
    breed: 'корги',
    weight: 6,
    age: 2,
    bark: function () {
        console.log(`${dog.name} лает: Гав!`);
    }
}

const cat = {
    name: 'Барсик',
    breed: 'перс',
    weight: 3,
    age: 4,
    miau: function () {
        console.log(`${cat.name} мяучет: Мяу!`);
    }
}

dog.bark(); // 'Шарик лает: Гав!'
cat.miau(); // 'Кот мяучет: Мяу!'


// ОКРАЩЁННАЯ ЗАПИСЬ МЕТОДОВ БЕЗ FUNСTION
const dog = {
    name: 'Шарик',
    breed: 'корги',
    weight: 6,
    age: 2,
    bark() {
        console.log(`${dog.name} лает: Гав!`);
    }
}

dog.bark(); // 'Шарик лает: Гав!'

//ПРОВЕРОЧНОЕ ЗАДАНИЕ
const user = {
    name: 'Федя',
    age: 15,
    city: 'Кукуево',
    getInfo() {
        return `Пользователь ${user.name}, возраст ${user.age}, проживает в ${user.city}`;
    }
};
console.log(user.getInfo());


// ДВА СОБАКИ ЛАЯТ - ДВА ОДИНАКОВЫХ МЕТОДА
const dog1 = {
    name: 'Шарик',
    breed: 'корги',
    weight: 6,
    age: 2,
    bark() {
        console.log(`${dog1.name} лает: Гав!`);
    }
}

const dog2 = {
    name: 'Бобик',
    breed: 'шпиц',
    weight: 3,
    age: 4,
    bark() {
        console.log(`${dog2.name} лает: Гав!`);
    }
}

dog1.bark(); // Шарик лает: Гав!
dog2.bark(); // Бобик лает: Гав!





// С ИСПОЛЬЗОВАНИЕМ THIS (теперь возникло дублирование кода)
const dog1 = {
    name: 'Шарик',
    breed: 'корги',
    weight: 6,
    age: 2,
    bark() {
        console.log(`${this.name} лает: Гав!`);
    }
}

const dog2 = {
    name: 'Бобик',
    breed: 'шпиц',
    weight: 3,
    age: 4,
    bark() {
        console.log(`${this.name} лает: Гав!`);
    }
}

dog1.bark(); // Шарик лает: Гав!
dog2.bark(); // Бобик лает: Гав!

// ЧТОБЫ НЕ ДУБЛИРОВАТЬ КОД 
// МОЖНО ВЫНЕСТИ МЕТОД ЗА ПРЕДЕЛЫ ОБЪЕКТОВ
function bark() {
    console.log(`${this.name} лает: Гав!`);
};

const dog1 = {
    name: 'Шарик',
    breed: 'корги',
    weight: 6,
    age: 2,
    bark: bark,
}

const dog2 = {
    name: 'Бобик',
    breed: 'шпиц',
    weight: 3,
    age: 4,
    bark: bark,
}

dog1.bark(); // Шарик лает: Гав!
dog2.bark(); // Бобик лает: Гав!

// ПРАКТИЧЕСКОЕ ЗАДАНИЕ БЕЗ ПРОВЕРКИ

function getRectangleArea() {
    return this.width * this.height
}

function getRectanglePerimeter() {
    return this.width * 2 + this.height * 2
}

const square1 = {
    width: 15,
    height: 20,
    getArea: getRectangleArea,
    getPerimetr: getRectanglePerimeter
}

console.log(square1.getArea());
console.log(square1.getPerimetr());


// НЕ СОВСЕМ ЭТО ПОНИМАЮ..
let mult = function (a, b) {
    return a * b;
}
console.log(mult(2, 3)) // 6


/////////////// 2.6 Массивы ///////////////////////
//////////////////////////////////////////////////


let products = ['Кресло', 'Стул', 'Стол'];
console.log(products[0]);


const numbs = [2, 4, 5, 6, 8];

for (let i = 0; i < numbs.length; i++) {
    console.log(numbs[i]);
}

const autoBrands = ['Audi', 'BMW', 'Mercedes-Benz', ['Volkswagen', 'Lamborghini']];
console.log(autoBrands);

console.log(autoBrands[3]);

autoBrands.length;
console.log(autoBrands.length);



const autoBrands = ['Audi', 'BMW', 'Mercedes-Benz', 'Volkswagen', 'Lamborghini'];
console.log(autoBrands);
console.log(autoBrands[0]);
console.log(autoBrands[1]);
console.log(autoBrands[2]);
console.log(autoBrands[3]);
console.log(autoBrands[4]);

// Метод обхода FOR
for (let i = 0; i < autoBrands.length; i++) {
    console.log(autoBrands[i]);
}

for (let i = 0; i < 3; i++) {
    console.log(i);
}


// Метод обхода FOR OF
const autoBrands = ['Audi', 'BMW', 'Mercedes-Benz', 'Volkswagen', 'Lamborghini'];
for (let item of autoBrands) {
    console.log(item);
}

// Метод обхода FOR EACH
const autoBrands = ['Audi', 'BMW', 'Mercedes-Benz', 'Volkswagen', 'Lamborghini'];
autoBrands.forEach(function (item, index) {
    console.log(`${index} => ${item}`);
});


const numbs = [2, 4, 5, 6, 8];
numbs.forEach((el, index, arr) => {
    console.log(`${index}: ${el}, массив: ${arr}`);
});

//filter()
const age = [11, 18, 10, 17, 21, 31, 16];
const result = age.filter(item => item >= 12);

console.log(result);

//map()
const salary = [100000, 180000, 50000, 70000, 31000];
let result = salary.map(item => (item - item * 0.13));

console.log(result);

//reduce()
const arr = [1, 2, 3, 4];
const result = arr.reduce((intermediate, value) => intermediate + value);

console.log(result);


let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
console.log(arr[0][1]);


let arr = [
    [1, 2],
    [3, 4],
];
for (let arrIn of arr) { // где arrIn - это элемент массива [1, 2] и [3,4]
    for (let element of arrIn) { // где element - элементы дочерних массивов 1, 2 и 3, 4
        console.log(element);
    }
}
//Оператор Search 
let numbers = [1, 2, 3, 4, 5, 6];
let search = numbers.includes(8); //поиск числа 8
console.log(search); // true или false


//Оператор Spread 
let arrsum = [3, 4];
const sum = (a, b) => {
    let result = a + b;
    return result;
}

let arrMax = [1, 2, 3, 4, 5];
let max = Math.max(...arrMax); // 5

function funcSum(...arrSum) {
    let sum = 0;
    for (let item of arrSum) {
        sum += item;
    }
    return sum;
}
console.log(funcSum(3, 5, 7));


//Оператор Rest
let arrSum = [13, 4, 5, 6];
const sum = (a, b) => {
    let result = a + b;
    return result;
}
console.log(sum(...arrSum));


let arrSum = [3, 4, 5, 6];
const sum = (a, b, ...rest) => {
    let result = a + b;
    console.log(result);
    console.log(rest);
}
sum(...arrSum);


//Объекты и массивы
const book = [
    { name: 'foreword', pageCount: 14 },
    { name: 'boyWhoLived', pageCount: 18 },
    { name: 'vanishingGlass', pageCount: 13 },
    { name: 'lettersFromNoOne', pageCount: 17 },
    { name: 'afterword', pageCount: 19 },
];


const newspaper = {
    sports: 'ARod Hits Home Run',
    sportsWriters: ['Miramon Nuevo', 'Rick Reilly', 'Woddy Paige'],
    business: 'GE Stock Dips Again',
    businessWriters: ['Adam Smith', 'Albert Humphrey', 'Charles Handy'],
    movies: 'Superman Is A Flop',
    moviesWriters: ['Rogert Ebert', 'Andrew Sarris', 'Wesley Morris'],
}
newspaper.sportsWriters[1]


const newspaper = {
    sports: {
        title: 'ARod Hits Home Run',
        writers: ['Miramon Nuevo', 'Rick Reilly', 'Woddy Paige'],
    },
    business: {
        title: 'GE Stock Dips Again',
        writers: ['Adam Smith', 'Albert Humphrey', 'Charles Handy'],
    },
    movies: {
        title: 'Superman Is A Flop',
        writers: ['Rogert Ebert', 'Andrew Sarris', 'Wesley Morris'],
    },
};

newspaper.sports.title; // ARod Hits Home Run
newspaper.business.writers[0]; // Adam Smith
newspaper['movies']['title']; // Superman Is A Flop

let products = ['Кресло', 'Стул', 'Стол'];
console.log(products); // ['Комод', 'Стул', 'Стол'];

products[0] = 'KOMOD';
console.log(products);


let products = ['Кресло', 'Стул', 'Стол'];
console.log(products.pop()); // Удаляет элемент 'Стол' и возвращает его
console.log(products); // ['Кресло', 'Стул']

let products = ['Кресло', 'Стул', 'Стол'];
products.push('Комод'); // Добавляет элемент в конец массива:
console.log(products); // ['Кресло', 'Стул', 'Стол', 'Комод']

let products = ['Кресло', 'Стул', 'Стол'];
products.unshift('Комод'); // Добавляет элемент в начало массива:
console.log(products); // ['Комод', 'Кресло', 'Стул', 'Стол']

let products = ['Кресло', 'Стул', 'Стол'];
console.log(products.shift()); // Удаляет элемент 'Кресло' и возвращает его
console.log(products); // ['Стул', 'Стол']


//Многомерные массивы
let catalog = [
    ['Столы', 'Дорогой стол', 'Большой стол'],
	['Диваны', 'Красный диван', 'Белый диван']
]

/*Первый элемент каждого массива содержит название категории, 
а все остальные — названия товаров.
Мы можем вывести каталог следующим образом: */

for (let item of catalog) {
	for (let i = 0; i < item.length; i++) {
		if (i === 0) {
			console.log(`Категория ${item[i]}`);
		} else {
			console.log(`\t ${item[i]}`);
		}
	}
}
/*
Мы можем получать доступ к отдельным элементам через [] 
точно так же, как в одномерном массиве: */
console.log(catalog[0][1]); // Выведет 'Дорогой стол'



/* Очередь поддерживает два вида операций:
1) push — добавляет элемент в конец очереди.
2) shift — удаляет первый элемент, сдвигая очередь так,
что второй элемент становится первым.
*/

/*
Стек реализует концепт «последний зашел — первый вышел»,
т. е. последний элемент, который попал в стек, будет удален первым.
Стек поддерживает два вида операций:

1) push — добавляет элемент в конец стека.
2) pop — удаляет последний элемент.
*/


//в ДЗ прикольно получилось Задание 1
const arr = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 10) {
    console.log(`Число 10 найдено в массиве с индексом ${i}`);
} else {
    console.log(`Элемент с индексом ${i} не является числом 10`);
  }
}

//Задание 4 ПОЛНАЯ ДИЧЬ :D
const rows = 3; // количество строк
const cols = 3; // количество столбцов

// Создание пустого многомерного массива
const matrix = [];

// Внешний цикл для строк
for (let i = 0; i < rows; i++) {
  // Создание пустого внутреннего массива для каждой строки
  const row = [];

  // Внутренний цикл для столбцов
  for (let j = 0; j < cols; j++) {
    // Добавление элемента со значением 1 во внутренний массив
    row.push(1);
  }

  // Добавление внутреннего массива в многомерный массив
  matrix.push(row);
}

console.log(matrix);



//Задание 14 (Необязательное)
const originalArray = [];
const evenArray = [];

// Генерация исходного массива
for (let i = 0; i < 10; i++) {
  const randomNumber = Math.floor(Math.random() * 11); // Генерация случайного числа от 0 до 10
  originalArray.push(randomNumber);
}

// Поиск четных значений и добавление их в новый массив
for (let i = 0; i < originalArray.length; i++) {
  if (originalArray[i] % 2 === 0) {
    evenArray.push(originalArray[i]);
  }
}

// Вывод результатов в консоль
console.log("Исходный массив:", originalArray);
console.log("Массив с четными значениями:", evenArray);


/////////////// 2.7 Встроенные объекты ///////////////////////
/////////////////////////////////////////////////////////////