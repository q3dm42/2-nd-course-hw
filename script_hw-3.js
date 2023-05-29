// Задание 1
let password = 'пароль';
let enterPassword = prompt('Введите пароль:');

if (enterPassword === password) {
    alert('Пароль введен верно');
} else {
    alert('Пароль введен неправильно');
}

// Задание 2
let c = prompt ('Введите число');

if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно')
};

// Задание 3
let d = 10;
let e = 114;

if (d > 100 || e > 100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

// Задание 4
let a = '2';
let b = '3';

let num1 = parseInt(a);
let num2 = parseInt(b);
alert (num1 + num2);

// Задание 5
let monthNumber = prompt('Введите номер месяца, сезон которого хотите узнать');
switch (monthNumber) {
    case '1':
    case '01':
        console.log('Январь - второй месяц зимы');
        break;

    case '2':
    case '02':
        console.log('Февраль - третий месяц зимы');
        break;

    case '3':
    case '03':
        console.log('Март - первый месяц весны');
        break;

    case '4':
    case '04':
        console.log('Апрель - второй месяц весны');
        break;

    case '5':
    case '05':
        console.log('Май - третий месяц весны');
        break;

    case '6':
    case '06':
        console.log('Июнь - первый месяц лета');
        break;

    case '7':
    case '07':
        console.log('Июль - второй месяц лета');
        break;

    case '8':
    case '08':
        console.log('Август - третий месяц лета');
        break;

    case '9':
    case '09':
        console.log('Сентябрь - первый месяц осени');
        break;

    case '10':
    case '10':
        console.log('Окнтябрь - второй месяц осени');
        break;
    case '11':
    case '11':
        console.log('Ноябрь - третий месяц осени');
        break;

    case '12':
    case '12':
        console.log('Декабрь - первый месяц зимы');
        break;

    default: '< 12'
        console.log('Такого месяца не существует');

        break;
}

// Задание 6
// Адаптивная вёрстка

// Задание 7
let number = prompt('Пожалуйста, введите любое число');

if (isNaN(number)) {
  alert('Вы ввели некорректное число');

} else {
  if (number % 2 === 0) {
    alert("Число четное");
  } else {
    alert("Число нечетное");
  }
}

// Задание 8
let clientOS = confirm ('Вы используете iOS?')

if (clientOS === true) {
    console.log('«Установите версию приложения для iOS по ссылке»');
} else {
    console.log('«Установите версию приложения для Android по ссылке»');

}