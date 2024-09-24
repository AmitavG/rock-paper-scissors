function getComputerChoice(){
    const choice = ["rock", "paper", "scissors"];
    const index = Math.floor(Math.random() * choice.length);
    return choice[index];
}

function getHumanChoice(){
    const rock = document.getElementById("rock");
    const paper = document.getElementById("paper");
    const scissors = document.getElementById("scissors");
    
    rock.addEventListener("click", function(){
        playGame("rock");
    });

    paper.addEventListener("click", function(){
        playGame("paper");
    });

    scissors.addEventListener("click", function(){
        playGame("scissors");
    });
}

let humanScore = 0;
let computerScore = 0;
let maxScore = 0;
let maxRounds = 5;

function playRound(humanChoice, computerChoice){
    if(humanChoice == computerChoice){
        console.log(`It is a draw`);
    }
    else if(humanChoice=="rock"){
        if(computerChoice=="scissors"){
            humanScore++;
            console.log(`You won this round! ${humanChoice} beats ${computerChoice}`);
        }
        else{
            computerScore++;
            console.log(`You lost this round! ${humanChoice} beats ${computerChoice}`);
        }
    }
    else if(humanChoice=="paper"){
        if(computerChoice=="rock"){
            humanScore++;
            console.log(`You won this round! ${humanChoice} beats ${computerChoice}`);
        }
        else{
            computerScore++;
            console.log(`You lost this round! ${humanChoice} beats ${computerChoice}`);
        }
    }
    else if(humanChoice=="scissors"){
        if(computerChoice=="paper"){
            humanScore++;
            console.log(`You won this round! ${humanChoice} beats ${computerChoice}`);
        }
        else{
            computerScore++;
            console.log(`You lost this round! ${humanChoice} beats ${computerChoice}`);
        }
    }

    console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`);
    console.log("\n");
}

function playGame(humanChoice){
    if(maxScore < maxRounds){
        let computerSelection = getComputerChoice();
        console.log(`computer choice: ${computerSelection}`);
        console.log(`human choice: ${humanChoice}`);

        playRound(humanChoice, computerSelection);
        maxScore = Math.max(humanScore, computerScore);

        if(maxScore == maxRounds){
            if(humanScore > computerScore)
                console.log(`You won the game with ${humanScore} - ${computerScore}`);
            else if(humanScore < computerScore)
                console.log(`You lost the game (unfortunately) with ${humanScore} - ${computerScore}`);
            else
                console.log(`The game is tied with ${humanScore} - ${computerScore}`);
        }
    }
    else{
        console.log(`Game OVER!, Please reload the page to play again`);
    }
}

getHumanChoice();