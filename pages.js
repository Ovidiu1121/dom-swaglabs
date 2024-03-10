function attachMainPage() {

    let container = document.querySelector(".container");

    container.innerHTML = `
    <header class="header-container">   
        <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"><i class="gg-menu"></i></button>
        <h1 class="header-title">SWAGLABS</h1>
        <button class="btncart" style="font-size:24px"> <i class="fa fa-shopping-cart"></i></button>
    </header>

    <aside class="aside-container">
        <section class="aside-left">
            <div class="img-peek"><img class="aside-left-img" src="images/peek.png" alt=""></div>
            <h2 class="aside-left-title">Products</h2>
        </section>
    </aside>

    <main class="main-container">
        
    </main>
    <footer class="footer-container">

    <ul class="social">
        <a href="#" class="fa fa-twitter"></a>
        <a href="#" class="fa fa-facebook"></a>
        <a href="#" class="fa fa-linkedin"></a>
    </ul>
    <div class="terms">&copy; 2020 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy</div>
    <img class="footer-img" src="images/SwagBot_Footer_graphic.png">
</footer>

<div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
  <div class="offcanvas-header">
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
  <button class="menu-choice btn-allitems">All items</button>
  <button class="menu-choice btn-logout">Logout</button>
  </div>
</div>

    `
    attachCardsProductPage();
    buttonStage();

    let lista = document.querySelector(".main-container");//products page list
    let btncart = document.querySelector(".btncart");

    lista.addEventListener("click", (eve) => {

        let pressed = eve.target;
        let footerSection = pressed.parentNode;
        let rightSection = footerSection.parentNode;
        let card = rightSection.parentNode;
        let name = card.querySelector(".name");

        if (pressed.classList.contains("btnadd")) {
            addToCart(name.textContent)
        } else if (pressed.classList.contains("remove")) {
            resetCard(name.textContent);
            removeFromCart(name.textContent);
        }
    });

    let btnallitems = document.querySelector(".btn-allitems");

    btnallitems.addEventListener("click", () => {
        attachMainPage();
    });

    let btnlogout = document.querySelector(".btn-logout");

    btnlogout.addEventListener("click", () => {
        attachLoginPage();
    });

    btncart.addEventListener("click", () => {
        attachCarPage();
    });


}

function attachCarPage() {

    let container = document.querySelector(".container");

    container.innerHTML = `
    <header class="header-container">
        <button class="menu"><i class="gg-menu"></i></button>
        <h1 class="header-title">SWAGLABS</h1>
        <button class="btncart" style="font-size:24px"> <i class="fa fa-shopping-cart"></i></button>
    </header>

    <aside class="cart-aside-container">
        <h2>Your Cart</h2>
    </aside>

    <main class="cart-main-container">
        <section class="desc">
            <h3 class="quantity-label">QTY</h3>
            <h3 class="description-label">DESCRIPTION</h3>
        </section>

        <ul class="cart-cards">
        </ul>

        </section>
        <section class="buttons">
            <button class="btncontinue">CONTINUE SHOPPING</button>
            <button class="btncheckout">CHECKOUT</button>
        </section>
    </main>

    <footer class="footer-container">

        <ul class="social">
            <a href="#" class="fa fa-twitter"></a>
            <a href="#" class="fa fa-facebook"></a>
            <a href="#" class="fa fa-linkedin"></a>
        </ul>

        <div class="terms">&copy; 2020 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy</div>
        <img class="footer-img" src="images/SwagBot_Footer_graphic.png">
    </footer>
    `

    if (cart.length !== 0) {
        attachCardsCartPage();
    }

    let listaCart = document.querySelector(".cart-cards");//cart page list
    let btnContinueShopping = document.querySelector(".btncontinue");

    listaCart.addEventListener("click", (eve) => {

        let pressed = eve.target;
        let footerSection = pressed.parentNode;
        let rightSection = footerSection.parentNode;
        let card = rightSection.parentNode;
        let name = card.querySelector(".name");

        if (pressed.classList.contains("remove")) {
            removeFromCart(name.textContent);
            attachCarPage();
        }

    });

    btnContinueShopping.addEventListener("click", () => {
        attachMainPage();

    });

}

function attachLoginPage() {

    let container = document.querySelector(".container");

    container.innerHTML = `
    <header class="login-header-cotnainer">
        <h1 class="header-title">SWAGLABS</h1>
    </header>

    <main class="login-main-container">
        <section class="main-item details">
            <input type="text" class="details-item username" placeholder="Username">
            <input type="text" class="details-item password" placeholder="Password">
            <button class="details-item btnlogin">LOGIN</button>
        </section>
        <div class="login-img">
            <img src="images/Login_Bot_graphic.png" alt="">
        </div>
    </main>
    <img src="../products.html" alt="">
    <footer class="login-footer-container">
        <section class="footer-item login-names">
            <span class="login-names-item username-list">Accepted usernames are:</span>
            <ul class="login-ul">
                <li>standard_user</li>
                <li>locked_out_user</li>
                <li>problem_user</li>
                <li>performance_glitch_user</li>
            </ul>
        </section>
        <section class="footer-item login-password">
            <span class="login-password-item username-list">Password for all users:</span>
            <p class="login-password-item user-password">secret_sauce</p>
        </section>
    </footer>
    `

    let btnlogin = document.querySelector(".btnlogin");

    btnlogin.addEventListener("click", () => {
        let usernameInput = document.querySelector(".username");
        let passwordInput = document.querySelector(".password");
        let enteredUsername = usernameInput.value;
        let enteredPassword = passwordInput.value;

        let validUsernames = ["standard_user", "locked_out_user", "problem_user", "performance_glitch_user"];
        let validPassword = "secret_sauce";

        if (validUsernames.includes(enteredUsername) && enteredPassword === validPassword) {
            attachMainPage();
        }

    });

}







