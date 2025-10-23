function toggleCard(card) {
    const hiddenContent = card.querySelector(".hidden-content");
    const isExpanded = card.classList.contains("expanded");

    if (isExpanded) {
        
        card.classList.remove("expanded");
        hiddenContent.style.display = "none";
         } else {
        
        card.classList.add("expanded");
        hiddenContent.style.display = "block";
    }
}

function showMessage() {
    alert("Вибачте, ця сторінка ще в розробці.");
}

function showRodents() {
    document.querySelector("header h1").textContent = "🐹 Гризуни — наші маленькі, кмітливі та зубасті друзі";
    document.querySelector("#rodents-section").style.display = "block";
    document.querySelector("#main-content section:not(#rodents-section)").style.display = "none";
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
















