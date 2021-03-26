var score = {
    score: 1,
    dis: document.getElementById("score"),
    addScore: function (add) {
      this.score += add;
      this.dis.textContent = this.score;
      return;
    },
    setScore: function (score) {
      this.score = score;
      this.dis.textContent = this.score;
      return;
    }
};
