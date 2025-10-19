document.addEventListener("DOMContentLoaded", function() {

    function toggleCard(card) {
        const isExpanded = card.classList.contains("expanded");
        document.querySelectorAll(".breed-card").forEach(c => {
            c.classList.remove("expanded");
            c.querySelector(".hidden-content").style.display = "none";
        });
        if (!isExpanded) {
            card.classList.add("expanded");
            card.querySelector(".hidden-content").style.display = "block";
        }
    }

    window.toggleCard = toggleCard;

    window.showDogs = function() {
        document.querySelector("header h1").textContent = "🐶 Собаки — наші друзі";
        document.querySelector("#dogs-section").style.display = "block";
        document.querySelector("#cats-section").style.display = "none";
        document.querySelector("#rodents-section").style.display = "none";
    }

    window.showCats = function() {
        document.querySelector("header h1").textContent = "🐱 Коти — наші пухнасті друзі";
        document.querySelector("#cats-section").style.display = "block";
        document.querySelector("#dogs-section").style.display = "none";
        document.querySelector("#rodents-section").style.display = "none";
    }

    window.showRodents = function() {
        document.querySelector("header h1").textContent = "🐹 Гризуни — наші маленькі друзі";
        document.querySelector("#rodents-section").style.display = "block";
        document.querySelector("#dogs-section").style.display = "none";
        document.querySelector("#cats-section").style.display = "none";
    }

    window.showMessage = function() {
        alert("Вибачте, ця сторінка ще в розробці.");
    }

});








