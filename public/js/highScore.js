function testScore(score, gameName) {
  if (gameName == "jump") {
    fetch("/public/json/score.json")
    .then(function (json) {
      return json.json();
    })
    .then(function (data) {
      if (data.jump.time < score) {
        fetch("/post/add/jump", {
            method: "post",
            body: JSON.stringify({
                username: username,
                time: score
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(function (res) {
          return res.json();
        })
        .then(function (res) {
          if (res.stats !== "sucess") {
            console.error(res.stats);
          }
        })
        .catch(function (error) {
          console.error(error);
        });
      }
      return;
    })
    .catch(function (error) {
      console.error(error);
    });
  } else if (gameName == "snake") {
    fetch("/public/json/score.json")
    .then(function (json) {
      return json.json();
    })
    .then(function (data) {
      if (data.snake.score < score) {
        fetch("/post/add/snake", {
            method: "post",
            body: JSON.stringify({
                username: username,
                score: score
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(function (res) {
          return res.json();
        })
        .then(function (res) {
          if (res.stats !== "sucess") {
            console.error(res.stats);
          }
        })
        .catch(function (error) {
          console.error(error);
        });
      }
      return;
    })
    .catch(function (error) {
      console.error(error);
    });
    return;
  } else {
    return;
  }
};
