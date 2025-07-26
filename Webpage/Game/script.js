const gameContainer = document.getElementById("gameContainer");
const searchInput = document.getElementById("searchInput");
const logButton = document.getElementById("logGameBtn");

let games = [];

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

function renderGames(filteredGames = games) {
  gameContainer.innerHTML = "";
  filteredGames.forEach((game) => {
    gameContainer.appendChild(createGameCard(game));
  });
}

async function fetchGames() {
  const { data, error } = await supabase
    .from("games")
    .select("*")
    .order("title", { ascending: true });

  if (error) {
    console.error("Fetch error:", error.message);
    return;
  }

  games = data;
  renderGames();
}

async function handleLogGame() {
  const title = prompt("Enter game title:");
  if (!title?.trim()) return alert("Title is required.");

  const image = prompt("Enter image URL:");
  if (!image?.trim()) return alert("Image URL is required.");

  const { error } = await supabase.from("games").insert([
    {
      title: title.trim(),
      image: image.trim(),
    },
  ]);

  if (error) {
    console.error("Insert error:", error.message);
    alert("Failed to save game.");
    return;
  }

  fetchGames(); // Refresh the grid
}

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const filtered = games.filter((game) =>
    game.title.toLowerCase().includes(query)
  );
  renderGames(filtered);
});

logButton.addEventListener("click", handleLogGame);

fetchGames(); // Initial fetch
