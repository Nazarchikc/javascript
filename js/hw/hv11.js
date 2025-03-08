// Bank Account Object
const bankAccount = {
    ownerName: "John Doe",
    accountNumber: "123456789",
    balance: 1000,
    deposit(amount) {
        this.balance += amount;
        console.log(`Поповнено рахунок на ${amount}. Баланс: ${this.balance}`);
    },
    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Недостатньо коштів на рахунку");
        } else {
            this.balance -= amount;
            console.log(`Знято ${amount}. Баланс: ${this.balance}`);
        }
    }
};

// Weather Object
const weather = {
    temperature: 0,
    humidity: 50,
    windSpeed: 10,
    isBelowZero() {
        return this.temperature < 0;
    }
};
console.log(weather.isBelowZero() ? "Температура нижче 0 градусів Цельсія" : "Температура вище або рівна 0 градусів Цельсія");

// User Object
const user = {
    name: "",
    email: "",
    password: "",
    login(inputEmail, inputPassword) {
        if (this.email === inputEmail && this.password === inputPassword) {
            console.log("Вхід успішний");
        } else {
            console.log("Невірний email або пароль");
        }
    }
};

// Movie Object
const movie = {
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    rating: 8.8,
    isHighlyRated() {
        return this.rating > 8;
    }
};
console.log(`Фільм: ${movie.title}, Режисер: ${movie.director}, Рік: ${movie.year}, Рейтинг: ${movie.rating}`);
if (movie.isHighlyRated()) {
    console.log("Змінюємо колір тексту title на зелений");
}