const gameContainer = document.getElementById("gameContainer");
const searchInput = document.getElementById("searchInput");
const logButton = document.getElementById("logGameBtn");

const defaultGames = [
  { title: "A Plague Tale: Innocence", image: "Assets/APlagueTaleInnocence.jpg" },
  { title: "A Plague Tale: Requiem", image: "Assets/APlagueTaleRequiem.jpg" },
  { title: "Black Myth: Wukong", image: "Assets/BlackMythWuKong.jpg" },
  { title: "Dark Sider III", image: "Assets/DarkSidersIII.jpg" },
  { title: "Death Stranding: Directors Cut", image: "Assets/DeathStrandingDirectorsCut.jpg" },
  { title: "Far Cry 3", image: "Assets/Farcry3.jpg" },
  { title: "Florence", image: "Assets/Florence.jpg" },
  { title: "Moonlighter", image: "Assets/Moonlighter.jpg" },
  { title: "Resident Evil VIII: Village", image: "Assets/ResidentEvilVIIIVillage.jpg" },
  { title: "Stray", image: "Assets/Stray.jpg" },
];

let games = JSON.parse(localStorage.getItem("games")) || defaultGames;

function saveGamesToStorage() {
  localStorage.setItem("games", JSON.stringify(games));
}

function createGameCard({ title, image }) {
  const gameDiv = document.createElement("div");
  gameDiv.className = "game";

  const img = document.createElement("img");
  img.src = image;
  img.alt = title;
  img.loading = "lazy";
  img.onerror = () => {
    img.src = "Assets/placeholder.jpg";
    img.alt = "Image not found";
  };

  const caption = document.createElement("div");
  caption.className = "game-title";
  caption.textContent = title;

  gameDiv.append(img, caption);
  return gameDiv;
}

function renderGames(filteredGames = games) {
  gameContainer.innerHTML = "";
  filteredGames.forEach((game) => {
    gameContainer.appendChild(createGameCard(game));
  });
}

function handleLogGame() {
  const title = prompt("Enter game title:");
  if (!title || !title.trim()) return alert("Title cannot be empty.");

  const image = prompt("Enter image URL or local path:");
  if (!image || !image.trim()) return alert("Image path is required.");

  games.push({ title: title.trim(), image: image.trim() });
  saveGamesToStorage();
  renderGames();
}

// Search functionality
searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const filtered = games.filter((game) =>
    game.title.toLowerCase().includes(query)
  );
  renderGames(filtered);
});

logButton.addEventListener("click", handleLogGame);

// Initial render
renderGames();
