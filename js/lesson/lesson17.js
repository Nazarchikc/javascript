// const calculateTotal = function (items) {
//     let total = 0;
  
//       items.forEach(item => (total += item));
  
//     return total;
//   }
// //   console.log(calculateTotal([12, 85, 37, 4])); //повертає 138
// //   console.log(calculateTotal([164, 48, 291])); //повертає 503



//   // 1 Зроби новий масив планет у аперкейс
// const planets = ["Earth", "Mars", "Venus", "Jupiter"];

// const planetsInUpperCase = planets.map(planet => planet.toUpperCase());
// // console.log(planetsInUpperCase); // ["EARTH", "MARS", "VENUS", "JUPITER"]
// // Катерина Володимирівна
// // 19:15
// // 2 Збережи у змінній planetsLengths масив, 
// // що буде складатися з довжин назв кожної планети 
// const planetsLengths = planets.map(planet => planet.length);
// console.log(planetsLengths);





const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];



// // Використовуючи 👆 масив об’єктів виконай наступні завдання:
// //map()
// const playersNames = players.map(player => player.name);
// const newplayersName = player.map(({name})=> name)
// // Отримати масив імен всіх гравців
// // Збільшити кількість поінтів кожного гравця на 10% (розпорошуємо старий об'єкт)
// // Збільшити кількість годин гравця по id. Переписати на тернарник
// //filter()
// const playersOnline = players.filter(player => player.online)
// console.log(playersOnline);
// // Отримати масив всіх гравців онлайн
    


// // // Отримати масив всіх гравців офлайн
// const playerOfline = players.filter(player => !player.online);
// console.log(playerOfline);

 
// // // Отримати масив всіх хардкорних гравців з часом більше 250

// const hardkorPlayers = players.filter(player => player.timePlayed > 250)
// console.log(hardkorPlayers);




// //Find()
// // Знайти гравця по id




// const playerById = players.find(player => player.id  === "player-4");
// console.log(playerById);

// // Знайти гравця по імені

// const payerByName = players.find(player => player.name === "Poly")
// console.log(payerByName);

// //every()
// // Перевірити чи всі гравці мають час більше 200
// const timePlayers = players.every(player => player.timePlayed  > 200)
// console.log(timePlayers);

// //every()
// // Перевірити чи всі гравці мають час більше 200
// // Перевірити чи всі гравці онлайн























