const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Player
let player = {
  x: 100,
  y: 100,
  width: 50,
  height: 50,
  color: "yellow",
  speed: 5
};

// Key input
let keys = {};
document.addEventListener("keydown", e => keys[e.key] = true);
document.addEventListener("keyup", e => keys[e.key] = false);

// Game loop
function gameLoop() {
  // Move player
  if(keys["ArrowUp"]) player.y -= player.speed;
  if(keys["ArrowDown"]) player.y += player.speed;
  if(keys["ArrowLeft"]) player.x -= player.speed;
  if(keys["ArrowRight"]) player.x += player.speed;

  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw player
  ctx.fillStyle = player.color;
  ctx.fillRect(player.x, player.y, player.width, player.height);

  requestAnimationFrame(gameLoop);
}

gameLoop();
