let lista = document.querySelector(".main-container");
let btncart = document.querySelector(".btncart");
let btnContinueShopping = document.querySelector(".btncontinue");
let btnlogin = document.querySelector(".btnlogin");

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
    }

});

btncart.addEventListener("click", () => {

    window.location.href = "../cart page/cart_html.html";
    setPage();

});

btnlogin.addEventListener("click", () => {
    let usernameInput = document.querySelector(".username");
    let passwordInput = document.querySelector(".password");
    let enteredUsername = usernameInput.value;
    let enteredPassword = passwordInput.value;

    let validUsernames = ["standard_user", "locked_out_user", "problem_user", "performance_glitch_user"];
    let validPassword = "secret_sauce";

    if (validUsernames.includes(enteredUsername) && enteredPassword === validPassword) {
        window.location.href = "products.html";
    }

});

btnContinueShopping.addEventListener("click", () => {

    window.location.href = "../products.html";

});

