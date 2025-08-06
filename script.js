async function drawCard() {
  const container = document.getElementById("card-container");
  const meaningsContainer = document.getElementById("meanings-container");
  container.innerHTML = "";
  meaningsContainer.innerHTML = "";

  const res = await fetch("cards.json");
  const cards = await res.json();
  const card = cards[Math.floor(Math.random() * cards.length)];

  const img = document.createElement("img");
  img.src = `images/${card.image}`;
  img.alt = card.title;
  container.appendChild(img);

  const meaning = document.createElement("div");
  meaning.innerHTML = `<h3>${card.title}</h3><p>${card.meaning.join("<br>")}</p>`;
  meaningsContainer.appendChild(meaning);
}
