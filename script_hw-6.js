/* */


//Задание 1
const arr = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);

  if (arr[i] === 10) {
    console.log(`Число 10 найдено в массиве с индексом ${i}`);
    break; 
  }
}


//Задание 2
const arr = [1, 5, 4, 10, 0, 3];
const index = arr.indexOf(4);

if (index !== -1) {
  console.log(`Цифра 4 найдена в массиве на позиции ${index}`);
}


//Задание 3
const numbers = [1, 3, 5, 10, 20];
const space = numbers.join(' ');
console.log(space);


//Задание 4
const demoArray = [];
const innerArray = Array(3).fill(1);

for (let i = 0; i < 3; i++) {
  demoArray.push(innerArray);
}


//Задание 5
const arr = [1, 1, 1]
arr.push (2, 2, 2)
console.log(arr);


//Задание 6
const arr = [9, 8, 7, 'a', 6, 5];
const result = arr.filter((it) => !isNaN(it));
console.log(result);


//Задание 7
const numbers = [9, 8, 7, 6, 5];
const userInput = prompt('Угадайте число:');

let bingo = false;

for (let i = 0; i < numbers.length; i++) {
  if (Number(userInput) === numbers[i]) {
    bingo = true;
    break;
  }
}

if (bingo) {
  alert('Угадал');
} else {
  alert('Не угадал');
}


//Задание 8
const str = 'abcdef';
const reversed = str.split('').reverse().join('');
console.log(reversed);


//Задание 9
const arr = [[1, 2, 3],[4, 5, 6]];
const flatted = arr.flat();
console.log(flatted);


//Задание 10 (не смог собрать сам) 
const arr = [1, 5, 3, 8, 2, 7, 4, 9, 6, 10];

for (let i in arr) {
  if (i < arr.length - 1) {
    const currentElement = arr[i];
    const nextElement = arr[parseInt(i) + 1];
    const sum = currentElement + nextElement;
    console.log(`Сумма ${currentElement} и ${nextElement} равна ${sum}`);
  }
}


//Задание 11
function squareDigits(arr) {
    const squaredArr = arr.map(num => num ** 2);
    return squaredArr;
  }
    const numbers = [1, 2, 3, 4, 5];
  const squaredNumbers = squareDigits(numbers);
console.log(squaredNumbers);


//Задание 12
function getLengthWords(arr) {
    return arr.map(function(word) {
      return word.length;
    });
  }
  
  const words = ['слово', '', 'слог', 'длинное предложение', 'буква'];
  const wordLengths = getLengthWords(words);
console.log(wordLengths);


//Задание 13
function filterPositive(array) {
    return array.filter(function(num) {
      return num < 0;
    });
  }
  
console.log(filterPositive([-1, 0, 5, -10, 56]));
console.log(filterPositive([-25, 25, 0, -1000, -2]));


 