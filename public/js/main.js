if (localStorage.getItem("username") == null) {
    var username = prompt("Enter a username", "username");
    if (username == null || username == false || username == "") {
        username = "username";
    }
    localStorage.setItem("username", username);
} else {
    var username = localStorage.getItem("username");
};
