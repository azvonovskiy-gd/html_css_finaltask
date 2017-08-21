var productContent = document.querySelector(".product-content");
var buyLink = document.querySelector(".buy-link");
var buyPopupWindow = document.querySelector(".admin-modal");

buyLink.onclick = function () {
    productContent.classList.toggle('blur');
    buyPopupWindow.classList.toggle('popup-overlay-visible');
};

var continueShoppingBtn = document.querySelector(".continue-shopping-btn");
continueShoppingBtn.onclick = function () {
    productContent.classList.toggle('blur');
    buyPopupWindow.classList.toggle('popup-overlay-visible');
};