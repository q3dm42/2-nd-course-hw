/*
2.5 Функции

function calc(a, b) {
    let sum = a + b;
    let mult = a * b;
    console.log(`сумма параметров равно ${sum}
    произведение равно ${mult}`)
}


function sayhello (name){
    alert (`привет! ${name}`);
}
sayhello ('Peter');


const sayHi = function() {
    console.log ('Hello');
}
sayHi();


sayBye ();
function sayBye () {
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
alert(message);}

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
console.log(mult(2,3)) // 6


*/
