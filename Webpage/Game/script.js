// Supabase setup - must be at the top!
const supabaseUrl = "https://rlzuanjjeajyyhaebbos.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJsenVhbmpqZWFqeXloYWViYm9zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM1NTgyMjIsImV4cCI6MjA2OTEzNDIyMn0.vZFNSoCzGxqkqmO4ac0ScRw4xOVoz2scTAPX2Eq0WCw";

const supabase = supabase.createClient(supabaseUrl, supabaseKey);

const gameContainer = document.getElementById("gameContainer");
const searchInput = document.getElementById("searchInput");
const logButton = document.getElementById("logGameBtn");

// Placeholder image in case of missing image
const placeholderImage = "https://via.placeholder.com/300x400?text=Image+Not+Found";

// Fetch and render games from Supabase
async function fetchGames() {
  const { data, error } = await supabase.from("games").select("*").order("id", { ascending: false });
  if (error) {
    alert("Error loading games: " + error.message);
    return [];
  }
  return data;
}

function createGameCard({ title, image }) {
  const gameDiv = document.createElement("div");
  gameDiv.className = "game";

  const img = document.createElement("img");
  img.src = image || placeholderImage;
  img.alt = title;
  img.loading = "lazy";
  img.onerror = () => {
    img.src = placeholderImage;
    img.alt = "Image not found";
  };

  const caption = document.createElement("div");
  caption.className = "game-title";
  caption.textContent = title;

  gameDiv.append(img, caption);
  return gameDiv;
}

async function renderGames(filteredGames) {
  gameContainer.innerHTML = "";

  if (!filteredGames) {
    // If no filteredGames provided, fetch all
    filteredGames = await fetchGames();
  }

  if (filteredGames.length === 0) {
    gameContainer.innerHTML = "<p>No games found.</p>";
    return;
  }

  filteredGames.forEach((game) => {
    gameContainer.appendChild(createGameCard(game));
  });
}

// Log a new game to Supabase
async function handleLogGame() {
  const title = prompt("Enter game title:");
  if (!title || !title.trim()) return alert("Title cannot be empty.");

  const image = prompt("Enter image URL or path:");
  if (!image || !image.trim()) return alert("Image path is required.");

  const { data, error } = await supabase.from("games").insert([{ title: title.trim(), image: image.trim() }]);
  if (error) {
    alert("Error adding game: " + error.message);
    return;
  }

  await renderGames(); // refresh the list
}

// Search functionality
searchInput.addEventListener("input", async () => {
  const query = searchInput.value.toLowerCase();

  const { data, error } = await supabase
    .from("games")
    .select("*")
    .ilike("title", `%${query}%`)
    .order("id", { ascending: false });

  if (error) {
    alert("Search error: " + error.message);
    return;
  }

  renderGames(data);
});

logButton.addEventListener("click", handleLogGame);

// Initial render on page load
renderGames();
