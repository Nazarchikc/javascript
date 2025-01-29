// 1
// Напиши функцію logItems(items) для перебору і логування масиву
// const logItems = function (items) {
//     console.log(items);
    
//     for (const item of items) {
//       console.log(item);
//     }
//   };
  //перевірь роботу функції викликами нижче
  // logItems(["Mango", "Kiwi", "Poly", "Ajax"]);
  // logItems([1, 2, 3, 4, 5]);



  // 2
// Напиши фунцію що приймає масив і рахує суму всіх чисел 

// const calculateTotal = function (arr) {
//     //змінна для зберігання результату
//     let result = 0;
//     // за доп for перебираємо масив та рахуємо тотал
//     for (const num of arr) {
//       console.log(num);
//       result += num;
//     }
//     // повертаємо результат роботи ф-ції
//     return result;
//   }

// const result1 = calculateTotal([2, 4, 6, 8]);
// console.log(result1);
















/*створи функцію calculateTax, щоб вона повертала суму податку - результат множення суми на податкову ставку.
що приймає два параметри:
amount - число, сума від якої потрібно обчислити податок. 
Обов'язковий параметр.
taxRate - число, податкова ставка. Необов'язковий параметр. 
За замовчуванням його значення має бути 0.2.*/

// Виклик функції calculateTax(100, 0.1) повертає 10
// Виклик функції calculateTax(200, 0.1) повертає 20
// Виклик функції calculateTax(100, 0.2) повертає 20



// const calculateTax = function ( amount, taxRate = 0.2){
//     const tax = amount * taxRate;
//     return tax;
// };

// console.log(calculateTax(100, 0.1));
// console.log(calculateTax(200, 0.1)); 
// console.log(calculateTax(100, 0.2)); 





// const checkStorage = function (products, item) {
//     const isIncluded = products.includes(item.toLowerCase());
//     console.log(isIncluded);
    // let mes;
    // if (isIncluded) {
    //   mes = `${item} is available to order!`;
    // } else {
    //   "Sorry! We are out of stock!";
    // }
    // return mes;
//     if (isIncluded) {
//       return `${item} is available to order!`;
//     }
//     return "Sorry! We are out of stock!";
//   }
  
//   const res = checkStorage(["apple", "plum", "pear"], "pLuM")
//   console.log(res);