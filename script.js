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
