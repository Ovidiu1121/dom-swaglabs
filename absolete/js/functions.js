

function createCard(data) {
    let li = document.createElement('li');
    li.classList = "card";

    let leftSection = document.createElement('section');
    leftSection.classList = "left";

    let divQuantity = document.createElement('div');
    divQuantity.classList = "quantity-value";
    divQuantity.textContent = "1";

    leftSection.appendChild(divQuantity);

    let rightSection = document.createElement('section');
    rightSection.classList = "right";

    let infoSection = document.createElement('section');
    infoSection.classList = "info";

    let name = document.createElement('h2');
    name.classList = "name";
    name.textContent = data.name;

    let descriere = document.createElement('p');
    descriere.classList = "name";
    descriere.textContent = data.descriere;

    infoSection.appendChild(name);
    infoSection.appendChild(descriere);

    let footerSection = document.createElement('section');
    infoSection.classList = "card-footer";

    let price = document.createElement('span');
    price.classList = "price";
    price.textContent = data.price;

    let btnremove = document.createElement('button');
    btnremove.classList = "remove";

    footerSection.appendChild(price);
    footerSection.appendChild(btnremove);

    rightSection.appendChild(infoSection);
    rightSection.appendChild(footerSection);

    li.appendChild(leftSection);
    li.appendChild(rightSection);

}

function attachCards(products) {

    let lista = document.querySelector(".cards");

    console.log(lista);

    lista.innerHTML = "";

    for (let i = 0; i < products.length; i++) {
        let card = createCard(products[i]);
        lista.appendChild(card);
    }

}

function setPage() {

    attachCards(cart);

}

function findCardByName(name) {

    let list = document.querySelector(".main-container");
    let cards = Array.from(list.children);

    for (let i = 0; i < cards.length; i++) {
        if (cards[i].querySelector(".name").textContent == name) {
            return cards[i];
        }

    }

    return null;
}

function findByName(name) {

    let aux = data.findIndex(a => a.name === name);
    return data[aux];

}

function addToCart(name) {

    let obj = findByName(name);
    let card = findCardByName(name);

    if (card) {
        let productInCart = {
            name: card.querySelector('.name').textContent,
            description: card.querySelector('.description').textContent,
            price: card.querySelector('.price').textContent
        };
        cart.push(productInCart);
    }

    console.log(cart);

    card.innerHTML = `
    <section class="left">
    <img class="card-img" src="${obj.picture}" alt="">
</section>
<section class="right">
    <section class="info">
        <h2 class="name">${obj.name}</h2>
        <p class="description">${obj.description}</p>
    </section>
    <section class="card-footer">
        <span class="price">$${obj.price}</span>
        <button class="remove">REMOVE</button>
    </section>
</section>`;

}

function resetCard(name) {

    let obj = findByName(name);
    let card = findCardByName(name);

    if (card) {
        card.innerHTML = `
    <section class="left">
    <img class="card-img" src="${obj.picture}" alt="">
</section>
<section class="right">
    <section class="info">
        <h2 class="name">${obj.name}</h2>
        <p class="description">${obj.description}</p>
    </section>
    <section class="card-footer">
        <span class="price">$${obj.price}</span>
        <button class="btnadd">ADD TO CART</button>
    </section>
</section>`;
    }

}

