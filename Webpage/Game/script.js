const gameContainer = document.getElementById("gameContainer");
const searchInput = document.getElementById("searchInput");
const logButton = document.getElementById("logGameBtn");

const modal = document.getElementById("gameModal");
const gameTitleInput = document.getElementById("gameTitle");
const gameImageInput = document.getElementById("gameImage");
const cancelBtn = document.getElementById("cancelBtn");
const submitBtn = document.getElementById("submitBtn");

const SUPABASE_URL = "https://vwipischnkmsojtzcwdf.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ3aXBpc2Nobmttc29qdHpjd2RmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM2MDA5MDMsImV4cCI6MjA2OTE3NjkwM30.2kbRP6yjMR-QAYph9VzbGWZSggtKnQQAFMfKiN6DGOY";

const imageBaseURL = "https://raw.githubusercontent.com/Yuvaraj019/Showly/main/Webpage/Game/Assets/";

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Create game card UI
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

// Render games
function renderGames(games) {
  gameContainer.innerHTML = "";
  games.forEach((game) => {
    gameContainer.appendChild(createGameCard(game));
  });
}

// Load games from Supabase
async function loadGames() {
  const { data, error } = await supabase.from("games").select("*").order("created_at", { ascending: false });
  if (error) {
    console.error("Failed to load games:", error.message);
    return;
  }
  renderGames(data);
}

// Modal open
logButton.addEventListener("click", () => {
  modal.classList.remove("hidden");
  gameTitleInput.value = "";
  gameImageInput.value = "";
});

// Modal cancel
cancelBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});

// Submit new game
submitBtn.addEventListener("click", async () => {
  const title = gameTitleInput.value.trim();
  const image = gameImageInput.value.trim();

  if (!title) return alert("Title is required.");
  if (!image) return alert("Image URL is required.");

  const { error } = await supabase.from("games").insert([{ title, image }]);
  if (error) {
    alert("Failed to add game.");
    console.error(error.message);
    return;
  }

  modal.classList.add("hidden");
  await loadGames(); // refresh list
});

// Search games
searchInput.addEventListener("input", async () => {
  const query = searchInput.value.toLowerCase();
  const { data } = await supabase.from("games").select("*");
  const filtered = data.filter((game) =>
    game.title.toLowerCase().includes(query)
  );
  renderGames(filtered);
});

// Initial load
loadGames();
