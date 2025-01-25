let num = 0

while (num <= 10) {
    console.log(num);
    num += 1;
}

// 2. Вивести в консоль всі парні числа від 2 до 20 за допомогою циклу for.
// Якщо число парне, пропустити його за допомогою continue.

for (let i = 0; i <= 20; i += 1) {
    if (i % 2 === 1) {
        continue;
        
        
    }

    console.log(i);
}



// 3. Вивести в консоль таблицю множення числа 7 за допомогою циклу for.

for (let count = 0; count <= 70; count += 7) {
    console.log(count);
    
}


// 6. Створити скрипт, який виводить в консоль всі числа , які менші за n.
// Якщо зустрічається число, що більше або дорівнює n,
// цикл повинен бути закінчений за допомогою break.




for (let counter = 0; counter <= 267; counter += 1) {
    if (counter >= 267) {
        break;
    }

    console.log(counter);
    
}





// 7. За допомогою циклу while вивести в консоль всі числа від 1 до 20, крім чисел, кратних 3.
// Якщо зустрінете число, кратне 3, цикл повинен продовжити виконання за допомогою оператора continue.

let numeritto = 1; 

while (numeritto <= 20) { 
    if (numeritto % 3 === 0) { 
        numeritto++;
        continue;
    }
    console.log(numeritto);
    numeritto++;
}