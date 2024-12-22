
const daysInMonth = 30; 
const hoursInMonth = daysInMonth * 24;
const minutesInMonth = hoursInMonth * 60;
console.log(`Кількість годин у ${daysInMonth} днях: ${hoursInMonth}`);
console.log(`Кількість хвилин у ${daysInMonth} днях: ${minutesInMonth}`);


const initialHealth = 100; 
const initialEnergy = 75;  
const health = initialHealth - 20; 
const energy = initialEnergy - 15; 
console.log(`Рівень здоров'я: ${health}`);
console.log(`Рівень енергії: ${energy}`);


const floatString = "123.45";
const floatNumber = parseFloat(floatString);
console.log("Десяткове число:", floatNumber);


const totalPurchase = 500; 
const discountedPrice = totalPurchase * 0.9;
console.log(`Сума після застосування знижки 10%: ${discountedPrice}`);
const floattNumber = 123.456;
const roundedNumber = Math.floor(floatNumber);
console.log(`Число ${floattNumber} після округлення вниз: ${roundedNumber}`);


const integerString = "456";
const integerNumber = parseInt(integerString);
console.log("Ціле число:", integerNumber);


const number = 64;
const squareRoot = Math.sqrt(number);
console.log("Квадратний корінь:", squareRoot);


const intValue = 789;
const stringValue = "123";
const parsedInteger = parseInt(stringValue);
console.log("Ціле число з рядка:", parsedInteger);

const stringFromInt = intValue.toString();
console.log("Рядок з цілого числа:", stringFromInt);