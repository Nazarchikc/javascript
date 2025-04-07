
// 1
// Створити розмітку з кнопкою та текстовим полем.
// За допомогою JavaScript отримати доступ до кнопки та
// текстового поля за їх ідентифікаторами та
// змінити текст на кнопці на значення текстового поля.

const MyButton = document.querySelector("#button-input")
const MyInput = document.querySelector("#text-input")
MyButton.textContent=MyInput.value
console.log(MyButton, MyInput);
console.log(MyButton.textContent);
// 2
// Створити розмітку  з заголовком та зображенням.
// допомогою JavaScript отримати доступ до зображення та змінити
// значення атрибута "src" на шлях до іншого зображення.
const imgOfDog = document.querySelector(".dog-picture");
imgOfDog.src =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuO9qx4cuh8YXfMKLFm9CT8stsR2dkeHw5aA&s";
console.log(imgOfDog.src);


// 3
// Створити розмітку  з посиланням та зображенням. 
// За допомогою JavaScript отримати доступ до посилання та змінити
//  значення атрибута "href" на нову URL - адресу.
//  Також отримати доступ до зображення та додати 
//  новий атрибут "alt" з описом зображення.

const ImgOfDog = document.querySelector(".dog-2");
console.log(ImgOfDog);

ImgOfDog.alt = "cat";

const linkOfDog = document.querySelector(".link-a");
console.log(linkOfDog);

linkOfDog.href =
  "https://www.google.com/search?q=dog&oq=&gs_lcrp=EgZjaHJvbWUqCQgAECMYJxjqAjIJCAAQIxgnGOoCMgkIARBFGDsYwgMyCQgCEEUYOxjCAzIJCAMQRRg7GMIDMgkIBBBFGDsYwgMyDwgFEC4YAxiPARi0AhjqAjIPCAYQLhgDGI8BGLQCGOoCMhEIBxAAGAMYQhiPARi0AhjqAtIBCjYxODg1NGowajeoAgiwAgHxBYs7DgOnuQeE&sourceid=chrome&ie=UTF-8";



//  4
// Створити розмітку  зі списком елементів.
// За допомогою JavaScript отримати доступ до
// першого елемента списку та змінити його вміст на новий текст.