// Створити масив з трьох чисел. Змінити значення другого елемента масиву на 10.

const array = [52 , 52 , 48];
array[1] = 10;
console.log(array);


// Створити масив із трьох рядків. Додати до масиву ще одну рядків.

const array2 = ["Mickey" , "kaka" , "oioioi"];

array2[3] = "red";

console.log(array2);



// Створити скрипт який поверне суму всіх чисел в масиві.


const numbers = [65, 8, 156, 129, 719];
let sum = 0;

for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
}

console.log("Сума чисел у масиві: " + sum);




// Створити масив з 5-ти чисел. Вивести на екран всі елементи масиву за допомогою циклу for.

const exampleNumbers = [10, 20, 30, 40, 50];

for (let i = 0; i < exampleNumbers.length; i += 1) {
    console.log(exampleNumbers[i]);
}


// Створити масив із 5-ти рядків. Вивести на екран кожен рядокз масиву, який містить більше 5-ти символів.

const strings = ["kaka" , "mangogo" , "Trump" , "Trumpling" , "USA"];

for (let i = 0; i < strings.length; i += 1) {
    if (strings[i].length >= 5) {
        console.log(strings[i]);
    }
}


// Створити масив з 10-ти чисел. Знайти та вивести на екран максимальне значення з масиву.

const numberssss = [15, 46, 78, 4, 3, 1502, 654498, 52, 10, 1939];

let max = numberssss[0]; // Ініціалізуємо максимальне значення першим елементом

for (let i = 1; i < numberssss.length; i++) {
    if (numberssss[i] > max) {
        max = numberssss[i];
    }
}

console.log(max);

// Створити масив з 10-ти чисел. Знайти всі парні числа в масиві та вивести їх на екран.



const examplas = [15, 46, 78, 4, 3, 1502, 654498, 52, 10, 1939];



for (let i = 0; i < examplas.length; i += 1) {
    if (examplas[i] % 2 === 0) {
        console.log(examplas[i]);
    }
}