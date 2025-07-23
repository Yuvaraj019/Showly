const gameContainer = document.getElementById("gameContainer");

const games = [
  {
    title: "A Plague Tale: Innocence",
    image: "Assets/APlagueTaleInnocence.jpg"
  },
  {
    title: "A Plague Tale: Requiem",
    image: "Assets/APlagueTaleRequiem.jpg"
  },
  {
    title: "Black Myth: Wukong",
    image: "Assets/BlackMythWuKong.jpg"
  },
  {
    title: "Dark Sider III",
    image: "Assets/DarkSidersIII.jpg"
  },
  {
    title: "Death Stranding: Directors Cut",
    image: "Assets/DeathStrandingDirectorsCut.jpg"
  },
  {
    title: "Far Cry 3",
    image: "Assets/Farcry3.jpg"
  },
  {
    title: "Florence",
    image: "Assets/Florence.jpg"
  },
  {
    title: "Moonlighter",
    image: "Assets/Moonlighter.jpg"
  },
  {
    title: "Resident Evil VIII: Village",
    image: "Assets/ResidentEvilVIIIVillage.jpg"
  },
  {
    title: "Stray",
    image: "Assets/Stray.jpg"
  },
];

games.forEach(game => {
  const gameDiv = document.createElement("div");
  gameDiv.className = "game";

  const img = document.createElement("img");
  img.src = game.image;
  img.alt = game.title;
  img.onerror = () => {
    img.src = "Assets/placeholder.jpg";
    img.alt = "Image not found";
  };

  const caption = document.createElement("div");
  caption.className = "game-title";
  caption.textContent = game.title;

  gameDiv.appendChild(img);
  gameDiv.appendChild(caption);
  gameContainer.appendChild(gameDiv);
});
