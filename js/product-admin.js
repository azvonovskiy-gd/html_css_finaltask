var productContent = document.getElementById('product-content');
var editLink = document.getElementById('edit-link');
var deleteLink = document.getElementById('delete-link');
var buyLink = document.getElementById('buy-link');
var productPopupWindow = document.getElementById('product-popup');
var deletePopupWindow = document.getElementById('delete-popup');
var buyPopupWindow = document.getElementById('buy-popup');

editLink.onclick = function () {
    productContent.classList.toggle('blur');
    productPopupWindow.classList.toggle('popup-overlay-visible');
};

deleteLink.onclick = function () {
    productContent.classList.toggle('blur');
    deletePopupWindow.classList.toggle('popup-overlay-visible');
};

buyLink.onclick = function () {
    productContent.classList.toggle('blur');
    buyPopupWindow.classList.toggle('popup-overlay-visible');
};

var cancelBtn = document.getElementById('cancel-btn');
cancelBtn.onclick = function () {
    productContent.classList.toggle('blur');
    productPopupWindow.classList.toggle('popup-overlay-visible');
};

var cancelDeletionBtn = document.getElementById('cancel-deletion-btn');
cancelDeletionBtn.onclick = function () {
    productContent.classList.toggle('blur');
    deletePopupWindow.classList.toggle('popup-overlay-visible');
};

var continueShoppingBtn = document.getElementById('continue-shopping-btn');
continueShoppingBtn.onclick = function () {
    productContent.classList.toggle('blur');
    buyPopupWindow.classList.toggle('popup-overlay-visible');
};

/* Custom dropdown */
function DropDown(el) {
    this.dd = el;
    this.placeholder = this.dd.children('span');
    this.opts = this.dd.find('ul.dropdown > li');
    this.val = '';
    this.index = -1;
    this.initEvents();
}

DropDown.prototype = {
    initEvents: function () {
        var obj = this;

        obj.dd.on('click', function (event) {
            $(this).toggleClass('active');
            return false;
        });

        obj.opts.on('click', function () {
            var opt = $(this);
            obj.val = opt.text().replace('✓', '');
            obj.index = opt.index();
            obj.placeholder.text(obj.val);
        });
    },
    getValue: function () {
        return this.val;
    },
    getIndex: function () {
        return this.index;
    }
}


$(function () {
    var dd = new DropDown($('#dd'));
    var dd2 = new DropDown($('#dd2'));

    $(document).click(function () {
        // all dropdowns
        $('.form-dropdown').removeClass('active');
    });

});