// 1

// min - ціле число, з якого починаються обчислення
// max - ціле число, до якого включно триватимуть обчислення
// Доповни код таким чином, щоб повертати масив усіх цілих чисел
//  від значення min до max включно.

// (1, 3) повертає [1, 2, 3]
// (14, 17) повертає [14, 15, 16, 17]
// В циклі for використовуй метод push

const min = 10;
const max = 15;

let array = [];

// for(let i = min; i <= max; i += 1) {
//     console.log(i);
//     array.push(i)
// }


// console.log(array);
// 2

// Знайти спільні елементи. 
// Спільними елементами  - які присутні у всіх масивах.
// Наприклад, 
// у двох масивах [1, 3, 5] і [0, 8, 5, 3] спільними будуть числа 3 і 5, 

// 1. створи змінні array1 та array2
// 2. Створи порожній масив для зберігання нового масиву.
// 3. Використай цикл for для ітерації кожного елемента у array1.
// У тілі циклу перевір, чи поточний елемент існує у array2 
// за допомогою методу includes.
// Якщо він існує, то додай елемент до нового масиву.
// [1, 2,
const array1 = [24, 12, 27, 3];
const array2 = [12, 8, 3, 36, 27];

const newArray = [];

for( let i = 0; i < array1.length; i += 1) {
    // console.log(array1[i]);
    // console.log(array2.includes(array1[i]));
    if (array2.includes(array1[i])) {
        newArray.push(array1[i])
    }
}


console.log(newArray);



// const numbers = [0, 1, 2, 3, 4];

// numbers.push(5);

// // console.log(numbers.push(5));
// console.log(numbers);