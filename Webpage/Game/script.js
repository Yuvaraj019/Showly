const gameContainer = document.getElementById("gameContainer");
const searchInput = document.getElementById("searchInput");
const logButton = document.getElementById("logGameBtn");

const modal = document.getElementById("gameModal");
const gameTitleInput = document.getElementById("gameTitle");
const gameImageInput = document.getElementById("gameImage");
const cancelBtn = document.getElementById("cancelBtn");
const submitBtn = document.getElementById("submitBtn");

const imageBaseURL = "https://raw.githubusercontent.com/Yuvaraj019/Showly/main/Webpage/Game/Assets/";

let games = [];

// ✅ Supabase credentials
const supabaseUrl = "https://vwipischnkmsojtzcwdf.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ3aXBpc2Nobmttc29qdHpjd2RmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM2MDA5MDMsImV4cCI6MjA2OTE3NjkwM30.2kbRP6yjMR-QAYph9VzbGWZSggtKnQQAFMfKiN6DGOY";  // Replace with your real anon key
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

// ✅ Render game cards
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
  filteredGames.forEach((game) => {
    gameContainer.appendChild(createGameCard(game));
  });
}

// ✅ Fetch games from Supabase
async function fetchGames() {
  const { data, error } = await supabase
    .from("games")
    .select("*")
    .order("id", { ascending: false });

  if (error) {
    console.error("Error fetching games:", error);
    return;
  }

  games = data;
  renderGames();
}

// ✅ Add game to Supabase
async function addGame(title, image) {
  const { error } = await supabase
    .from("games")
    .insert([{ title, image }]);

  if (error) {
    alert("Failed to log game. Try again.");
    return;
  }

  fetchGames();
  modal.classList.add("hidden");
}

// ✅ Modal handling
logButton.addEventListener("click", () => {
  modal.classList.remove("hidden");
  gameTitleInput.value = "";
  gameImageInput.value = "";
});

cancelBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});

submitBtn.addEventListener("click", () => {
  const title = gameTitleInput.value.trim();
  const image = gameImageInput.value.trim();

  if (!title) return alert("Title is required.");
  if (!image) return alert("Image URL is required.");

  addGame(title, image);
});

// ✅ Search filter
searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const filtered = games.filter((game) =>
    game.title.toLowerCase().includes(query)
  );
  renderGames(filtered);
});

// ✅ Initial load
fetchGames();
