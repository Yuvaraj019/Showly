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

// Toggle Sign In Modal
function toggleSignInModal() {
  const modal = document.getElementById("signin-modal");
  if (modal.style.display === "flex") {
    modal.style.display = "none";
  } else {
    modal.style.display = "flex";
    modal.style.justifyContent = "center";
    modal.style.alignItems = "center";
  }
}

// Optional: Close modal when clicking outside
window.onclick = function(event) {
  const modal = document.getElementById("signin-modal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
