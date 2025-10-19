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

function showMessage() {
    alert("Вибачте, ця сторінка ще в розробці.");
}

function showRodents() {
    document.querySelector("header h1").textContent = "🐹 Гризуни — наші маленькі, кмітливі та зубасті друзі";
    document.querySelector("#cats-section").style.display = "block";
    document.querySelector("#main-content section:not(#cats-section)").style.display = "none";
}

function showCats() {
    document.querySelector("header h1").textContent = "🐱 Коти — наші пухнасті друзі";
    document.querySelector("#cats-section").style.display = "block";
    document.querySelector("#main-content section:not(#cats-section)").style.display = "none";
}

function showDogs() {
    document.querySelector("header h1").textContent = "🐶 Собаки — наші друзі";
    document.querySelector("#dogs-section").style.display = "block";
    document.querySelector("#main-content section:not(#dogs-section)").style.display = "none";
}









