document.getElementById("uername").textContent = username;
setupBox({
  box: document.getElementById("del"),
  button: document.getElementById("delU"),
  x: document.getElementById("delX")
});
fetch("/public/json/games.json")
.then(function (json) {
  return json.json();
})
.then(function (json) {
  var elm = document.getElementById("games");
  for (let i = 0; i < json.length; i++) {
    elm.innerHTML += "<a href='" + json[i].url + "'>" + json[i].name + "</a>";
    if (i !== (json.length - 1) && i >= 0) {
      elm.innerHTML += " | ";
    };
  };
})
.catch(function (error) {
  console.error(error);
});
var dis = document.getElementById("highScores");
fetch("/public/json/score.json")
.then(function (score) {
  return score.json();
})
.then(function (score) {
  let games = {
    jump: document.createElement("p"),
    snake: document.createElement("p"),
    num: document.createElement("p")
  };
  games.jump.textContent = score.jump.uesd == true ? `Jump: ${score.jump.time} by ${score.jump.username}` : "";
  if (score.snake.uesd == true) {
    games.snake.textContent = "Snake: " + score.snake.score + " by " + score.snake.username;
  } else {
    games.snake.textContent = "";
  }
  if (score.scoreNumber == 1) {
    games.num.textContent = "1 High Score In Total";
  } else if (score.scoreNumber > 1) {
    games.num.textContent = score.scoreNumber + " High Scores In Total";
  } else {
    games.num.textContent = "No High Scores In Total";
  }
  dis.append(games.jump, games.snake, games.num);
})
.catch(function (error) {
  console.error(error);
});
var delF = document.getElementById("delF");
delF.addEventListener("submit", (event) => {
  event.preventDefault();
  let textE = document.getElementById("delF-in-ty");
  let textET = textE.value.toLocaleLowerCase();
  let text = "I will delete my user".toLocaleLowerCase();
  if (textET == text) {
    localStorage.removeItem("username");
    window.location.reload();
  } else {
    document.getElementById("delX").click();
  }
});
