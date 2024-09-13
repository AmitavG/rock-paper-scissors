console.log("Hello World");

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

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();
console.log(humanSelection);
console.log(computerSelection);


function playRound(humanChoice, computerChoice){
    let humanScore=0;
    let computerScore=0;
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if(computerChoice=="rock"){
        if(humanChoice=="paper"){
            humanScore++;
        }
        else if(humanChoice=="scissors"){
            computerScore++;
        }
    }

    else if(computerChoice=="paper"){
        if(humanChoice=="rock"){
            computerScore++;
        }
        else if(humanChoice=="scissors")
            humanScore++;
    }

    else if(computerChoice=="scissors"){
        if(humanChoice=="rock"){
            humanScore++;
        }
        else if(humanChoice=="paper"){
            computerScore++;
        }
    }

    if(humanScore > computerScore){
        console.log(`You won this round!, ${humanChoice} beats ${computerChoice}`);
    }
    else if(humanScore < computerScore){
        console.log(`You lose this round!, ${computerChoice} beats ${humanChoice}`);
    }
    else if(humanScore == computerScore){
        console.log("It is a tie!");
    }
}

playRound(humanSelection, computerSelection);