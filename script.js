document.addEventListener("DOMContentLoaded", function () {

   
    function toggleCard(card) {
        const isExpanded = card.classList.contains("expanded");

       
        document.querySelectorAll(".breed-card").forEach(c => {
            c.classList.remove("expanded");
            const hidden = c.querySelector(".hidden-content");
            if (hidden) hidden.style.display = "none";
        });

       
        if (!isExpanded) {
            card.classList.add("expanded");
            const hidden = card.querySelector(".hidden-content");
            if (hidden) hidden.style.display = "block";
        }
    }

    window.toggleCard = toggleCard;

   

    window.showDogs = function () {
        setActiveSection("#dogs-section", "🐶 Собаки — наші друзі");
    };

    window.showCats = function () {
        setActiveSection("#cats-section", "🐱 Коти — наші пухнасті друзі");
    };

    window.showRodents = function () {
        setActiveSection("#rodents-section", "🐹 Гризуни — наші маленькі друзі");
    };

   
    function setActiveSection(selectorToShow, title) {
        document.querySelector("header h1").textContent = title;

        
        document.querySelectorAll("main section").forEach(sec => {
            sec.style.display = "none";
        });

       
        const target = document.querySelector(selectorToShow);
        if (target) target.style.display = "block";
    }

   
    window.showMessage = function () {
        alert("Вибачте, ця сторінка ще в розробці.");
    };
});
