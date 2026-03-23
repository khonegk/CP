const container = document.getElementById("cats-container");
cats.forEach(cat => {
    const card = document.createElement("div"); // создаём карточку
    card.className = "cat-card";
    const img = document.createElement("img"); // картинка
    img.src = cat.img_link;
    img.alt = cat.name;
    const name = document.createElement("h3"); // имя
    name.textContent = cat.name;
    const desc = document.createElement("p"); // описание
    desc.textContent = cat.description;
    const age = document.createElement("p"); // возраст
    age.textContent = `Возраст: ${cat.age}`;
    const rate = document.createElement("p"); // рейтинг, если есть
    rate.textContent = `Рейтинг: ${cat.rate}`;
    card.append(img, name, desc, age, rate); // собираем
    container.appendChild(card);
});