const cartBtn = document.getElementById("cart-btn");
const cartPopup = document.getElementById("cart-popup");
const closeCart = document.getElementById("close-cart");
const darkBtn = document.getElementById("dark-btn");

cartBtn.onclick = () => {
    cartPopup.style.display = "block";
};

closeCart.onclick = () => {
    cartPopup.style.display = "none";
};

darkBtn.onclick = () => {
    document.body.classList.toggle("dark");
};
