
async function drawThreeCards() {
  const container = document.getElementById("card-container");
  const meaningsContainer = document.getElementById("meanings-container");
  container.innerHTML = "";
  meaningsContainer.innerHTML = "";

  const res = await fetch("cards.json");
  const cards = await res.json();
  const shuffled = cards.sort(() => 0.5 - Math.random()).slice(0, 3);

  shuffled.forEach((card, index) => {
    setTimeout(() => {
      const img = document.createElement("img");
      img.src = card.image;
      img.alt = card.title;
      img.className = "card-img";
      container.appendChild(img);

      // trigger fade-in
      setTimeout(() => img.classList.add("show"), 100);

      const meaning = document.createElement("div");
      meaning.style.marginTop = "20px";
      meaning.style.padding = "10px";
      meaning.style.borderBottom = "1px solid #444";
      meaning.innerHTML = `<h3>${card.title}</h3><p>${card.meanings.join("<br>")}</p>`;
      meaningsContainer.appendChild(meaning);
    }, index * 600); // 600ms delay between cards
  });
}
