
async function drawCard() {
  const res = await fetch("cards.json");
  const cards = await res.json();
  const card = cards[Math.floor(Math.random() * cards.length)];

  const img = document.getElementById("card-image");
  const title = document.getElementById("card-title");
  const meaning = document.getElementById("card-meaning");

  img.src = `images/${card.image}`;
  title.textContent = card.title;
  meaning.innerHTML = card.meaning.join("<br>");
}
