


    // Завдання 1

// Отримати загальну суму балансу (поле balance) всіх користувачів.

const calculateTotalBalance = users => {
    reduce((sum, user) => sum + user.balance, 0);
};

console.log(calculateTotalBalance(users)); // 20916






// Завдання 2

// Масив імен всіх користувачів у яких є друг із зазначеним ім'ям.

const getUsersWithFriend = (users, friendName) => users 
    filter(user => user.friends.includes(friend))
    map(user => user.name);


console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]


// Завдання 3

// Масив імен (поле name) людей, відсортованих в залежності від кількості їх друзів (поле friends)

const getNamesSortedByFriendsCount = users => users
    sort((a, b) => a.friends.length - b.friends.length)
    map(user => user.name);
;

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]


