// 1
// Cтворити масив Arr1 за значеннями: 1, 5, "4", "hello" ;
//  і Arr2 зі значеннями: true,2, {}, ["a"], 222 . 
//  Вивести в консоль 2-гий елемент (по індексу) кожного з масивів 
//  довжину масиву.

// const Arr1 = ['1, 5, "4", "hello"']
// const Arr2 =[ 'true,2, {}, ["a"], 222 ']
// console.log(Arr1[1]), Arr2[1], arr1.lenght, arr2.lenght ;


// 1
// const Arr1 = [1, 5, "4", "hello"];
// Через індекс елемента додати в кінець масиву Arr1 
// новий елемент зі значенням: 22. 
// Вивести значення кожного елемента масиву Arr1 в консоль.

// const arr1 = ['1, 5, "4", "hello"']
// arr1[4] = 22
// console.log(arr1);


//  2
// Створіть масив рядків. 
const fruits = ["apple", "plum", "pear", "orange"];
// Виведіть в консоль значення першого, 
// другого та останнього елементу. 
// Змініть значення останнього елементу на "peach"
// а другого на "banana".

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[fruits.length-1]);
fruits[fruits.length -1] =  "peach";
fruits[1] = "banana";
console.log(fruits);
