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

function showDogs() {
    document.querySelector("header h1").textContent = "🐶 Собаки — наші друзі";
    document.querySelector("#dogs-section").style.display = "block";
    document.querySelector("#cats-section").style.display = "none";
    document.querySelector("#rodents-section")?.style.display = "none";
}

function showCats() {
    document.querySelector("header h1").textContent = "🐱 Коти — наші пухнасті друзі";
    document.querySelector("#cats-section").style.display = "block";
    document.querySelector("#dogs-section").style.display = "none";
    document.querySelector("#rodents-section")?.style.display = "none";
}

function showRodents() {
    document.querySelector("header h1").textContent = "🐹 Гризуни — маленькі, веселі улюбленці";
    document.querySelector("#rodents-section").style.display = "block";
    document.querySelector("#dogs-section").style.display = "none";
    document.querySelector("#cats-section").style.display = "none";
}

// Якщо сторінка ще в розробці
function showMessage() {
    alert("Вибачте, ця сторінка ще в розробці 🛠️");
}






