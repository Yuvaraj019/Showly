const gameContainer = document.getElementById("gameContainer");
const searchInput = document.getElementById("searchInput");
const logButton = document.getElementById("logGameBtn");

const defaultGames = [
  {
    title: "A Plague Tale: Innocence",
    image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/752590/header.jpg?t=1727793332"
  },
  {
    title: "A Plague Tale: Requiem",
    image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1182900/header.jpg?t=1728650613"
  },
  {
    title: "Assassin’s Creed® IV Black Flag™",
    image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/242050/header.jpg?t=1752168657"
  },
  {
    title: "Batman™: Arkham Knight",
    image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/208650/header.jpg?t=1745534372"
  },
  {
    title: "Black Myth: Wukong",
    image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2358720/header.jpg?t=1749182199"
  },
  {
    title: "Darksiders III",
    image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/606280/header.jpg?t=1725285714"
  },
  {
    title: "Death Stranding: Director's Cut",
    image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1850570/header.jpg?t=1750697259"
  },
  {
    title: "Far Cry 3",
    image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/220240/header.jpg?t=1752169206"
  },
  {
    title: "Florence",
    image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1102130/header.jpg?t=1729099629"
  },
  {
    title: "Ghost of Tsushima DIRECTOR'S CUT",
    image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2215430/header.jpg?t=1750948552"
  },
  {
    title: "Hi-Fi RUSH",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1817230/header.jpg?t=1750779437"
  },
  {
    title: "Horizon Zero Dawn™ Remastered",
    image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2561580/header.jpg?t=1750952943"
  },
  {
    title: "Kena: Bridge of Spirits",
    image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1954200/header.jpg?t=1664298117"
  },
  {
    title: "Marvel's Guardians of the Galaxy",
    image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1088850/header.jpg?t=1751567846"
  },
  {
    title: "Marvel's Spider-Man 2",
    image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2651280/header.jpg?t=1750954033"
  },
  {
    title: "Marvel’s Spider-Man Remastered",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1817070/header.jpg?t=1750955096"
  },
  {
    title: "Middle-earth™: Shadow of War™",
    image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/356190/header.jpg?t=1747346596"
  },
  {
    title: "Middle-earth: Shadow of Mordor",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/241930/header.jpg?t=1745613450"
  },
  {
    title: "Moonlighter",
    image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/606150/header.jpg?t=1749470807"
  },
  {
    title: "Red Dead Redemption",
    image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2668510/header.jpg?t=1741118459"
  },
  {
    title: "Resident Evil VIII: Village",
    image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1196590/header.jpg?t=1741142800"
  },
  {
    title: "Stray",
    image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1332010/header.jpg?t=1733260906"
  },
  {
    title: "ELDEN RING",
    image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1245620/header.jpg?t=1748630546"
  },
  {
    title: "God of War Ragnarök",
    image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2322010/header.jpg?t=1750909504"
  },
  {
    title: "Hogwarts Legacy",
    image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/990080/a3cdc6f40d97df8ac993679c2dd1edeb5222421e/header.jpg?t=1753912780"
  },
  {
    title: "God Of War",
    image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1593500/header.jpg?t=1750949016"
  },
  {
    title: "Blasphemous",
    image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/774361/header.jpg?t=1753974290"
  },
  {
    title: "Prince of Persia The Lost Crown",
    image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2751000/header.jpg?t=1736259456"
  },
  {
    title: "State of Decay: YOSE",
    image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/329430/header.jpg?t=1741378961"
  },
  {
    title: "Watch_Dogs",
    image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/243470/header.jpg?t=1739177057"
  },
  {
    title: "Mafia III: Definitive Edition",
    image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/360430/header.jpg?t=1746716602"
  },
  {
    title: "Assassin's Creed III Remastered",
    image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/911400/header.jpg?t=1692034844"
  },
  {
    title: "Yooka-Laylee and the Impossible Lair",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/846870/header.jpg?t=1729002447"
  },
  {
    title: "Shadow Warrior",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/233130/header.jpg?t=1710246206"
  },
  {
    title: "Assassin's Creed 2",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/33230/header.jpg?t=1682004272"
  },
  {
    title: "Assassin’s Creed Brotherhood",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/48190/header.jpg?t=1681861086"
  },
  {
    title: "Rise of the Tomb Raider",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/391220/header.jpg?t=1729011444"
  },
  {
    title: "Sleeping Dogs: Definitive Edition",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/307690/header.jpg?t=1602800785"
  },
  {
  title: "Assassin's Creed® Revelations",
  image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/201870/header.jpg?t=1739176298"
},
{
  title: "Marvel's Guardians of the Galaxy",
  image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1088850/header.jpg?t=1751567846"
},
{
  title: "Assassin's Creed",
  image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/15100/header.jpg?t=1602600542"
},
{
  title: "The Last of Us™ Part I",
  image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1888930/header.jpg?t=1750959031"
},
{
  title: "Watch_Dogs® 2",
  image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/447040/header.jpg?t=1751986887"
},
{
  title: "Resident Evil 2",
  image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/883710/header.jpg?t=1728438541"
},
{
  title: "Sunset Overdrive",
  image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/847370/header.jpg?t=1667851405"
},
{
  title: "The Council",
  image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/287630/header.jpg?t=1728650217"
},
{
  "title": "Call of Duty®: Modern Warfare® Remastered",
  "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/393080/header.jpg?t=1748021557"
},
{
  "title": "Ryse: Son of Rome",
  "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/302510/header.jpg?t=1588670554"
},
{
  "title": "Outlast 2",
  "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/414700/header.jpg?t=1618944453"
},
{
  "title": "嗜血印 Bloody Spell",
  "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/992300/header.jpg?t=1755193653"
},
{
  "title": "Uncharted: Drake's Fortune",
  "image": "https://i0.wp.com/roguewatson.com/wp-content/uploads/2018/06/uncharted-drakes-fortune-logo.jpg?fit=1200%2C675&ssl=1"
},
{
  "title": "Assassin’s Creed® Liberation HD",
  "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/260210/header.jpg?t=1747655342"
},
{
  "title": "Outlast",
  "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/238320/header.jpg?t=1666817106"
},
{
  "title": "Mafia II: Definitive Edition",
  "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1030830/header.jpg?t=1747682590"
},
{
  "title": "Marvel’s Spider-Man: Miles Morales",
  "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1817190/header.jpg?t=1750955096"
},
{
  "title": "Children of Morta",
  "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/330020/header.jpg?t=1733749085"
},
{
  "title": "Sifu",
  "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2138710/header.jpg?t=1754555101"
},
{
  "title": "It Takes Two",
  "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1426210/header.jpg?t=1749142249"
},
{
  "title": "New Super Lucky's Tale",
  "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1038300/header.jpg?t=1708370921"
},
{
  "title": "NARUTO: Ultimate Ninja STORM",
  "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/495140/header.jpg?t=1701305352"
},
{
  "title": "NARUTO SHIPPUDEN: Ultimate Ninja STORM 3 Full Burst HD",
  "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/234670/header.jpg?t=1703662542"
},
{
  "title": "Mafia: Definitive Edition",
  "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1030840/header.jpg?t=1750802973"
},
{
  "title": "Ori and the Will of the Wisps",
  "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1057090/header.jpg?t=1701967625"
},
{
  "title": "Tomb Raider",
  "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/203160/header.jpg?t=1729010886"
}
];

