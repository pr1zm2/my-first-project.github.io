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

function showSection(sectionId, title) {

    document.querySelectorAll("section.breeds").forEach(section => {
        section.style.display = "none";
    });

    document.getElementById(sectionId).style.display = "block";

    
    document.querySelector("header h1").textContent = title;
}

function showDogs() {
    showSection("dogs-section", "🐶 Собаки — наші друзі");
}

function showCats() {
    showSection("cats-section", "🐱 Коти — наші пухнасті друзі");
}

function showRodents() {
    showSection("rodents-section", "🐹 Гризуни — маленькі, але веселі улюбленці");
}

function showMessage() {
    alert("Вибачте, ця сторінка птахів ще в розробці 🛠️");
}





