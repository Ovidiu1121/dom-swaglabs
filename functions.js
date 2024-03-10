
function createCardProductPage(data) {

    let div = document.createElement('div');
    div.classList = "card";

    let sectionLeft = document.createElement('section');
    sectionLeft.classList = "left";

    let image = document.createElement('img');
    image.classList = "card-img";
    image.src = data.picture;

    sectionLeft.appendChild(image);

    let sectionRight = document.createElement('section');
    sectionRight.classList = "right";

    let sectionInfo = document.createElement('section');
    sectionInfo.classList = "info";

    let name = document.createElement('h2');
    name.classList = "name";
    name.textContent = data.name;

    let description = document.createElement('p');
    description.classList = "description";
    description.textContent = data.description;

    sectionInfo.appendChild(name);
    sectionInfo.appendChild(description);

    let sectionFooter = document.createElement('section');
    sectionFooter.classList = "card-footer";

    let price = document.createElement('span');
    price.classList = "price";
    price.textContent = "$" + data.price;

    let btnadd = document.createElement('button');
    btnadd.classList = "btnadd";
    btnadd.textContent = "ADD TO CART";

    sectionFooter.appendChild(price);
    sectionFooter.appendChild(btnadd);

    sectionRight.appendChild(sectionInfo);
    sectionRight.appendChild(sectionFooter);

    div.appendChild(sectionLeft);
    div.appendChild(sectionRight);

    return div;
}

function attachCardsProductPage() {

    let lista = document.querySelector(".main-container");

    lista.innerHTML = "";

    for (let i = 0; i < data.length; i++) {
        let card = createCardProductPage(data[i]);
        lista.appendChild(card);
    }
}

function createCrdCartPage(obj) {

    let li = document.createElement('li');
    li.classList = "cart-card";

    let sectionLeft = document.createElement('section');
    sectionLeft.classList = "cart-left";

    let divQuantity = document.createElement('div');
    divQuantity.classList = "quantity-value";
    divQuantity.textContent = 1;

    sectionLeft.appendChild(divQuantity);

    let sectionRight = document.createElement('section');
    sectionRight.classList = "right";

    let sectionInfo = document.createElement('section');
    sectionInfo.classList = "info";

    let name = document.createElement('h2');
    name.classList = "name";
    name.textContent = obj.name;

    let description = document.createElement('p');
    description.classList = "description";
    description.textContent = obj.description;

    sectionInfo.appendChild(name);
    sectionInfo.appendChild(description);

    let sectionFooter = document.createElement('section');
    sectionFooter.classList = "card-footer";

    let price = document.createElement('span');
    price.classList = "price";
    price.textContent = obj.price;

    let btnRemove = document.createElement('button');
    btnRemove.classList = "remove";
    btnRemove.textContent = "REMOVE";

    sectionFooter.appendChild(price);
    sectionFooter.appendChild(btnRemove);

    sectionRight.appendChild(sectionInfo);
    sectionRight.appendChild(sectionFooter);

    li.appendChild(sectionLeft);
    li.appendChild(sectionRight);


    return li;
}

function attachCardsCartPage() {

    let lista = document.querySelector(".cart-cards");

    lista.innerHTML = "";

    for (let i = 0; i < cart.length; i++) {
        let card = createCrdCartPage(cart[i]);
        lista.append(card);
    }

}

function setCartPage() {

    attachCardsCartPage(cart);

}

function findCardByName(name) {

    let lista = document.querySelector(".main-container");
    let cards = Array.from(lista.children);

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

function removeFromCart(productName) {

    const index = cart.findIndex(item => item.name === productName);

    if (index !== -1) {
        cart.splice(index, 1);
    }
}

function addedToCartMode(name) {

    let obj = findByName(name);
    let card = findCardByName(name);

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

function buttonStage() {

    if (cart) {
        for (let i = 0; i < cart.length; i++) {
            for (let j = 0; j < data.length; j++) {
                if (cart[i].name == data[j].name) {
                    addedToCartMode(cart[i].name);
                }
            }
        }
    }

}
