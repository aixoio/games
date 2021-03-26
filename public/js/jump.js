var character = document.getElementById("character");
var block = document.getElementById("block");
document.onkeydown = function (event) {
  if (event.keyCode == 32 || event.keyCode == 38) {
    jump();
  };
};
document.onclick = () => jump();
function jump() {
  if (character.classList !== "animate") {
    character.classList.add("animate");
  };
  setTimeout(function () {
    character.classList.remove("animate");
  }, 600);
};
var checkDead = setInterval(function () {
  var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
  var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
  if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
    testScore(time.time, "jump");
    alert("You lose with the time of " + time.time);
    time.setTime(0);
  };
}, 10);
time.intervalNum = setInterval(function () {
  time.addTime(1);
}, time.intervalTimeout);
