//////////////////////////2.5 Функции///////////////////
////////////////////////////////////////////////////////


function calc(a, b) {
    let sum = a + b;
    let mult = a * b;
    console.log(`сумма параметров равно ${sum}
    произведение равно ${mult}`)
}

//
function riddle(question, answer) {
    let userAnswer = prompt(question);
    if (userAnswer === answer) {
        console.log('угадал');
    }
    else {
        console.log('не угадал');
    }
}
riddle('Сидит дед во сто шуб одет кто его раздевает тот слезы проливает', 'лук');
riddle('Зимой и летом одним цветом', 'елка');

//
function sum(a, b) {
    return a + b;
}

function mult(a, b) {
    return a * b;
}

let result = sum(1, 5);


//
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

// СТРЕЛОЧНАЯ ФУНКЦИЯ (сокращение - NFN)
const name = () => {
}


//
let sum = (a, b) => a + b;
//или
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

// Стрелочная фнункция с иф-элсом
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


// CОКРАЩЁННАЯ ЗАПИСЬ МЕТОДОВ БЕЗ FUNСTION
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


// НЕ СОВСЕМ ЭТО ПОНИМАЮ.. UPD  - понял)
let mult = function (a, b) {
    return a * b;
}
console.log(mult(2, 3)) // 6


/////////////// 2.6 Массивы ///////////////////////
//////////////////////////////////////////////////
//индексация наачинается с 0
//есть длина массива .length (0, 1, 2, 3, 4, 5, 6)


let products = ['Кресло', 'Стул', 'Стол'];
console.log(products[0]);




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

//
for (let i = 0; i < 3; i++) {
    console.log(i);
}

//
const numbs = [2, 4, 5, 6, 8];

