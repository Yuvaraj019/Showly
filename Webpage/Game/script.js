const gameContainer = document.getElementById("gameContainer");
const searchInput = document.getElementById("searchInput");
const logButton = document.getElementById("logGameBtn");

const defaultGames = [
  { title: "A Plague Tale: Innocence", image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1q0f.jpg" },
  { title: "A Plague Tale: Requiem", image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co3wiw.jpg" },
  { title: "Black Myth: Wukong", image: "https://cdn.cloudflare.steamstatic.com/steam/apps/2319910/header.jpg" },
  { title: "Darksiders III", image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1rxm.jpg" },
  { title: "Death Stranding: Director's Cut", image: "https://image.api.playstation.com/vulcan/img/rnd/202010/3021/D2VnHJ2ZAEKh6bdMMkV88oPu.png" },
  { title: "Far Cry 3", image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1rxf.jpg" },
  { title: "Florence", image: "https://i.imgur.com/fy2xW13.jpg" },
  { title: "Moonlighter", image: "https://i.imgur.com/l1U3rRj.jpg" },
  { title: "Resident Evil VIII: Village", image: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_RESIDENTEVILVillage_GoldEdition_CAPCOM_S2_1200x1600-138f799ed2f3e3fe6bc91a8a1743c5e4" },
  { title: "Stray", image: "https://cdn1.epicgames.com/offer/fd58a86f328940fdb67c6d9ab6d6e8b4/EGS_Stray_BlueTwelveStudio_S1_2560x1440-65156175f3b1580c1f05526c5bdb1e6c" },
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
    img.src = "https://via.placeholder.com/300x400?text=Image+Not+Found";
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

  const image = prompt("Enter full image URL:");
  if (!image || !image.trim()) return alert("Image URL is required.");

  const newGame = { title: title.trim(), image: image.trim() };

  loggedGames.push(newGame);
  saveLoggedGames();
  renderGames(searchInput.value);
}

searchInput.addEventListener("input", () => {
  renderGames(searchInput.value);
});

logButton.addEventListener("click", handleLogGame);

renderGames();
