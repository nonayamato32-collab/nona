
async function drawCard() {
  const res = await fetch("cards.json");
  const cards = await res.json();
  const card = cards[Math.floor(Math.random() * cards.length)];

  const img = document.getElementById("card-image");
  const title = document.getElementById("card-title");
  const meaning = document.getElementById("card-meaning");

  img.classList.remove("show");
  meaning.classList.remove("show");
  img.src = `${card.image}`;

  img.onload = () => {
    img.classList.add("show");
    title.textContent = card.title;
    meaning.innerHTML = card.meanings.join("<br>");
    setTimeout(() => {
      meaning.classList.add("show");
    }, 500);
  };
}