for (let i = 0; i < numbs.length; i++) {
    console.log(numbs[i]);
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

//
let arrMax = [1, 2, 3, 4, 5];
let max = Math.max(...arrMax); // 5

function funcSum(...arrSum) {
    let sum = 0;
    for (let item of arrSum) {
        sum += item;
    }
    return sum;
}
console.log(funcSum(3, 5, 7));,

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

/*
Первый элемент каждого массива содержит название категории, 
а все остальные — названия товаров.
Мы можем вывести каталог следующим образом: 
*/

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
точно так же, как в одномерном массиве: 
*/
console.log(catalog[0][1]); // Выведет 'Дорогой стол'



/* Очередь поддерживает два вида операций:
1) array.push('элемент'); — добавляет элемент в конец очереди.
2) shift — удаляет первый элемент, сдвигая очередь так,
что второй элемент становится первым.

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

//Создать объект
const person = {
    userName: 'жопа',
    age: 12,
    profession: 'Fashion',
}

//Обращения к данным объекта
console.log(person);
console.log(person.userName);
console.log(person['age']);



//Добавить свойство
person.isMarried = false
console.log(person);

//Удалить свойство
delete person.age

//Добавить функцию в объект Person (метод)
person.sayhi = function (name) {
    console.log(`привет ${name}`);
}




/* 
Примитивы — это данные, которые не являются объектом и не имеют методов.
В JS всего 7 простых типов данных:
*/
string;
number;
boolean;
symbol;
null;
undefined;
bigInt;

/*
Примитивы пишутся с маленькой буквы, а объекты-обертки — с большой.
Все объекты-обертки являются встроенными объектами.
*/
Для строк string это String; 
Для числовых значений number — Number;
Для булевых переменных boolean — Boolean;
Для примитивного типа symbol существует объект - обертка Symbol;
Для числового типа bigint — объект - обертка BigInt.
Обратите внимание: примитивы пишутся с маленькой буквы, а объекты - обертки — с большой.


let str = 'Строка'; // объявили переменную и присвоили ей значение
console.log(str.toUpperCase()); // ?


let str = 'Строка';
str = str.toUpperCase();
console.log(str); // 'СТРОКА', это уже новое значение переменной str

// toUpperCase - привести все символы к верхнему регистру
// toLowerCase - привести все символы к нижнему регистру
'Здесь ТЕксТ, Введенный польЗоВАТЕлеМ'.toUpperCase(); // 'ЗДЕСЬ ТЕКСТ, ВВЕДЕННЫЙ ПОЛЬЗОВАТЕЛЕМ'

// toFixed - оставить после запятой 2 знака
123.098876.toFixed(2); // '123.10'


//ИЗМЕНЕНИЕ РЕГИСТРА
const answerUser = prompt('Без рук, а рисует. Без зубов, а кусает'); // сохраняем
// ответ пользователя в переменную answerUser
const answer = 'мороз'; // храним правильный ответ в переменной answer

if (answerUser === answer) { // проверяем, совпадает ли строка, полученная от пользователя, с правильным ответом
    alert('Это правильный ответ!'); // это сообщение, если совпала
} else {
    alert(`Не угадал, правильный ответ: ${answer}`); // а это, если не совпала
}

// В нашем примере мы приведем все ответы к нижнему регистру.
const answerUser = prompt('Без рук, а рисует. Без зубов, а кусает'); // сохраняем
const answer = 'мороз'; // храним правильный ответ в переменной answer

if (answerUser.toLowerCase() === answer.toLowerCase()) { // проверяем, совпадает ли строка, полученная от пользователя, с правильным ответом
    // и теперь нам не важно, в каком регистре какие буквы ввел пользователь, мы все приводим к нижнему регистру
    alert('Это правильный ответ!'); // это сообщение, если совпала
} else {
    alert(`Не угадал, правильный ответ: ${answer}`); // а это, если не совпала
}

// ПЕРВЫЙ МЕТОД ПОИСКА ПОДСТРОКИ str.indexOf
str.indexOf(substr, pos)
// Он ищет подстроку substr в строке str, начиная с позиции pos, и возвращает позицию, 
// на которой располагается совпадение, либо -1 при отсутствии совпадений.
const str = 'Поезд едет далеко'; // строка, в которой будем осуществлять поиск
str.indexOf('едет'); // 6, 'едет' — это подстрока, которую мы ищем, метод вернет
// 6, т. к. «едет» есть в искомой строке str, и совпадение начинается с 6-го индекса
// позиции в строках начинаются с 0
str.indexOf('едит'); // -1, т. к. «едит» — нет полного совпадения подстроки

/*
В повседневной жизни (не разработческой) мы используем аналогичную функцию поиска определенного 
слова или сочетания слов в браузере через сочетание клавиш Ctrl + F: 
введя в появившемся окошке слово «ель», мы сразу увидим выделенные совпадения. 
Конечно, выделение не происходит за счет метода indexOf, но именно этот метод 
позволяет определить, где у нас на странице нужные нам слова, вернуть их позицию. 
И, уже зная позицию, мы можем выделить нужный текст.
*/

// ВТОРОЙ МЕТОД ПОИСКА ПОДСТРОКИ str.includes
str.includes(substr, pos)
//Более современный метод, возвращает true, если в строке str есть подстрока substr, либо false, если нет.

//Нам нужно вывести только те товары, в названиях которых присутствует 'молоко':

const products = ['Хлеб Бородинский', 'Молоко Молочник', 'Коровка Молоко', 'Груша Конференция'];
const search = 'молоко';

products.forEach((product) => {
    // проходимся по массиву products и проверяем каждый элемент на наличие 
    // подстроки 'молоко', не забыв привести элемент и искомую подстроку
    // к одному регистру
    if (product.toLowerCase().includes(search.toLowerCase())) {
        console.log(product);
    }
});
// в результате будет выведено 'Молоко Молочник', 'Коровка Молоко'

// ЕЩЁ МЕТОДЫ ПОИСКА
//Это методы, которые проверяют, какой подстрокой начинается и заканчивается строка
//соответственно.
str.startsWith и str.endsWith

const products = ['Хлеб Бородинский', 'Молоко Молочник', 'Коровка Молоко', 'Груша Конференция'];
const search = 'молоко';

products.forEach((product) => {
    // проходимся по массиву products и проверяем каждый элемент на наличие 
    // подстроки 'молоко' в начале названия, не забыв привести элемент и
    // искомую подстроку к одному регистру
    if (product.toLowerCase().startsWith(search.toLowerCase())) {
        console.log(product);
    }
});
// в результате будет выведено 'Молоко Молочник'

//ПОИСК СЛОВ - ПАЛИНДРОМОВ (читаются в обе стороны одинково)
function palindrom(word) {
    return word.toUpperCase() === word.toUpperCase().split('').reverse().join('');
}

palindrom('мим'); // true
palindrom('мак'); // false
palindrom('заказ'); // true

/*
Здесь мы создаем функцию palindrom, в которой переворачиваем слово word и 
сравниваем его с первоначальным значением. У строк нет метода, который позволял бы развернуть строку, 
а вот массив позволяет развернуть свои элементы в обратном порядке с помощью метода reverse() 
Поэтому мы сначала приводим строку к массиву, используя split, разворачиваем массив, используя reverse, 
и обратно массив преобразуем к строке — метод join.
*/

//ОБЪЕКТ MATH И ЕГО МЕТОДЫ

//выведет рандомное число
Math.random();

//округление в диапазоне до десяти
Math.round(Math.random() * 10);

//Случайное число 0 - 10 с округлением
function getRandomInt(minValue, maxValue) {
    return Math.round(Math.random() * maxValue);
}
console.log(getRandomInt(0, 10))

//Случайное число от 5 до 10 с округлением
function getRandomInt(minValue, maxValue) {
    return Math.round(Math.random() * (maxValue - minValue)) + minValue;
}
console.log(getRandomInt(5, 10));

//РАБОТА С ДАТОЙ

//ПЕРВЫЙ способ заключается в использовании 
//пустого конструктора без параметров:
//В этом случае объект будет указывать на текущую дату компьютера.

let currentDate = new Date();
console.log(currentDate);

//ВТОРОЙ способ заключается в передаче в конструктор 
//Date количества миллисекунд, которые прошли с начала 
//эпохи Unix, то есть с 1 января 1970 года 00:00:00 GMT.

let myDate = new Date(1674220924819);
console.log(myDate);
//Fri Jan 20 2023 16:22:04 GMT+03:00 (Москва, стандартное время)

let myDate = new Date(); // получаем текущую дату
console.log(+myDate); // 1674177444332, + преобразует дату в миллисекунды
// теперь нам нужно узнать, какая дата была, к примеру, 20 дней назад
let days20 = 20 * 24 * 60 * 60 * 1000; // переводим дни в миллисекунды
// 20 дней * 24 часа * 60 минут * 60 секунд * 1000 миллисекунд = 1 728 000 000 миллисек
let searchDate = myDate - days20; // получаем колличество миллисекунд, текущая дата — 20 дней
let daysAgo20 = new Date(searchDate); // дата 20 дней назад
console.log(daysAgo20); // Sat Dec 31 2022 04:17:24 GMT+03:00 (Москва, стандартное время)

//ТРЕТИЙ способ состоит в передаче в конструктор Date дня, месяца и года:
let myDate = new Date("27 March 2021");
// или так
let myDate = new Date("3/27/2021");

console.log(myDate);
// Sat Mar 27 2021 00:00:00 GMT+03:00 (Москва, стандартное время)

//ЧЕТВЕРТЫЙ способ состоит в передаче в конструктор Date всех параметров даты и времени:
let myDate = new Date(2025, 5, 25, 12, 30, 20, 10);
// Wed Jun 25 2025 12:30:20 GMT+03:00 (Москва, стандартное время)

/* 
В данном случае используются по порядку следующие параметры: 
new Date(год, месяц, число, час, минуты, секунды, миллисекунды). 
При этом надо учитывать, что отсчет месяцев начинается с нуля, 
то есть январь — 0, а декабрь — 11. 
*/

//ПОЛУЧЕНИЕ ДАТЫ И ВРЕМЕНИ:
//Для получения различных компонентов даты применяется ряд методов:
getDate()
//возвращает день месяца.
getDay()
//возвращает день недели. Отсчет начинается с 0 — воскресенье, и последний день — 6 — суббота.
getMonth()
//возвращает номер месяца. Отсчет начинается с нуля, то есть месяц с номером 0 — январь.
getFullYear()
//возвращает год.
toDateString()
//возвращает полную дату в виде строки.
getHours()
//возвращает час (от 0 до 23).
getMinutes()
//возвращает минуты (от 0 до 59).
getSeconds()
//возвращает секунды (от 0 до 59).
getMilliseconds()
//возвращает миллисекунды (от 0 до 999).
toTimeString()
//возвращает полное время в виде строки.

// Для примера давайте выведем дату в формате: 
// Сегодня: 
// <текущее число> <текущий месяц на русском> <текущий год>, <текущий день недели>;
//Для начала создадим массив, в который занесем все дни недели на русском
//Помним, что отсчет в JS начинается с воскресенья - 0

const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
// создадим массив, где будем хранить названия месяцев на русском
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

let myDate = new Date(); // здесь мы получаем текущую дату
let fullDate = "Сегодня: " + myDate.getDate() + // getDate возвращает число
    " " + months[myDate.getMonth()] + // getMonth возвращает номер месяца, который мы можем использовать в качестве индекса для массива months
    " " + myDate.getFullYear() + // getFullYear возвращает год
    ", " + days[myDate.getDay()]; // getDay возвращает номер дня недели, который мы используем в качестве индекса для массива days

console.log(fullDate); // Сегодня: 1 Февраль 2023, Среда


/*
Как видно из примера выше, значения дней недели и месяцев хранятся в массивах. 
Соответственно, по индексу элемента в массиве можно получить нужный день недели с помощью 
метода myDate.getDay() и нужный день месяца с помощью myDate.getMonth().
Теперь посмотрим на пример, в котором определим текущее время.
Представим, что у себя на сайте мы хотим выводить пользователю приветствие в зависимости 
от времени суток и показывать текущее время: 
*/

let welcome; // переменная, в которой будем хранить наше приветствие
let myDate = new Date(); // получаем текущую дату
let hour = myDate.getHours(); // получаем час из нашей даты
let minute = myDate.getMinutes(); // получаем минуты
let second = myDate.getSeconds(); // получаем секунды

// если минуты и секунды у нас будут меньше 10, то в результате формат времени
// будет не очень красивым — 12:1:34 или 3:1:6
// намного приятнее следующие записи: 12:01:34 или 3:01:06
// чтобы добиться формата, как в последних примерах, будем осуществлять
// проверку на < 10
if (minute < 10) { // если минут будет меньше 10,
    minute = "0" + minute; // то перед ними поставим 0
}
if (second < 10) { // если секунд будет меньше 10,
    second = "0" + second; // то перед ними поставим 0
}

// здесь мы проверяем, который час, и в зависимости от этого в переменную welcome
// сохраняем приветствие, зависящее от времени суток
if (hour < 12) {
    welcome = "Доброе утро";
} else if (hour < 17) {
    welcome = "Добрый день";
} else {
    welcome = "Добрый вечер";
}

console.log(welcome + ", текущее время: " + hour + ":" + minute + ":" + second);
// Доброе утро, текущее время: 4:37:21


// УСТАНОВКА ДАТЫ И ВРЕМЕНИ
/* 
Помимо вышеперечисленных методов по работе с объектом Date, 
которые помогают узнать значение переменной, есть методы, с помощью которых 
это значение можно задать:
*/

setDate()
//устанавливает дату.
setMonth()
//устанавливает месяц. Отсчет начинается с нуля, то есть месяц с номером 0 — январь.
setFullYear()
//устанавливает год.
setHours()
//устанавливает час.
setMinutes()
//устанавливает минуты.
setSeconds()
//устанавливает секунды.
setMilliseconds()
//устанавливает миллисекунды.


/*
Теперь рассмотрим пример, в котором установим дату, вывод в формате 
<число> <месяц на русском> <год>, <день недели></день>
*/

// для начала создадим массив, в который занесем все дни недели на русском
// помним, что отсчет в JS начинается с воскресенья — 0
const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
// создадим массив, где будем хранить названия месяцев на русском
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

let myDate = new Date(); // в текущей точке программы мы создали переменную, 
// которая хранит текущую дату
// Fri Jan 20 2023 16:22:04 GMT+0300 (Москва, стандартное время)
myDate.setDate(15); // здесь мы меняем только число у нашей даты,
// автоматически меняется день недели
// Sun Jan 15 2023 16:22:04 GMT+0300 (Москва, стандартное время)
myDate.setMonth(6); // здесь меняется только месяц,
// автоматически меняется день недели
// Sat Jul 20 2023 16:22:04 GMT+0300 (Москва, стандартное время)
myDate.setYear(2020); // здесь меняется только год,
// автоматически меняется день недели
// Wed Jul 20 2020 16:22:04 GMT+0300 (Москва, стандартное время)


// здесь происходит всё то же, что и в коде выше, когда мы выводили
// дату для текущего дня с названиями дней недели и месяцев на русском
let fullDate = myDate.getDate() + " " + months[myDate.getMonth()] +
    " " + myDate.getFullYear() + ", " + days[myDate.getDay()];

console.log(fullDate); // 15 Июль 2020, Понедельник

/*
При установке значений мы можем передать величину, бОльшую, чем максимальное 
допустимое значение. Например, установить для часа число 54:
*/
let myDate = new Date("3/27/2021");
console.log(myDate);
//Sat Mar 27 2021 00:00:00 GMT+03:00 (Москва, стандартное время)

myDate.setHours(54);
console.log(myDate);
//Mon Mar 29 2021 06:00:00 GMT+03:00 (Москва, стандартное время)


// ФОРМАТИРОВАНИЕ ОБЪЕКТА DATE В JS

// Чтобы получить название дня/недели/месяца/года, существует встроенный метод JavaScript toLocaleDateString(), 
// где первым аргументом мы передаем locales (признак языка), а вторым формат отображения:
const currentDate = new Date()
currentDate.toLocaleDateString('ru-RU', {weekday: 'long'})

// Мы можем создать объект с параметрами формата отображения недели, года, месяца, дня:
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

// Теперь передадим его вторым аргументом в toLocaleDateString():
const currentDate = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
currentDate.toLocaleDateString('ru-RU', options);

// При работе со временем в JavaScript нам поможет метод toLocateTimeString():
let currentDate = new Date();
currentDate.toLocaleTimeString('ru-RU')


// РЕГУЛЯРНЫЕ ВЫРАЖЕНИЯ

/* Регулярное выражение (оно же «регэксп», «регулярка» или просто «рег»), 
состоит из шаблона (также говорят «паттерн») и необязательных флагов.
Существует два синтаксиса для создания регулярного выражения. */

//Длинный» синтаксис:

regexp = new RegExp("шаблон", "флаги");
//Короткий синтаксис, использующий слеши "/":

regexp = /шаблон/; // без флагов
regexp = /шаблон/gmi; // с флагами gmi (будут описаны далее)

/*
Слеши /.../ говорят JavaScript о том, что это регулярное выражение. 
Они играют здесь ту же роль, что и кавычки для обозначения строк. слеши /.../ не 
допускают никаких вставок переменных (наподобие возможных в строках через ${...}). 
Они полностью статичны.
*/

//Флаги (6 шт igmsuy)
i //с этим флагом поиск не зависит от регистра.
g //возвращает массив с результатами поиска. С этим флагом поиск ищет все совпадения, без него – только первое.
m /* Могострочный режим, Он влияет только на поведение ^ и $.
Они означают не только начало/конец текста, но и начало/конец каждой строки в тексте. */
s //включает режим «dotall», при котором точка . может соответствовать символу перевода строки \n
u //включает полную поддержку Юникода. Флаг разрешает корректную обработку суррогатных пар
y //режим поиска на конкретной позиции в тексте


// Пример:
/*
Пользователь вводит через prompt()свое имя. 
Мы хотим, чтобы пользователь ввел только буквы, причем кириллические. 
Если пользователь вводит отличные от кириллических букв символы, то необходимо 
вывести сообщение пользователю через alert(): «Введены некорректные символы». 
Если пользователь ввел всё верно, то вывести следующее сообщение: «Ваше имя сохранено».
*/

let regexp = /^[а-яА-Я]*$/; // что означает эта запись, мы разберем чуть ниже
let name = prompt('Введите ваше имя. Используйте только кириллические символы');

if (regexp.test(name)) {
	alert('Ваше имя сохранено');
} else {
	alert('Введены некорректные символы');
}
/*
В данном примере метод test возвратит нам true, если будут введены только кириллические символы, 
и false, если хотя бы один символ будет не кириллическим. А new RegExp используется в том случае, 
когда мы хотим создать регулярное выражение сразу, из динамически сгенерированной строки. Например, 
у нас есть массив с размеченным на заголовки и пункты текстом. Мы хотим, чтобы пользователь мог выбрать, 
какую информацию ему показать о заголовках или пунктах:
*/

const arrText = [
    'Пункт1. Описание пункта',
    'Заголовок1. Описание',
    'Пункт2. Описание пункта',
    'Заголовок2. Описание',
]; // массив с размеченным текстом

let title = prompt('Вы хотите прочитать заголовки или пункты?'); // ожидаем
// ввод пользователя 'Заголовок' или ' Пункт'

let regexp = `/${title}/`; // если попыться создать регулярное выражение через /.../
//и передать title, то в этом случае получим обычную строку
console.log(regexp);
let regexp = /`${title}`/; // в этом случае получим регулярное выражение, но
//оно будет выглядеть как /`${title}`/, т. е. значение title не передастся

let regexp = new RegExp(`${title}`); // используя такую запись создания регулярного
// выражения, мы получим то, что хотим. Например, при вводе 'Пункт' мы получим регулярное
// выражение /Пункт/

arrText.forEach((el) => {
    if (regexp.test(el)) { // если есть совпадения с регулярным выражением,
        console.log(el);  // то выводим этот элемент
    }
});

//Пришло время разобраться, что означают разные символы в RegExp, и начнем с нашего примера 
/^[а-яА-Я]*$/:
// здесь мы сообщаем JS, что первый и последний символы должны быть а-яА-Я, но т. к. у нас стоит *,
// то следующий символ, идущий за первым, должен соответствовать шаблону, следующий — второму, и т. д. 
// При этом мы говорим, что и последний символ должен соответствовать шаблону. Также благодаря * строка 
// может быть пустой. Это нам необходимо, когда поле является необязательным, но если пользователь его 
// заполняет, то необходимо следовать определенным правилам.


/…/ //прямой слеш в начале и в конце говорят JS, что это объект RegExp;
^ //означает, что начало строки должно начинаться с символа, идущего после ^. 
// Например:
let regexp = /^П/;
regexp.test('Пирог'); // true, т. к. строка начинается на 'П'
regexp.test('Вкусный Пирог'); // false, т. к. строка начинается на 'В'
regexp.test('пирон'); // false, т. к. строка начинается на 'п', регистр важен
regexp.test('Пирон'); // true, т. к. строка начинается на 'П'

//[] — набор символов, перечисление (символ строки должен совпадать хотя бы с одним из вариантов).
// Например:
let regexp = /[abc]/; // в строке должен содержаться хотя бы один из символов: a, b или c
regexp.test('button'); // true, т. к. button содержит b
regexp.test('word'); // false, т. к. word не содержит ни a, ни b, ни c
regexp.test('cat'); // true, т. к. cat содержит и c, и a
regexp.test('read'); // true, т. к. read содержит a

а-яА-Я // диапазон букв;
а-я //это все строчные буквы кириллицы;
А-Я //все заглавные буквы кириллицы;
A-Z //все заглавные буквы латиницы.
$ //означает, что строка должна заканчиваться символом, стоящим перед $
//Например:

// * — ноль или более предшествующих символов (квантификатор); 
// это означает, что символ, стоящий перед *, может повторяться 0 или более раз. 
// Пример:
let regexp = /[A-Z]*/;
regexp.test('выражение'); // true
regexp.test('word'); // true
regexp.test('Read'); // true
// В примере выше везде true, почему? Т. к. выражение выше говорит, 
// что символы A–Z должны встретиться 0 или более раз: 
// в первых 2 строках символы A–Z встречаются 0 раз, а в 3-й встречается 1 раз

// Если мы хотим, чтобы регулярное выражение выполняло проверку на то, что есть 
// хотя бы один символ, то нам стоит воспользоваться + 
// + – один или более предшествующий символ, т.е. символ, находящийся перед + (квантификатор).
let regexp = /^[а-яА-Я]+$/;
regexp.test(''); // false, т. к. пустая строка, должен быть хотя бы один кириллический символ
regexp.test('Abc'); // false, т. к. встречаются некириллические символы
regexp.test('АбвAbc'); // false, т. к. встречаются некириллические символы
regexp.test('Абв'); // true, т. к. содержит только кириллические символы

// Теперь давайте рассмотрим еще несколько часто встречающихся символов в регулярных выражениях:
{n} // — точно n вхождений предшествующего символа, т. е. символ внутри {} должен повторяться
// n раз. Например, почтовый индекс (для России) состоит из 6 цифр. 
// Напишем регулярное выражение, которое будет это проверять:
let regexp = /[0-9]{6}/;
regexp.test('987985'); // true, т. к. 6 цифр подряд
regexp.test('98798'); // false, здесь всего 5 цифр
regexp.test('987asd234'); // false, 6 цифр, но не подряд
regexp.test('983217asd'); // true, 6 цифр подряд
// [0-9] можно заменить на \d — соответствие любому цифровому символу.
let regexp = /\d{6}/;
regexp.test('987985'); // true, т. к. 6 цифр подряд
regexp.test('98798'); // false, здесь всего 5 цифр
regexp.test('987asd234'); // false, 6 цифр, но не подряд
regexp.test('983217asd'); // true, 6 цифр подряд


