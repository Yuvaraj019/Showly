const gameContainer = document.getElementById("gameContainer");
const searchInput = document.getElementById("searchInput");

const gamesTabBtn = document.getElementById("gamesTabBtn");  // New: Games tab button
const showAllBtn = document.getElementById("showAllBtn");    // New: Show All Games button

const defaultGames = [
  {
    "title": "A Plague Tale: Innocence",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/752590/header.jpg?t=1727793332",
    "rating": 9.2,
    "playtime": "12h 54m"
  },
  {
    "title": "A Plague Tale: Requiem",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1182900/header.jpg?t=1728650613",
    "rating": 9.5,
    "playtime": "20h 48m"
  },
  {
    "title": "Assassin's Creed",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/15100/header.jpg?t=1602600542",
    "rating": 7.5,
    "playtime": "20h 00m"
  },
  {
    "title": "Assassin's Creed 2",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/33230/header.jpg?t=1682004272",
    "rating": 8.5,
    "playtime": "26h 00m"
  },
  {
    "title": "Assassin's Creed 3 Remastered",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/911400/header.jpg?t=1692034844"
  },
  {
    "title": "Assassin's Creed Brotherhood",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/48190/header.jpg?t=1681861086"
  },
  {
    "title": "Assassin's Creed Liberation HD",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/260210/header.jpg?t=1747655342"
  },
  {
    "title": "Assassin's Creed Revelations",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/201870/header.jpg?t=1739176298"
  },
  {
    "title": "Assassin's Creed IV Black Flag",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/242050/header.jpg?t=1752168657",
    "rating": 9.5,
    "playtime": "58h 15m"
  },
  {
    "title": "Batman: Arkham Knight",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/208650/header.jpg?t=1745534372"
  },
  {
    "title": "Black Myth: Wukong",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2358720/header.jpg?t=1749182199",
    "rating": 9.9,
    "playtime": "52h 55m"
  },
  {
    "title": "Blasphemous",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/774361/header.jpg?t=1753974290"
  },
  {
    "title": "Call of Duty: Modern Warfare",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2000950/header.jpg?t=1678294805",
    "rating": 9.5,
    "playtime": "10h 15m"
  },
  {
    "title": "Call of Duty: Modern Warfare II",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3595230/ce4d5e53b36cb9d3c4309d1df72bf8663bbbc7ef/header.jpg?t=1755227025",
    "rating": 9.8,
    "playtime": "10h 35m"
  },
  {
    "title": "Call of Duty: Modern Warfare Remastered",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/393080/header.jpg?t=1748021557"
  },
  {
    "title": "Children of Morta",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/330020/header.jpg?t=1733749085"
  },
   {
    "title": "Control Ultimate Edition",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/870780/header.jpg?t=1755611834",
    "rating": 8.8,
    "playtime": "38h 42m"
  },
  {
    "title": "Darksiders III",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/606280/header.jpg?t=1725285714"
  },
  {
    "title": "Death Stranding: Director's Cut",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1850570/header.jpg?t=1750697259"
  },
  {
    "title": "ELDEN RING",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1245620/header.jpg?t=1748630546",
    "rating": 9.8,
    "playtime": "147h 32m"
  },
  {
    "title": "Far Cry 3",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/220240/header.jpg?t=1752169206"
  },
  {
    "title": "Florence",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1102130/header.jpg?t=1729099629"
  },
  {
    "title": "Ghost of Tsushima Director's Cut",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2215430/header.jpg?t=1750948552",
    "rating": 9.8,
    "playtime": "78h 42m"
  },
  {
    "title": "Hi-Fi RUSH",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1817230/header.jpg?t=1750779437"
  },
  {
    "title": "God of War",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1593500/header.jpg?t=1750949016",
    "rating": 9.8,
    "playtime": "72h 28m"
  },
  {
    "title": "God of War Ragnarok",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2322010/header.jpg?t=1750909504",
    "rating": 9.9,
    "playtime": "92h 25m"
  },
  {
    "title": "Hollow Knight",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/367520/header.jpg?t=1695270428",
    "rating": 9.2,
    "playtime": "42h 32m"
  },
  {
    "title": "Hogwarts Legacy",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/990080/a3cdc6f40d97df8ac993679c2dd1edeb5222421e/header.jpg?t=1753912780",
    "rating": 9.8,
    "playtime": "75h 52m"
  },
  {
    "title": "Horizon Zero Dawn Remastered",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2561580/header.jpg?t=1750952943",
    "rating": 9.7,
    "playtime": "57h 32m"
  },
  {
    "title": "It Takes Two",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1426210/header.jpg?t=1749142249"
  },
  {
    "title": "Kena: Bridge of Spirits",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1954200/header.jpg?t=1664298117"
  },
  {
    "title": "Mafia II: Definitive Edition",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1030830/header.jpg?t=1747682590",
    "rating": 9.0,
    "playtime": "29h 32m"
  },
  {
    "title": "Mafia: Definitive Edition",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1030840/header.jpg?t=1750802973",
  },
  {
    "title": "Marvel's Guardians of the Galaxy",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1088850/header.jpg?t=1751567846"
  },
  {
    "title": "Marvel's Spider-Man 2",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2651280/header.jpg?t=1750954033"
  },
  {
    "title": "Marvel's Spider-Man: Miles Morales",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1817190/header.jpg?t=1750955096"
  },
  {
    "title": "Middle-earth: Shadow of Mordor",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/241930/header.jpg?t=1745613450"
  },
  {
    "title": "Middle-earth: Shadow of War",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/356190/header.jpg?t=1747346596",
    "rating": 9.2,
    "playtime": "44h 00m"
  },
  {
    "title": "Moonlighter",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/606150/header.jpg?t=1749470807"
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
    "title": "New Super Lucky's Tale",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1038300/header.jpg?t=1708370921"
  },
  {
    "title": "Outlast",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/238320/header.jpg?t=1666817106"
  },
  {
    "title": "Outlast 2",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/414700/header.jpg?t=1618944453"
  },
  {
    "title": "Prince of Persia The Lost Crown",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2751000/header.jpg?t=1736259456"
  },
  {
    "title": "Red Dead Redemption",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2668510/header.jpg?t=1741118459"
  },
  {
    "title": "Resident Evil 2",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/883710/header.jpg?t=1728438541"
  },
  {
    "title": "Resident Evil VIII: Village",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1196590/header.jpg?t=1741142800"
  },
  {
    "title": "Rise of the Tomb Raider",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/391220/header.jpg?t=1729011444"
  },
  {
    "title": "Ryse: Son of Rome",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/302510/header.jpg?t=1588670554"
  },
  {
    "title": "Shadow Warrior",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/233130/header.jpg?t=1710246206"
  },
  {
    "title": "Sifu",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2138710/header.jpg?t=1754555101"
  },
  {
    "title": "Sleeping Dogs: Definitive Edition",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/307690/header.jpg?t=1602800785"
  },
  {
    "title": "State of Decay: YOSE",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/329430/header.jpg?t=1741378961"
  },
  {
    "title": "Stray",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1332010/header.jpg?t=1733260906"
  },
  {
    "title": "Sunset Overdrive",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/847370/header.jpg?t=1667851405"
  },
  {
    "title": "The Council",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/287630/header.jpg?t=1728650217"
  },
  {
    "title": "The Last of Us Part I",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1888930/header.jpg?t=1750959031"
  },
  {
    "title": "Tomb Raider",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/203160/header.jpg?t=1729010886"
  },
  {
    "title": "Uncharted: Drake's Fortune",
    "image": "https://i0.wp.com/roguewatson.com/wp-content/uploads/2018/06/uncharted-drakes-fortune-logo.jpg?fit=1200%2C675&ssl=1"
  },
  {
    "title": "Watch Dogs",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/243470/header.jpg?t=1739177057"
  },
  {
    "title": "Watch Dogs 2",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/447040/header.jpg?t=1751986887"
  },
  {
    "title": "Yooka-Laylee and the Impossible Lair",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/846870/header.jpg?t=1729002447"
  },
  {
    "title": "嗜血印 Bloody Spell",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/992300/header.jpg?t=1755193653"
  },
  {
    "title": "Jusant",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1977170/header.jpg?t=1753868715"
  },
  {
    "title": "A Way Out",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1222700/header.jpg?t=1730912036"
  },
  {
    "title": "Raji: An Ancient Epic",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/730390/763ed2196c07a1ed6348f0f4b97a5aff990b3d14/header.jpg?t=1746720945"
  },
  {
    "title": "Kung Fu Strike - The Warrior's Rise",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/212030/header.jpg?t=1568789294"
  },
  {
    "title": "INSIDE",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/304430/header.jpg?t=1751371624"
  },
  {
    "title": "Mortal Kombat X",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/307780/header.jpg"
  },
  {
    "title": "Outlast: Whistleblower",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/273300/header.jpg"
  },
  {
    "title": "Katto: Rising Tides",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2999250/header.jpg"
  },
  {
    "title": "Gris",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/683320/header.jpg"
  },
  {
    "title": "Dust and Aliens",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2190230/header.jpg"
  },
  {
    "title": "A Juggler's Tale",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1252830/header.jpg?t=1748561340"
  },
  {
    "title": "Steamrush",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2647100/header.jpg"
  },
  {
    "title": "Light of Alariya",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2142840/header.jpg"
  },
  {
    "title": "Venba",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1491670/header.jpg?t=1753814411"
  },
  {
    "title": "Live Adventure",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1798210/header.jpg"
  },
  {
    "title": "Marie's Room",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/648390/header.jpg?t=1652529740"
  },
  {
    "title": "Jivana",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1815340/header.jpg?t=1642936696"
  },
  {
    "title": "Shadow Burglar",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1881340/header.jpg"
  },
  {
    "title": "Tales of Kenzera: ZAU",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2316580/header.jpg?t=1749036631"
  }
]

