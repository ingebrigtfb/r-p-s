const choices = ["stein", "saks", "papir"]
const playerDisplay = document.getElementById("playerDisplay")
const computerDisplay = document.getElementById("computerDisplay")
const resultDisplay = document.getElementById("resultDisplay")
const playerScoreDisplay = document.getElementById("playerScoreDisplay")
const computerScoreDisplay = document.getElementById("computerScoreDisplay")
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {

    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if(playerChoice === computerChoice) {
        result = "DET BLE LIKT!";
    }
    else{
        switch(playerChoice){
            case "stein":
                result = (computerChoice === "saks") ? "DU VINNER!" : "DU TAPTE!";
                break;
            case "papir":
                result = (computerChoice === "stein") ? "DU VINNER!" : "DU TAPTE!";
                break;
            case "saks":
                result = (computerChoice === "papir") ? "DU VINNER!" : "DU TAPTE!";
                break;
        }

    }

    playerDisplay.textContent = `SPILLER: ${playerChoice}`;
    computerDisplay.textContent = `DATAMASKIN: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText");

    switch(result){
        case "DU VINNER!":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "DU TAPTE!":
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
    }

} 