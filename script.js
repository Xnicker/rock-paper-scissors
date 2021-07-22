let playerScore = 0;
let computerScore = 0;
let playerSelection;
let playerInput;

game();

function computerPlay() {
    let decision = getRandomNumber(3);
    let decisionObject;
    console.log(decision);
    if(decision == 1) {
        decisionObject = "Rock";
    }
    else if (decision == 2) {
        decisionObject = "Paper"
    }
    else if (decision == 3) {
        decisionObject = "Scissor"
    }
    else {
        decisionObject   = "SPOK";
    }

    return decisionObject;

}
function getRandomNumber(max){
    return randomNumber = Math.floor((Math.random() * max)+1);
}
function playGround (inputPlayer, inputComputer) {
    switch (inputPlayer) {
    case "SCHERE":
        switch (inputComputer) {
            case "Rock":
                alert(`Du spielt ${inputPlayer} und der Computer spielt ${inputComputer}! Du verlierst!`)
                computerScore++;
            break;
            case "Paper":
                alert(`Du spielt ${inputPlayer} und der Computer spielt ${inputComputer}! Du gewinnst!`)
                playerScore++;
            break;
            case "Scissor":
                alert(`Du spielt ${inputPlayer} und der Computer spielt ${inputComputer}! Unentschieden!`)
            break;
        }
        break;
    case "STEIN":
        switch (inputComputer) {
            case "Rock":
                alert(`Du spielt ${inputPlayer} und der Computer spielt ${inputComputer}! Unentschieden!`)
            break;
            case "Paper":
                alert(`Du spielt ${inputPlayer} und der Computer spielt ${inputComputer}! Du verlierst!`)
                computerScore++;
            break;
            case "Scissor":
                alert(`Du spielt ${inputPlayer} und der Computer spielt ${inputComputer}! Du gewinnst!`)
                playerScore++;
            break;
        }
        break;
    case "Papier":
        switch (inputComputer) {
            case "Rock":
                alert(`Du spielt ${inputPlayer} und der Computer spielt ${inputComputer}! Du gewinnst!`)
                playerScore++
            break;
            case "Paper":
                alert(`Du spielt ${inputPlayer} und der Computer spielt ${inputComputer}! Unentschieden!`)
            break;
            case "Scissor":
                alert(`Du spielt ${inputPlayer} und der Computer spielt ${inputComputer}! Du verlierst!`)
                computerScore++;
            break;
        }
        break;
    }
}

function game () {
    do{
        playerSelection= prompt("Wähle zwischen Schere, Stein oder Papier!");
        const computerSelection = computerPlay();
        playerInput = playerSelection.toUpperCase();
        playGround(playerInput, computerSelection);
    }
    while (playerScore <=5 &&    computerScore <= 5);
}





