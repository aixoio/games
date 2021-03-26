var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
canvas.width = "400";
canvas.height = "400";
document.onkeydown = keyPush;
setInterval(game, (1000 / 15));
var xv = 0;
var yv = 0;
var px = 10;
var py = 10;
var gs = 20;
var tc = 20;
var ax = 15;
var ay = 15;
var trail = [];
var tail = 1;
function game() {
  px += xv;
  py += yv;
  if (px < 0) {
    px = (tc - 1);
  }
  if (px > (tc - 1)) {
    px = 0;
  }
  if (py < 0) {
    py = (tc - 1);
  }
  if (py > (tc - 1)) {
    py = 0;
  }
  context.fillStyle = "#000000";
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "#00ff00";
  for (let i = 0; i < trail.length; i++) {
    context.fillRect((trail[i].x * gs), (trail[i].y * gs), (gs - 2), (gs - 2));
    if (trail[i].x == px && trail[i].y == py) {
      if (keydowned == true) {
        testScore(tail, "snake");
      }
      tail = 1;
      score.setScore(1);
    }
  }
  trail.push({
    x: px,
    y: py
  });
  while (trail.length > tail) {
    trail.shift();
  }
  if (ax == px && ay == py) {
    tail += 1;
    score.addScore(1);
    ax = Math.floor(Math.random() * tc);
    ay = Math.floor(Math.random() * tc);
  }
  context.fillStyle = "#ff0000";
  context.fillRect((ax * gs), (ay * gs), (gs - 2), (gs - 2));
}
var keydowned = false;
function keyPush(event) {
  switch (event.keyCode) {
    case 37:
      xv =- 1;
      yv = 0;
      keydowned = true;
      break;
    case 38:
      xv = 0;
      yv =- 1;
      keydowned = true;
      break;
    case 39:
      xv = 1;
      yv = 0;
      keydowned = true;
      break;
    case 40:
      xv = 0;
      yv = 1;
      keydowned = true;
      break;
  }
}
