class VideoGame{
    title:string;
    price:number;
    rating:string;
    isDigitalOnly:boolean;
}

// let myGame = new VideoGame();


window.onload = function(){
    let addbtn = <HTMLElement>document.querySelector("input[type=button]")
    addbtn.onclick = addVideoGame;
}

function addVideoGame(){

    if(isAllDataValid()){
        let game = getVideoGame();
        displayGame(game);
    }
}

/**
 * Gets all game data from the form
 * @returns VideoGame object
 */
function getVideoGame():VideoGame{
    let game = new VideoGame();
    // Populate with data from the form
    let titleInput = <HTMLInputElement>document.getElementById("title");
    game.title = titleInput.value;

    let priceInput = <HTMLInputElement>document.getElementById("price");
    game.price = parseFloat(priceInput.value);

    let ratingInput = <HTMLInputElement>document.getElementById("rating");
    game.rating = ratingInput.value;

    let digitalOnly = <HTMLInputElement>document.getElementById("online");
    game.isDigitalOnly = digitalOnly.checked;

    return game;
}
function displayGame(myGame:VideoGame):void{
    let displayDiv = document.getElementById("display");

    // create <h2> with game title
    let gameHeading = document.createElement("h2");
    gameHeading.innerText = myGame.title;

    // Create paragraph with game details
    let gameInfo = document.createElement("p");
    let notDigitalDisplay = "";
    if(myGame.isDigitalOnly){
        notDigitalDisplay = "This is a digital only game.";
    }
    else{
        notDigitalDisplay = "Come but a physical copy!"
    }
    gameInfo.innerText = `${myGame.title} has a rating of ${myGame.rating}.
                 It costs ${myGame.price}. It is ${notDigitalDisplay} digital only`;


    // Add <h2>
    displayDiv.appendChild(gameHeading);
    // Add <p> game info
    displayDiv.appendChild(gameInfo);
    }

function isAllDataValid(){
    
    return true;
}