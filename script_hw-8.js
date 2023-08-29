//Задание 1
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];

function sortByAge(person1, person2) {
    return person1.age - person2.age;
}

people.sort(sortByAge);

console.log(people);



//Задание 2
function isPositive(num) {
    return num > 0;
}

function isMale(person) {
    return person.gender === 'male';
}

function filter(array, ruleFunction) {
    const filteredArray = [];

    for (let item of array) {
        if (ruleFunction(item)) {
            filteredArray.push(item);
        }
    }

    return filteredArray;
}

console.log(filter([3, -4, 1, 9], isPositive));

const people = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
];

console.log(filter(people, isMale));



//Задание 3
let secondsPassed = 0;
const interval = 3000;
const totalDuration = 30000;

const intervalId = setInterval(() => {
    const currentDate = new Date();
    console.log(currentDate);

    secondsPassed += interval / 1000;

    if (secondsPassed >= totalDuration / 1000) {
        clearInterval(intervalId);
        console.log("30 секунд прошло");
    }
}, interval);

//Задание 4
function delayForSecond(callback) {
    setTimeout(callback, 1000);
}

delayForSecond(function () {
    console.log('Привет, Глеб!');
});

//Задание 5

function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if (cb) {
            cb();
        }
    }, 1000)
}

function sayHi(name) {
    return function () {
        console.log(`Привет, ${name}!`);
    };
}

delayForSecond(sayHi('Глеб'));



