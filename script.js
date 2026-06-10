let inicioExecutado = false;

const inicioSound = document.getElementById("inicioSound");
const hoverSound = document.getElementById("hoverSound");
const selectSound = document.getElementById("selectSound");

document.addEventListener("mousemove", function () {

    if (!inicioExecutado) {

        inicioExecutado = true;

        inicioSound.volume = 0.4;

        inicioSound.play().catch(() => {});

    }

});

const cards = document.querySelectorAll(".card");

cards.forEach(function(card) {

    card.addEventListener("mouseenter", function() {

        hoverSound.pause();
        hoverSound.currentTime = 0;

        hoverSound.play().catch(() => {});

    });

    card.addEventListener("click", function() {

        selectSound.pause();
        selectSound.currentTime = 0;

        selectSound.play().catch(() => {});

    });

});