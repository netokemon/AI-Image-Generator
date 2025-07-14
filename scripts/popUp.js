
setTimeout(function() {
    document.querySelector('.popup-container').classList.add('mostrar');
}, 1000);

function fecharPopup() {
    document.querySelector('.popup-container').classList.remove('mostrar');
}

document.querySelector('.popup-container').addEventListener('click', function(e) {
    if (e.target === this) {
        fecharPopup();
    }
});
