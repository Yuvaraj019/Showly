// Search bar filter
document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector(".search-box input");
  const cards = document.querySelectorAll(".anime-card");

  input.addEventListener("input", () => {
    const query = input.value.toLowerCase();
    cards.forEach(card => {
      const title = card.querySelector(".anime-title").textContent.toLowerCase();
      card.style.display = title.includes(query) ? "block" : "none";
    });
  });
});
