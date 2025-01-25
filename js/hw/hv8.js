// 1. Напиши скрипт, який об'єднує всі елементи массива в один рядок.
// Елементів може бути довільна кількість.
// Нехай елементи массива в рядку будут розділені комою.




// const array1 = ['apple', 'John', 'Trump'];


// let result = "";


// for (let i = 0; i < array1.length; i++) {
//     result += array[i];

//     if (i < array1.length - 1) {
//         result += ", ";
//     }
// }

// console.log(result);




// const array = ["kaka" , "gvsrjk" , "qwe"]



// const newArray = array.join(",")
// console.log(newArray);



// 2. Працюємо з колекцією карток в trello. Метод splice()
// (можна використати інші методи)


const cards = ["card-1" , "card-2" , "card-3" , "card-4" , "card-5"]



const cardToRemove = cards.splice(2 , 1)

const cardToInsert = cards.push("card-6")

const cardToUpdate = cards.splice(2 , 1 , "Card-4")

console.log(cards);