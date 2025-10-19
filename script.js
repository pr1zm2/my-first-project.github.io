document.addEventListener("DOMContentLoaded", function() {

  
    function toggleCard(card) {
        const isExpanded = card.classList.contains("expanded");

       
        document.querySelectorAll(".breed-card").forEach(c => {
            c.classList.remove("expanded");
        });

       
        if (!isExpanded) {
            card.classList.add("expanded");
        }
    }

    window.toggleCard = toggleCard;

   
    function showSection(sectionId, title) {
        document.querySelector("header h1").textContent = title;
        document.querySelectorAll(".animal-section").forEach(section => {
            section.style.display = "none";
        });
        document.querySelector(sectionId).style.display = "block";
    }

    window.showDogs = function() {
        showSection("#dogs-section", "🐶 Собаки — наші друзі");
    }

    window.showCats = function() {
        showSection("#cats-section", "🐱 Коти — наші пухнасті друзі");
    }

    window.showRodents = function() {
        showSection("#rodents-section", "🐹 Гризуни — наші маленькі друзі");
    }

    window.showMessage = function() {
        alert("Вибачте, ця сторінка ще в розробці.");
    }
});






