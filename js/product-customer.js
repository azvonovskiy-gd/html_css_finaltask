var productContent = document.getElementById('product-content');
var buyLink = document.getElementById('buy-link');
var buyPopupWindow = document.getElementById('buy-popup');

buyLink.onclick = function () {
    productContent.classList.toggle('blur');
    buyPopupWindow.classList.toggle('popup-overlay-visible');
};

var continueShoppingBtn = document.getElementById('continue-shopping-btn');
continueShoppingBtn.onclick = function () {
    productContent.classList.toggle('blur');
    buyPopupWindow.classList.toggle('popup-overlay-visible');
};
