const calculateTotal = function (items) {
    let total = 0;
  
      items.forEach(item => (total += item));
  
    return total;
  }
//   console.log(calculateTotal([12, 85, 37, 4])); //повертає 138
//   console.log(calculateTotal([164, 48, 291])); //повертає 503



  // 1 Зроби новий масив планет у аперкейс
const planets = ["Earth", "Mars", "Venus", "Jupiter"];

const planetsInUpperCase = planets.map(planet => planet.toUpperCase());
// console.log(planetsInUpperCase); // ["EARTH", "MARS", "VENUS", "JUPITER"]
// Катерина Володимирівна
// 19:15
// 2 Збережи у змінній planetsLengths масив, 
// що буде складатися з довжин назв кожної планети 
const planetsLengths = planets.map(planet => planet.length);
console.log(planetsLengths);





const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];




const playersNames = players.map(player => player.name);
// Катерина Володимирівна
// 19:16
// Використовуючи 👆 масив об’єктів виконай наступні завдання:
//map()
// Отримати масив імен всіх гравців
// Збільшити кількість поінтів кожного гравця на 10% (розпорошуємо старий об'єкт)
// Збільшити кількість годин гравця по id. Переписати на тернарник
//filter()
// Отримати масив всіх гравців онлайн
// Отримати масив всіх гравців офлайн
// Отримати масив всіх хардкорних гравців з часом більше 250
//Find()
// Знайти гравця по id
// Знайти гравця по імені
//every()
// Перевірити чи всі гравці
//every()
// Перевірити чи всі гравці мають час більше 200
// Перевірити чи всі гравці онлайн