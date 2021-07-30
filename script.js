
function computerPlay() { 
    let decision = getRandomNumber(3);
    return decision;

}
function getRandomNumber(max){ //Erstellen einer zufälligen Zahl zwischen 1 & max
    return randomNumber = Math.floor((Math.random() * max)+1);
}
function playGround (inputPlayer, inputComputer) {
    switch (inputPlayer) {
    case "btnscissor":
        switch (inputComputer) {
            case 1:
                return "draw";
            case 2:
                return "computer";
            case 3:
                return "player";
                
        }
    case "btnstone":
        switch (inputComputer) {
            case 1:
               return "player";
            case 2:
                return "draw";
            case 3:
                return "computer";
        }
        
    case "btnpaper":
        switch (inputComputer) {
            case 1:
               return "computer";
            case 2:
                return "player";
            case 3:
                return "draw";
        }
        
    }
}

const buttons = document.querySelectorAll(".button");
buttons.forEach(btn => btn.addEventListener("click", game));
const divPlayerScore = document.querySelector("#playerscore");
const divComputerScore = document.querySelector("#computerscore");
const divResult = document.querySelector("#result");
let playerScore = 0 ;
let computerScore = 0;

function game (e) {
    let winner = playGround(e.target.id, computerPlay())
    if (winner == "computer") {
        computerScore++
        divResult.innerHTML = "You lose!"
    }
    else if (winner =="player") {
        playerScore++
        divResult.innerHTML = "You win!"
    }
    else {
        divResult.innerHTML="Draw!"
    }
    divPlayerScore.innerHTML = playerScore;
    divComputerScore.innerHTML = computerScore;
}





