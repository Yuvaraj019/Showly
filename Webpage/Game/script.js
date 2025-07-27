const gameContainer = document.getElementById("gameContainer");
const searchInput = document.getElementById("searchInput");
const logButton = document.getElementById("logGameBtn");

const imageBaseURL = "Assets/";

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

let loggedGames = JSON.parse(localStorage.getItem("loggedGames")) || [];

function saveLoggedGames() {
  localStorage.setItem("loggedGames", JSON.stringify(loggedGames));
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

function renderGames(filter = "") {
  gameContainer.innerHTML = "";
  const allGames = [...defaultGames, ...loggedGames];
  const filtered = allGames.filter((game) =>
    game.title.toLowerCase().includes(filter.toLowerCase())
  );
  filtered.forEach((game) => {
    gameContainer.appendChild(createGameCard(game));
  });
}

function handleLogGame() {
  const title = prompt("Enter game title:");
  if (!title || !title.trim()) return alert("Title cannot be empty.");

  const image = prompt("Enter image file name (inside Assets folder):");
  if (!image || !image.trim()) return alert("Image path is required.");

  const imagePath = imageBaseURL + image.trim();
  const newGame = { title: title.trim(), image: imagePath };

  loggedGames.push(newGame);
  saveLoggedGames();
  renderGames(searchInput.value);
}

searchInput.addEventListener("input", () => {
  renderGames(searchInput.value);
});

logButton.addEventListener("click", handleLogGame);

renderGames();
