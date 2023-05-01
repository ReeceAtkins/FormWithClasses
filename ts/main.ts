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

function displayGame(myGame:VideoGame):void{

}

function isAllDataValid(){
    
    return true;
}