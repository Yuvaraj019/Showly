// Firebase config (replace with yours)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "YOUR_DB_URL",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_BUCKET",
  messagingSenderId: "YOUR_MSG_ID",
  appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

const gameContainer = document.getElementById("gameContainer");
const searchInput = document.getElementById("searchInput");
const logButton = document.getElementById("logGameBtn");

let allGames = [];

function saveGameToFirebase(game) {
  db.ref("games").push(game);
}

function fetchGamesFromFirebase() {
  db.ref("games").on("value", snapshot => {
    const data = snapshot.val();
    allGames = data ? Object.values(data) : [];
    renderGames(allGames);
  });
}

function createGameCard({ title, image }) {
  const div = document.createElement("div");
  div.className = "game";

  const img = document.createElement("img");
  img.src = image;
  img.alt = title;
  img.onerror = () => {
    img.src = "Assets/placeholder.jpg";
  };

  const titleDiv = document.createElement("div");
  titleDiv.className = "game-title";
  titleDiv.textContent = title;

  div.append(img, titleDiv);
  return div;
}

function renderGames(games) {
  gameContainer.innerHTML = "";
  games.forEach(game => gameContainer.appendChild(createGameCard(game)));
}

logButton.addEventListener("click", () => {
  const title = prompt("Enter game title:");
  if (!title) return;

  const image = prompt("Enter image URL or path:");
  if (!image) return;

  const newGame = { title: title.trim(), image: image.trim() };
  saveGameToFirebase(newGame);
});

searchInput.addEventListener("input", () => {
  const q = searchInput.value.toLowerCase();
  const filtered = allGames.filter(game => game.title.toLowerCase().includes(q));
  renderGames(filtered);
});

fetchGamesFromFirebase();