let loggedGames = JSON.parse(localStorage.getItem("loggedGames")) || [];
const gamesPerPage = 16;
let currentPage = 1;

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

function paginateGames(games, page) {
  const start = (page - 1) * gamesPerPage;
  return games.slice(start, start + gamesPerPage);
}

function renderPagination(filteredGames) {
  const pagination = document.getElementById("paginationContainer");
  pagination.innerHTML = "";

  const pageCount = Math.ceil(filteredGames.length / gamesPerPage);
  for (let i = 1; i <= pageCount; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    if (i === currentPage) btn.classList.add("active");

    btn.addEventListener("click", () => {
      currentPage = i;
      renderGames(searchInput.value);
    });

    pagination.appendChild(btn);
  }
}

function renderGames(filter = "") {
  gameContainer.innerHTML = "";

  const allGames = [...defaultGames, ...loggedGames];
  const filtered = allGames.filter((game) =>
    game.title.toLowerCase().includes(filter.toLowerCase())
  );

  const paginated = paginateGames(filtered, currentPage);
  paginated.forEach((game) => {
    gameContainer.appendChild(createGameCard(game));
  });

  renderPagination(filtered);
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
  currentPage = 1;
  renderGames(searchInput.value);
});

logButton.addEventListener("click", handleLogGame);

renderGames();


