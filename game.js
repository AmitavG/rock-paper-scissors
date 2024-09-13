//Rock Paper Scissors Game

function getComputerChoice(){
    const choice = ['rock', 'paper', 'scissors'];
    const index = Math.floor(Math.random() * choice.length)
    return choice[index];
}

// console.log(getComputerChoice());

function getHumanChoice(){
    const input = prompt("Choose your input", "rock");
    return input;
}

// console.log(getHumanChoice());


let humanScore=0;
let computerScore=0;
function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if(computerChoice == humanChoice){
        console.log("It is a tie");
    }

    else if(computerChoice=="rock"){
        if(humanChoice=="paper"){
            humanScore++;
            console.log(`You won this round!, ${humanChoice} beats ${computerChoice}`);
        }
        else if(humanChoice=="scissors"){
            computerScore++;
            console.log(`You lose this round!, ${computerChoice} beats ${humanChoice}`);
        }
    }

    else if(computerChoice=="paper"){
        if(humanChoice=="rock"){
            computerScore++;
            console.log(`You lose this round!, ${computerChoice} beats ${humanChoice}`);
        }
        else if(humanChoice=="scissors"){
            humanScore++;
            console.log(`You won this round!, ${humanChoice} beats ${computerChoice}`);
        }
    }

    else if(computerChoice=="scissors"){
        if(humanChoice=="rock"){
            humanScore++;
            console.log(`You won this round!, ${humanChoice} beats ${computerChoice}`);
        }
        else if(humanChoice=="paper"){
            computerScore++;
            console.log(`You won this round!, ${humanChoice} beats ${computerChoice}`);
        }
    }

    return {humanScore, computerScore};
}

function playGame(){
    for(let i=0; i<5; i++){
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        console.log("computer chose: ", computerSelection);
        console.log("human chose: ", humanSelection);

        let scores = playRound(humanSelection, computerSelection);
        console.log(`human score: ${scores.humanScore}, computer score: ${scores.computerScore}`);
        console.log("\n");
    }

    if(humanScore > computerScore){
        console.log(`You won the game with ${humanScore} - ${computerScore} `);
    }
    else{
        console.log(`You lost the game with ${humanScore} - ${computerScore} `);
    }
}

playGame();