// Add rating 0 by default for games without rating
defaultGames.forEach(g => {
  if (!g.rating) g.rating = 0;
});

let loggedGames = JSON.parse(localStorage.getItem("loggedGames")) || [];
loggedGames.forEach(g => {
  if (!g.rating) g.rating = 0;
});

const gamesPerPage = 16;
let currentPage = 1;
let ratingAsc = null;
let timeAsc = null;
let showAll = false;  // NEW: flag to track Show All mode

function saveLoggedGames() {
  localStorage.setItem("loggedGames", JSON.stringify(loggedGames));
}

function createGameCard({ title, image, rating, playtime }) {
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

  const ratingBadge = document.createElement("div");
  ratingBadge.className = "rating-badge";
  ratingBadge.textContent = rating > 0 ? rating.toFixed(1) : "N/A";

  const playtimeBadge = document.createElement("div");
  playtimeBadge.className = "playtime-badge";
  playtimeBadge.textContent = playtime || "";

  gameDiv.append(img, ratingBadge, playtimeBadge, caption);
  return gameDiv;
}

function paginateGames(games, page) {
  const start = (page - 1) * gamesPerPage;
  return games.slice(start, start + gamesPerPage);
}

function renderPagination(filteredGames) {
  const pagination = document.getElementById("paginationContainer");
  pagination.innerHTML = "";

  if (showAll) {
    pagination.style.display = "none";  // Hide pagination if showing all games
    return;
  }

  pagination.style.display = "flex";  // Show pagination when paginated

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

// Modify renderGames to use showAll flag
function renderGames(searchTerm = "") {
  let allGames = [...loggedGames, ...defaultGames];
  const lowerSearch = searchTerm.toLowerCase();

  let filteredGames = allGames.filter(game =>
    game.title.toLowerCase().includes(lowerSearch)
  );

  if (ratingAsc !== null) {
    filteredGames.sort((a, b) =>
      ratingAsc ? a.rating - b.rating : b.rating - a.rating
    );
  } else if (timeAsc !== null) {
    const parseTime = time => {
      if (!time) return 0;
      const match = time.match(/(\d+)h\s*(\d+)?m?/);
      const hours = match ? parseInt(match[1]) : 0;
      const mins = match && match[2] ? parseInt(match[2]) : 0;
      return hours * 60 + mins;
    };
    filteredGames.sort((a, b) =>
      timeAsc ? parseTime(a.playtime) - parseTime(b.playtime)
              : parseTime(b.playtime) - parseTime(a.playtime)
    );
  }

  let gamesToShow;
  if (showAll) {
    gamesToShow = filteredGames;  // Show all filtered games at once
  } else {
    gamesToShow = paginateGames(filteredGames, currentPage);
  }

  gameContainer.innerHTML = "";
  gamesToShow.forEach(game => {
    const card = createGameCard(game);
    gameContainer.appendChild(card);
  });

  renderPagination(filteredGames);
}

const filtersDiv = document.createElement("div");
filtersDiv.className = "filters";
document.querySelector("nav .sort-filters")?.appendChild(filtersDiv);

const sortRatingBtn = document.createElement("button");
const sortTimeBtn = document.createElement("button");
const resetBtn = document.createElement("button");

sortRatingBtn.textContent = "Sort by Rating";
sortTimeBtn.textContent = "Sort by Time Played";
resetBtn.textContent = "Reset Filters";

filtersDiv.append(sortRatingBtn, sortTimeBtn, resetBtn);

function updateSortButtonIcons() {
  sortRatingBtn.textContent = `Sort by Rating ${
    ratingAsc === null ? "" : ratingAsc ? "↑" : "↓"
  }`;
  sortTimeBtn.textContent = `Sort by Time Played ${
    timeAsc === null ? "" : timeAsc ? "↑" : "↓"
  }`;
}

sortRatingBtn.addEventListener("click", () => {
  ratingAsc = ratingAsc === null ? false : !ratingAsc;
  timeAsc = null;
  updateSortButtonIcons();
  renderGames(searchInput.value);
});

sortTimeBtn.addEventListener("click", () => {
  timeAsc = timeAsc === null ? false : !timeAsc;
  ratingAsc = null;
  updateSortButtonIcons();
  renderGames(searchInput.value);
});

resetBtn.addEventListener("click", () => {
  ratingAsc = null;
  timeAsc = null;
  searchInput.value = "";
  currentPage = 1;
  updateSortButtonIcons();
  renderGames();
});

searchInput.addEventListener("input", () => {
  currentPage = 1;
  renderGames(searchInput.value);
});

// === NEW: Event listeners for tabs ===

showAllBtn.addEventListener("click", () => {
  showAll = true;
  currentPage = 1;
  renderGames(searchInput.value);

  // Update active tab styles
  gamesTabBtn.classList.remove("active-tab");
  showAllBtn.classList.add("active-tab");
});

gamesTabBtn.addEventListener("click", () => {
  showAll = false;
  currentPage = 1;
  renderGames(searchInput.value);

  // Update active tab styles
  gamesTabBtn.classList.add("active-tab");
  showAllBtn.classList.remove("active-tab");
});

// Initial UI state
updateSortButtonIcons();
renderGames();
gamesTabBtn.classList.add("active-tab");








