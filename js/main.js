var VideoGame = (function () {
    function VideoGame() {
    }
    return VideoGame;
}());
window.onload = function () {
    var addbtn = document.querySelector("input[type=button]");
    addbtn.onclick = addVideoGame;
};
function addVideoGame() {
    if (isAllDataValid()) {
        var game = getVideoGame();
        displayGame(game);
    }
}
function getVideoGame() {
    var game = new VideoGame();
    var titleInput = document.getElementById("title");
    game.title = titleInput.value;
    var priceInput = document.getElementById("price");
    game.price = parseFloat(priceInput.value);
    var ratingInput = document.getElementById("rating");
    game.rating = ratingInput.value;
    var digitalOnly = document.getElementById("online");
    game.isDigitalOnly = digitalOnly.checked;
    return game;
}
function displayGame(myGame) {
    var displayDiv = document.getElementById("display");
    var gameHeading = document.createElement("h2");
    gameHeading.innerText = myGame.title;
    var gameInfo = document.createElement("p");
    var notDigitalDisplay = "";
    if (myGame.isDigitalOnly) {
        notDigitalDisplay = "This is a digital only game.";
    }
    else {
        notDigitalDisplay = "Come but a physical copy!";
    }
    gameInfo.innerText = "".concat(myGame.title, " has a rating of ").concat(myGame.rating, ".\n                 It costs ").concat(myGame.price, ". It is ").concat(notDigitalDisplay, " digital only");
    displayDiv.appendChild(gameHeading);
    displayDiv.appendChild(gameInfo);
}
function isAllDataValid() {
    var allDataValid = true;
    var title = document.getElementById("title");
    if (title.value == "") {
        errorMessage("Please enter a title");
        allDataValid = false;
    }
    var price = document.getElementById("price");
    if (price.value == "" || parseFloat(price.value) < 0) {
        errorMessage("Please enter a valid price");
        allDataValid = false;
    }
    var rating = document.getElementById("rating");
    if (rating.value == "Please choose a rating") {
        errorMessage("Please select a rating");
        allDataValid = false;
    }
    return allDataValid;
}
function errorMessage(message) {
    var errorDiv = document.getElementById("validation-summary");
    var createErrMessage = document.createElement("p");
    createErrMessage.innerText = message;
    errorDiv.appendChild(createErrMessage);
}
