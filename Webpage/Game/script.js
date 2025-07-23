const gameContainer = document.getElementById("gameContainer");

const games = [
  {
    title: "A Plague Tale: Innocence",
    image: "Assets/APlagueTaleInnocence.jpg"
  },
  {
    title: "A Plague Tale: Requiem",
    image: "Assets/APlagueTaleRequiem.jpg"
  }
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
