// Задание 1
for (let i = 0; i < 2; i++) {
    console.log('Привет');
}

// Задание 2
for (let i = 1; i < 6; i++) {
    console.log(i);
}

// Задание 3
for (let i = 7; i <= 22; i++) {
    console.log(i);
}

// Задание 4
const worker = {
    'Коля': '200',
    'Вася': '300',
    'Петя': '400'
};
for (let key in worker) {
    console.log(`${key} — зарплата ${worker[key]} долларов.`);
}

// // Задание 5
let n = 1000;
let num = 0;

while (n >= 50) {
    n = n / 2;
    num++;
}
console.log(n + ' получится');
console.log(num + ' итераций');

// Задание 6
let Friday = 2;

for (let day = Friday; day <= 31; day += 7) {
    console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`);
}
