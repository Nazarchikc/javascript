const arrOfLinksName = ["Головна",'Про нас', "Відгуки", "Блог", "Контакти","Соцмережі"];
const navListEl = document.querySelector(".list")

let itemsArr = [];

for (const item of arrOfLinksName) {
  console.log(item);
  const itemElement = document.createElement('li');
  itemElement.classList.add('site-nav__item');

  const linkElement = document.createElement('a');
  linkElement.classList.add('site-nav__link');
  linkElement.href = '#';
  linkElement.textContent = item;

  itemElement.appendChild(linkElement);
    console.log(itemElement);
    itemsArr.push(itemElement);
}

const markup = arrOfLinksName.map(item => {
    return `<li class="site-nav__item"> <a class="site-nav__link" href="#">${item}</a></li>`;
});
console.log(markup);

console.log(markup);
navListEl.insertAdjacentHTML("beforeend", markup);

navListEl.innerHTML = markup