const SUPABASE_URL = "https://vwipischnkmsojtzcwdf.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ3aXBpc2Nobmttc29qdHpjd2RmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM2MDA5MDMsImV4cCI6MjA2OTE3NjkwM30.2kbRP6yjMR-QAYph9VzbGWZSggtKnQQAFMfKiN6DGOY";

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

const gameContainer = document.getElementById("gameContainer");
const searchInput = document.getElementById("searchInput");
const logButton = document.getElementById("logGameBtn");

const modal = document.getElementById("gameModal");
const gameTitleInput = document.getElementById("gameTitle");
const gameImageInput = document.getElementById("gameImage");
const cancelBtn = document.getElementById("cancelBtn");
const submitBtn = document.getElementById("submitBtn");

// Load all games
async function loadGames() {
  const { data, error } = await supabase.from("games").select("*").order("title");
  if (error) {
    console.error("Error loading games:", error.message);
    return;
  }
  renderGames(data);
}

function createGameCard({ title, image }) {
  const gameDiv = document.createElement("div");
  gameDiv.className = "game";

  const img = document.createElement("img");
  img.src = image;
  img.alt = title;
  img.loading = "lazy";

  const caption = document.createElement("div");
  caption.className = "game-title";
  caption.textContent = title;

  gameDiv.append(img, caption);
  return gameDiv;
}

function renderGames(games) {
  gameContainer.innerHTML = "";
  games.forEach((game) => {
    gameContainer.appendChild(createGameCard(game));
  });
}

async function addGame(title, image) {
  const { error } = await supabase.from("games").insert([{ title, image }]);
  if (error) {
    alert("Error adding game.");
    console.error(error);
  } else {
    loadGames(); // Refresh after adding
  }
}

// Modal actions
logButton.addEventListener("click", () => {
  modal.classList.remove("hidden");
  gameTitleInput.value = "";
  gameImageInput.value = "";
});

cancelBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});

submitBtn.addEventListener("click", async () => {
  const title = gameTitleInput.value.trim();
  const image = gameImageInput.value.trim();
  if (!title || !image) {
    alert("Please provide both title and image.");
    return;
  }

  await addGame(title, image);
  modal.classList.add("hidden");
});

// Search games
searchInput.addEventListener("input", async () => {
  const query = searchInput.value.toLowerCase();
  const { data, error } = await supabase
    .from("games")
    .select("*")
    .ilike("title", `%${query}%`);
  if (!error) renderGames(data);
});

loadGames();
