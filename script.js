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

function showMessage() {
    alert("Вибачте, ця сторінка ще в розробці.");
}

function showDogs() {
    const dogsSection = document.querySelector('#main-content .breeds');
    const catsSection = document.querySelector('#cats-section');
    const rodentsSection = document.querySelector('#rodents-section');
    if (dogsSection) dogsSection.style.display = 'block';
    if (catsSection) catsSection.style.display = 'none';
    if (rodentsSection) rodentsSection.style.display = 'none';
    const hdr = document.querySelector('header h1');
    if (hdr) hdr.textContent = '🐶 Собаки — наші друзі';
    closeAllCards();
}

function showCats() {
    const dogsSection = document.querySelector('#main-content .breeds');
    const catsSection = document.querySelector('#cats-section');
    const hamstersSection = document.querySelector('#rodents-section');
    if (dogsSection) dogsSection.style.display = 'none';
    if (catsSection) catsSection.style.display = 'block';
    if (rodentsSection) rodentsSection.style.display = 'none';
    const hdr = document.querySelector('header h1');
    if (hdr) hdr.textContent = '🐱 Коти — наші улюбленці';
    closeAllCards();
}

function showRodents() {
    const dogsSection = document.querySelector('#main-content .breeds');
    const catsSection = document.querySelector('#cats-section');
    const rodentsSection = document.querySelector('#rodents-section');
    if (dogsSection) dogsSection.style.display = 'none';
    if (catsSection) catsSection.style.display = 'none';
    if (rodentsSection) rodentsSection.style.display = 'block';
    const hdr = document.querySelector('header h1');
    if (hdr) hdr.textContent = '🐹 Хомʼяки — маленькі пухнастики';
    closeAllCards();
}

function closeAllCards() {
    document.querySelectorAll(".breed-card").forEach(c => {
        c.classList.remove("expanded");
        const hidden = c.querySelector(".hidden-content");
        if (hidden) hidden.style.display = 'none';
    });
}








