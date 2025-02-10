// const myObject = {
//     name: "NaZaZik",
//     age: 14,
//     city: "Slavske",
//     occupation: ""
// }


// let name = 'Resort Hotel';
// let stars = 5;

// const es6hotel = {
//   stars,
//   hotelName: name,
//     capacity: 100,
// };
// console.log(es6hotel);


// ZADAKHI



// 1. 
//  Оголоси змінну apartment і задай ій об'єкт, 
// який описує квартиру з наступними характеристиками:

// descr - рядок, що містить опис, 
// значення "Spacious apartment in the city center";
// rating - число, що містить рейтинг, значення 4;
// price - число, що містить ціну, значення 2153;
// tags - масив рядків, що містить метаінформацію,
//  значення ["premium", "promoted", "top"].


// name - рядок, що містить ім'я власника, значення "Henry";
// phone - рядок, що містить номер телефону, значення "982-126-1588";
// email - рядок, що містить пошту, значення "henry.carter@aptmail.com"

const name = "Henry"
const apartement = {
    descr: "Spaci s apartment in the city center",
    reating: 4,
    prise: 2153,
    tags: ["premium", "promoted", "top"],
    owner: {
        name,
        phone: "982-126-1588",
        email: "henry.carter@aptmail.com",

    }
    

}
apartement.prise = 5000
apartement.tags.push("trasted")

console.log(apartement)
console.log(apartement.descr)
console.log(apartement.tags[1])



