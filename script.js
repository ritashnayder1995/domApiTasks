let text = document.getElementById("text");
console.log(text);
text.remove();

let cite = document.getElementsByClassName("cite");
console.log(cite);

let par = document.getElementsByTagName("p");
console.log(par);


let italicText = document.querySelectorAll(".cite i");
console.log(italicText);

let h2 = document.querySelector("h2");
console.log(h2);
h2.innerHTML = "Текст <br> заголовка <i>из джс</i>";


h2.textContent = "Другой  <br> текст";

h2.setAttribute("align", "center");
h2.setAttribute('class', 'heading');

console.log(h2.getAttribute('align'));


h2.style.color = "gold";
h2.style.display = "block";

h2.classList.add("title");
h2.classList.remove('heading');


/*Задача про товары*/
let assortmentData = [
    {
        inStock: true,
        isHit: true
    },
    {
        inStock: true,
        isHit: false
    },
    {
        inStock: true,
        isHit: true
    },
    {
        inStock: true,
        isHit: false
    },
    {
        inStock: true,
        isHit: false
    }
];

let goods =
    document.querySelectorAll(".goods li");
console.log(goods);


for (let i = 0; i < goods.length; i++) {
    // console.log(goods[i]);
    //console.log(assortmentData[i].inStock);

    goods[i].setAttribute("class", "");
    // удалить классы из разметки

    if (assortmentData[i].inStock) {
        // товар в наличии
        goods[i].classList.add("good--available");
    }
    else {
        // товар не в наличии
        goods[i].classList.add("good--unavailable");
    }

    if (assortmentData[i].isHit) {
        // товар хит продаж
        goods[i].classList.add("good--hit");
    }


}

/*-------------- */
let goodsList = document.querySelector(".goods");
console.log(goodsList);

// 6й товар
let newGood = document.createElement("li");
newGood.textContent = "товар 6";
console.log(newGood);

newGood.classList.add("good--unavailable");

goodsList.append(newGood);


console.log(goods);

goodsList.append(goods[2]);

/* Задача: добавить циклом 10 абзацев в блок div.ten
 */

let newDiv = document.createElement("div");
newDiv.classList.add('ten');

for (let i = 0; i <= 9; i++) {
    let newPar = document.createElement("p");
    newPar.textContent = i + 1;
    newDiv.append(newPar);
}
document.body.append(newDiv);


/* Задача: Создать на странице 3 блока. Клонировать и добавить на страницу 4й
 cards */

let cards = document.querySelector('.cards');
let card = document.querySelector('.card');

console.log(cards);
console.log(card);

let newCard = card.cloneNode(true);
console.log(newCard);

newCard.querySelector('h3').textContent = "Товар 4";
newCard.querySelector('p').textContent = "Описание 4";

cards.append(newCard);