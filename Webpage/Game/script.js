// Initialize Supabase client with your project URL and anon key
const supabaseUrl = "https://rlzuanjjeajyyhaebbos.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJsenVhbmpqZWFqeXloYWViYm9zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM1NTgyMjIsImV4cCI6MjA2OTEzNDIyMn0.vZFNSoCzGxqkqmO4ac0ScRw4xOVoz2scTAPX2Eq0WCw";

const supabase = supabase.createClient(supabaseUrl, supabaseKey);

const gameContainer = document.getElementById("gameContainer");
const searchInput = document.getElementById("searchInput");
const logButton = document.getElementById("logGameBtn");

// Fetch games from Supabase
async function fetchGames() {
  const { data, error } = await supabase.from("games").select("*").order("id", { ascending: true });
  if (error) {
    console.error("Error fetching games:", error);
    return [];
  }
  return data;
}

// Render game cards
function createGameCard({ title, image }) {
  const gameDiv = document.createElement("div");
  gameDiv.className = "game";

  const img = document.createElement("img");
  img.src = image;
  img.alt = title;
  img.loading = "lazy";
  img.onerror = () => {
    img.src = "https://via.placeholder.com/260x140?text=No+Image";
    img.alt = "Image not found";
  };

  const caption = document.createElement("div");
  caption.className = "game-title";
  caption.textContent = title;

  gameDiv.append(img, caption);
  return gameDiv;
}

async function renderGames(filterText = "") {
  let games = await fetchGames();

  if (filterText) {
    const query = filterText.toLowerCase();
    games = games.filter((game) => game.title.toLowerCase().includes(query));
  }

  gameContainer.innerHTML = "";
  games.forEach((game) => {
    gameContainer.appendChild(createGameCard(game));
  });
}

// Add new game to Supabase
async function handleLogGame() {
  const title = prompt("Enter game title:");
  if (!title || !title.trim()) return alert("Title cannot be empty.");

  const image = prompt("Enter image URL:");
  if (!image || !image.trim()) return alert("Image URL is required.");

  const { error } = await supabase.from("games").insert([{ title: title.trim(), image: image.trim() }]);

  if (error) {
    alert("Failed to add game: " + error.message);
    return;
  }

  renderGames(searchInput.value);
}

// Event listeners
searchInput.addEventListener("input", () => {
  renderGames(searchInput.value);
});

logButton.addEventListener("click", handleLogGame);

// Initial load
renderGames();
