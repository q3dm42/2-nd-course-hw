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


//Задание 5
const a = prompt('Введите число a:');
const b = prompt('Введите число b:');

const checkNum = (a, b) => {
  if (isNaN(a) || isNaN(b)) {
    console.log('Одно из введенных значений не является числом');
  } else {
    const sum = Number(a) + Number(b);
    console.log(`Сумма чисел a и b равна: ${sum}`);
  }
}

checkNum(a, b);


//Задание 6
function calcCube(number) {
    const cube = number ** 3;
    return cube;
}

function calculateCube() {
    const askUser = prompt('Введите число:');
    const number = Number(askUser);

    if (!isNaN(number)) {
        const result = `${number} в кубе равняется ${calcCube(number)}`;
        console.log(result);
    } else {
        console.log('Введено некорректное значение, введите число');
    }
}
calculateCube();


//Задание 7
// НЕ СМОГ СДЕЛАТЬ!!! - ВСЁ СПИСАЛ, МасПИ даже не знаю что это..((
const circle1 = {
    radius: 5,
    getArea: function () {
        return Math.PI * this.radius * this.radius;
    },
    getPerimeter: function () {
        return 2 * Math.PI * this.radius;
    }
};

const circle2 = {
    radius: 8,
    getArea: function () {
        return Math.PI * this.radius * this.radius;
    },
    getPerimeter: function () {
        return 2 * Math.PI * this.radius;
    }
};

console.log("Площадь circle1:", circle1.getArea());
console.log("Периметр circle1:", circle1.getPerimeter());

console.log("Площадь circle2:", circle2.getArea());
console.log("Периметр circle2:", circle2.getPerimeter());
*/




// function seasonButton() {
//     const monthNumber = prompt("Введите номер месяца (от 1 до 12):");
//     const season = getSeason(parseInt(monthNumber));

//     alert (season);
// }

// const button = document.getElementById("seasons");
// button.addEventListener("click", seasonButton);

// function getSeason(monthNumber) {
//     if (monthNumber >= 1 && monthNumber <= 12) {
//       switch (monthNumber) {
//         case 12:
//         case 1:
//         case 2:
//           return "Зима";
//         case 3:
//         case 4:
//         case 5:
//           return "Весна";
//         case 6:
//         case 7:
//         case 8:
//           return "Лето";
//         case 9:
//         case 10:
//         case 11:
//           return "Осень";
//       }
//     }
    
//     return "Неправильный номер месяца";
//   }


const button = document.getElementById("seasons");
button.addEventListener("click", seasonButton);

function seasonButton() {
    const monthNumber = prompt("Введите номер месяца (от 1 до 12):");
    const season = getSeason(parseInt(monthNumber));

    alert (season);
}

function getSeason(monthNumber) {
    if (monthNumber >= 1 && monthNumber <= 12) {
      switch (monthNumber) {
        case 12:
        case 1:
        case 2:
          return "Зима";
        case 3:
        case 4:
        case 5:
          return "Весна";
        case 6:
        case 7:
        case 8:
          return "Лето";
        case 9:
        case 10:
        case 11:
          return "Осень";
      }
    }
    return "Такого месяца не существует";
  }