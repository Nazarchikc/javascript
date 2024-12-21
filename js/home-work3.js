
const result = 5 + 5 + '5';
alert(`Результат: ${result}`); 
alert(`Тип змінної result: ${typeof result}`); 


const email = "your_email@example.com";
const hasAtSymbol = email.includes("@");
alert(`Чи містить @: ${hasAtSymbol}`); 
alert(`Загальна кількість символів: ${email.length}`); 


const word1 = "My";
const word2 = "name";
const word3 = "is";
let fullName = `${word1} ${word2} ${word3}`;
fullName += " Viktor";
alert(`Повне ім'я: ${fullName}`); 


const userName = "Олександро";
const payment = 300;
alert(`Дякуємо, ${userName}! До сплати ${payment} гривень`);