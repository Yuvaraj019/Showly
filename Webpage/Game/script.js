const gameContainer = document.getElementById("gameContainer");
const searchInput = document.getElementById("searchInput");
const logButton = document.getElementById("logGameBtn");

const modal = document.getElementById("logModal");
const gameTitleInput = document.getElementById("gameTitleInput");
const gameImageInput = document.getElementById("gameImageInput");
const addGameSubmit = document.getElementById("addGameSubmit");
const cancelBtn = document.getElementById("cancelBtn");

const imageBaseURL = "https://raw.githubusercontent.com/Yuvaraj019/Showly/Webpage/Game/Assets/";

const defaultGames = [
  { title: "A Plague Tale: Innocence", image: imageBaseURL + "APlagueTaleInnocence.jpg" },
  { title: "A Plague Tale: Requiem", image: imageBaseURL + "APlagueTaleRequiem.jpg" },
  { title: "Black Myth: Wukong", image: imageBaseURL + "BlackMythWuKong.jpg" },
  { title: "Dark Sider III", image: imageBaseURL + "DarkSidersIII.jpg" },
  { title: "Death Stranding: Directors Cut", image: imageBaseURL + "DeathStrandingDirectorsCut.jpg" },
  { title: "Far Cry 3", image: imageBaseURL + "Farcry3.jpg" },
  { title: "Florence", image: imageBaseURL + "Florence.jpg" },
  { title: "Moonlighter", image: imageBaseURL + "Moonlighter.jpg" },
  { title: "Resident Evil VIII: Village", image: imageBaseURL + "ResidentEvilVIIIVillage.jpg" },
  { title: "Stray", image: imageBaseURL + "Stray.jpg" },
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
    img.src = imageBaseURL + "placeholder.jpg";
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
  if (filteredGames.length === 0) {
    gameContainer.innerHTML = "<p>No games found.</p>";
    return;
  }
  filteredGames.forEach((game) => {
    gameContainer.appendChild(createGameCard(game));
  });
}

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const filtered = games.filter((game) =>
    game.title.toLowerCase().includes(query)
  );
  renderGames(filtered);
});

logButton.addEventListener("click", () => {
  gameTitleInput.value = "";
  gameImageInput.value = "";
  modal.style.display = "flex";
});

cancelBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

addGameSubmit.addEventListener("click", () => {
  const title = gameTitleInput.value.trim();
  const image = gameImageInput.value.trim();

  if (!title || !image) {
    alert("Both fields are required.");
    return;
  }

  games.push({ title, image });
  saveGamesToStorage();
  renderGames();
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});

// Initial render
renderGames();
