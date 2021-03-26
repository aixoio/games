var time = {
    time: 0,
    dis: document.getElementById("score"),
    addTime: function (add) {
      this.time += add;
      this.disTime();
      return;
    },
    setTime: function (time) {
      this.time = time;
      this.disTime();
      return;
    },
    disTime: function () {
      this.dis.textContent = this.time;
      return;
    },
    intervalTimeout: 1000,
    intervalNum: null
};
disHigh();
async function disHigh() {
    const dis = document.getElementById("highScoreDisplay");
    const req = await fetch("/public/json/score.json");
    const json = await req.json();
    dis.innerHTML = "";
    if (json.jump.uesd == true) {
     const p1 = document.createElement("p");
     const p2 = document.createElement("p");
     p1.textContent = "High Time: " + json.jump.time;
     p2.textContent = "By: " + json.jump.username;
     dis.appendChild(p1);
     dis.appendChild(p2);
    } else {
        const p = document.createElement("p");
        p.textContent = "No High Time";
        dis.appendChild(p);
    };
};
