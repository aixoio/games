const express = require("express");
const path = require("path");
const fs = require("fs");
const port = 4545;
const app = express();
app.use(express.json());
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/public", "index.html"));
});
app.get("/jump", function (req, res) {
    res.sendFile(path.join(__dirname, "/public", "jump.html"));
});
app.get("/snake", function (req, res) {
    res.sendFile(path.join(__dirname, "/public", "snake.html"));
});
app.get("/public/js/index.js", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/js", "index.js"));
});
app.get("/public/js/snake.js", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/js", "snake.js"));
});
app.get("/public/js/jump.js", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/js", "jump.js"));
});
app.get("/public/js/jumpSetup.js", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/js", "jumpSetup.js"));
});
app.get("/public/js/snakeSetup.js", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/js", "snakeSetup.js"));
});
app.get("/public/js/highScore.js", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/js", "highScore.js"));
});
app.get("/public/js/main.js", function (req, res) {
   res.sendFile(path.join(__dirname, "/public/js", "main.js"));
});
app.get("/public/js/box.js", function (req, res) {
   res.sendFile(path.join(__dirname, "/public/js", "box.js"));
});
app.get("/puclic/css/index.css", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/css", "index.css"));
});
app.get("/puclic/css/snake.css", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/css", "snake.css"));
});
app.get("/puclic/css/jump.css", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/css", "jump.css"));
});
app.get("/puclic/css/main.css", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/css", "main.css"));
});
app.get("/puclic/css/box.css", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/css", "box.css"));
});
app.get("/public/json/games.json", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/json", "games.json"));
});
app.get("/public/json/score.json", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/json", "score.json"));
});
app.post("/post/add/:game", function (req, res) {
  const filePath = path.join(__dirname, "/public/json", "score.json");
  if (req.params.game == "jump") {
    let file = JSON.parse(fs.readFileSync(filePath));
    file.jump.username = req.body.username;
    file.jump.time = req.body.time;
    file.scoreList.push(req.body.username);
    file.jump.uesd = true;
    file.scoreNumber += 1;
    fs.writeFileSync(filePath, JSON.stringify(file, null, 1));
    res.json({
      stats: "sucess"
    });
  } else if (req.params.game == "snake") {
    let file = JSON.parse(fs.readFileSync(filePath));
    file.snake.username = req.body.username;
    file.snake.score = req.body.score;
    file.scoreList.push(req.body.username);
    file.snake.uesd = true;
    file.scoreNumber += 1;
    fs.writeFileSync(filePath, JSON.stringify(file, null, 1));
    res.json({
      stats: "sucess"
    });
  } else {
    res.json({
      stats: "error"
    });
  }
});
app.get("*", function (req, res) {
  res.send("404 Error");
});
app.listen(port, function () {
   console.log("Server rning at localhost:" + port);
});
