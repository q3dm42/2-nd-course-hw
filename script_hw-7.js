/*2.7 Встроенные объекты */


//Задание 1
let str = 'js';
str = str.toUpperCase();
alert(str);

//Задание 2
function searchStart(array, searchStr) {
    const regex = new RegExp(`^${searchStr}`, 'i');

    return array.filter(item => regex.test(item));
}

const arrayResult1 = searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко');
const arrayResult2 = searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру');
const arrayResult3 = searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино');
console.log(arrayResult1);
console.log(arrayResult2);
console.log(arrayResult3);

//Задание 3
const number = 32.58884;

let roundDown = Math.floor(number);
let roundUp = Math.ceil(number);
let roundNext = Math.round(number);

console.log('До меньшего целого:', roundDown);
console.log('До большего целого:', roundUp);
console.log('До ближайшего целого:', roundNext);

//Задание 4
const numbers = [52, 53, 49, 77, 21, 32];

let minNumber = Math.min(...numbers);
let maxNumber = Math.max(...numbers);

console.log('Наименьшее число:', minNumber);
console.log('Наибольшее число:', maxNumber);

//Задание 5
function getRandomInt(minValue, maxValue) {
    return Math.round(Math.random() * maxValue);
}
console.log(getRandomInt(0, 10))

//Задание 6
function getRandomArrNumbers(maxNumber) {
    const arrayLength = Math.floor(maxNumber / 2);
    const result = [];
  
    for (let i = 0; i < arrayLength; i++) {
      const randomNumber = Math.floor(Math.random() * (maxNumber + 1));
      result.push(randomNumber);
    }
  
    return result;
}
console.log(getRandomArrNumbers(7));
console.log(getRandomArrNumbers(12));

//Задание 7
function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const randomNum = getRandomInRange(5, 15);

console.log(randomNum); 

//Задание 8
let currentDate = new Date();
console.log(currentDate);

//Задание 9
let actualDate = new Date();

let extraDays = 73;
let futureDate = new Date(actualDate);
futureDate.setDate(actualDate.getDate() + extraDays);

console.log("Текущая дата:", actualDate.toDateString());
console.log(`Дата через ${extraDays} дней:`, futureDate.toDateString());

//Задание 10
function formatDateAndTime(date) {
    const monthsRussian = [
      "января", "февраля", "марта", "апреля", "мая", "июня",
      "июля", "августа", "сентября", "октября", "ноября", "декабря"
    ];
    const daysOfWeekRussian = [
      "воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"
    ];
  
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const dayOfWeek = date.getDay();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
  
    const formattedDate = `Дата: ${day} ${monthsRussian[month]} ${year} - это ${daysOfWeekRussian[dayOfWeek]}.`;
    const formattedTime = `Время: ${hours}:${minutes}:${seconds}`;
  
    return `${formattedDate}\n${formattedTime}`;
  }
  
  const currentDate = new Date();
  const formattedDateTime = formatDateAndTime(currentDate);
console.log(formattedDateTime);