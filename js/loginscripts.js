var modal = document.getElementById('modal-login-form');
var overlay = document.getElementById('overlay');

modal.onclick = function () {
    if (!overlay.classList.contains('blur'))
        overlay.classList.toggle('blur');
};