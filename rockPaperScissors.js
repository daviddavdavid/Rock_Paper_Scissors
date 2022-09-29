const rockPaperScissorsArray = ["rock", "paper", "scissors"];
let actualScore = [0, 0]
let gamesPlayed = 0

const choiceButtons = document.querySelectorAll(".rpsButton");

function choiceButtonClickEvent(button) {
    console.log("hello")
    button.addEventListener("click", function(e) {
        let playerChoice = e.target.textContent;
        let computerChoice = computerSelection();
        let roundResult = playRound(playerChoice, computerChoice);
        console.log(roundResult[0]);
        let resultText = document.querySelector(".resultShow");
        resultText.textContent = roundResult[0];

        let gameResultText = document.querySelector(".info");
        gamesPlayed++;
        gameResultText.textContent = `Game ${gamesPlayed} out of 5`;

        scoreUpdater(roundResult[1], false);
        console.log(actualScore);
        

        if (gamesPlayed == 5) {
            let gameState = decideWinner(actualScore[1], actualScore[0]);
            if (gameState == 1) {
                gameResultText.textContent = `The player won the match with ${actualScore[1]} vs ${actualScore[0]}!`;
            } else if (gameState == 0) {
                gameResultText.textContent = `The computer won the match! with ${actualScore[1]} vs ${actualScore[0]}`;
            } else {
                gameResultText.textContent = `The match ended in a draw! with ${actualScore[1]} vs ${actualScore[0]}`;
            }
            actualScore = [0,0];
            gamesPlayed = 0;

            scoreUpdater(2, true);
        }


    });
};

function scoreUpdater(point, bool) {
    let plrScoreCounter = document.querySelector("#player-score");
    let computerScoreCounter = document.querySelector("#computer-score")

    //to reset the scores
    if (bool) {
        plrScoreCounter.textContent = "Score Player: 0";
        computerScoreCounter.textContent = "Score Computer: 0";
        return;
    }

    if (point == 1) {
        actualScore[1] += 1;
        plrScoreCounter.textContent = `Score Player: ${actualScore[1]}`;

    }
    else if (point == 0) {
        actualScore[0] += 1;
        computerScoreCounter.textContent = `Score Computer: ${actualScore[0]}`;
    }

    
}

choiceButtons.forEach(choiceButtonClickEvent)

function computerSelection() {
    let randomIndex = Math.floor(Math.random() * 3);
    return rockPaperScissorsArray[randomIndex];
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            return ["You Lose! Paper beats Rock", 0];
        }
        else if (computerSelection == "scissors") {
            return ["You win! Rock beats Scissors", 1];
        }
        else {
            return ["Draw! You both choose Rock", 2];
        }
    }
    else if (playerSelection == "paper") {
        if (computerSelection == "paper") {
            return ["Draw! You both choose Paper", 2];
        }

        else if (computerSelection == "rock") {
            return ["You Win! Paper beats Rock", 1];
        }

        else  {
            return ["You Lose! Scissors beats Paper", 0];
        }
    }
    
    else {
        if (computerSelection == "paper") {
            return ["You Win! Scissors beats Paper", 1];
        }

        else if (computerSelection == "rock") {
            return ["You Lose! Rock beats Paper", 0];
        }

        else  {
            return ["Draw! You both choose Scissors", 2];
        }
    }
}

function decideWinner(scorePlayer, scoreComputer) {
    if (scorePlayer > scoreComputer) {
        return 1
    }
    else if (scorePlayer < scoreComputer){
        return 0
    }

    else {
        return 2
    }
}
