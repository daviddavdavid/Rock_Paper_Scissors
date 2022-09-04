
const rockPaperScissorsArray = ["rock", "paper", "scissors"];

function computerSelection() {
    let randomIndex = Math.floor(Math.random() * 2);
    return rockPaperScissorsArray[randomIndex];
}

function playerSelection() {
    let properChoice = false;
    let choice;
   while (properChoice == false) {
        choice = prompt("Rock, Paper or Scissors?");
        rockPaperScissorsArray.forEach(function(item, index) {
            if (item == choice.toLowerCase()) {
               properChoice = true;
            }
        });
   }
   return choice;
   

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


function game() {
    
    let scorePlayer = 0;
    let scoreComputer = 0;

    for (let i = 0; i < 5; i++) {
        let cSelection = computerSelection();
        let pSelection = playerSelection();
        console.log(cSelection, pSelection)

        let stateArray = playRound(pSelection, cSelection);

        if (stateArray[1] = 0) {
            scoreComputer++;
        }
        else if (stateArray[1] = 1) {
            scorePlayer++;
        }

        console.log(stateArray[0]);
    }

    let gameState = decideWinner(scorePlayer, scoreComputer);

    if (gameState == 1) {
        console.log(`Player wins with ${scorePlayer} | ${scoreComputer}points`);

    } else if (gameState == 1) {
        console.log(`Computer wins with ${scoreComputer} | ${scorePlayer} points`);

    } else {
        console.log(`You had a draw with ${scoreComputer} |  ${scorePlayer} points`);
    }
}

game();