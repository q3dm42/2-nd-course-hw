/*

// Задание 1
function smallerThan(a, b) {
    return a < b ? a : b;
}
console.log (smallerThan(4, 8));


//Задание 
function checkNumber() {
    while (true) {
      const askUser = prompt('Введите число:');
      const number = Number(askUser);
      
      if (!isNaN(number)) {
        return (number % 2 === 0) ? 'Число четное' : 'Число нечетное';
      }
    }
  };
  
  const result = checkNumber();
console.log(result);


// Задание 3
function calcSquare(number) {
    const square = number * number;
    return square;
  }
  
  const askUser = prompt('Введите число:');
  const number = Number(askUser);
  
  const result = (!isNaN(number)) ? calcSquare(number) : 'Введено некорректное значение, введите число';
  
console.log(result);


//Задание 4
 let age = prompt('Сколько тебе лет?', 12);
 if (isNaN(age) || age < 0) {
     message = 'Вы ввели неправильное значение';
 } else if (age <= 13) {
     message = 'Привет, друг!';
 } else if (age < 100) {
     message = 'Добро пожаловать!';
 } else {
     message = 'Какой необычный возраст';
 }
 
alert(message);

*/



