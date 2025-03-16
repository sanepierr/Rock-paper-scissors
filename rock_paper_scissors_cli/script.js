const rock = document.getElementsByClassName("rock")[0];
const paper = document.getElementsByClassName("paper")[0];
const scissors = document.getElementsByClassName("scissors")[0];
const playerScore = document.querySelector('.playerScore');
const AiScore = document.querySelector('.computerScore');



function getComputerChoice(){
    const randomValue = Math.random();
    let computerChoice;
    if (randomValue <= 0.3){
        computerChoice = "rock"; 
    }
    else if (randomValue <= 0.6){
        computerChoice = "paper";
    }
    else {
        computerChoice = "scissors";
    }
    return computerChoice;
}
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice){
    switch (humanChoice){
        case "rock":
            let computerChoice1 =  getComputerChoice();
            if (computerChoice1 === "rock"){
                alert("It's a tie!");
            }
            else if (computerChoice1 === "scissors"){
                humanScore += 1;
                alert("You win!");
            }
            else if (computerChoice1 === "paper"){
                ++computerScore;
                alert("You lose");
            }
            AiScore.textContent = `Computer score: ${computerScore}`;
            playerScore.textContent = `Player score: ${humanScore}`;
            break;
    
        case "paper":
            let computerChoice2 =  getComputerChoice();
            if (computerChoice2 === "paper"){
                alert("It's a tie!");
            }
            else if (computerChoice2 === "scissors"){
                ++computerScore;
                alert("You lose!");
            }
            else if (computerChoice2 === "rock"){
                ++humanScore;
                alert("You win!");
            }
            AiScore.textContent = `Computer score: ${computerScore}`;
            playerScore.textContent = `Player score: ${humanScore}`;
            break;
    
        case "scissors":
            let computerChoice3 =  getComputerChoice();
            if (computerChoice3 === "rock"){
                ++computerScore;
                alert("You lose!");
            }
            else if (computerChoice3 === "scissors"){
                alert("It's a tie!");
            }
            else if (computerChoice3 === "paper"){
                ++humanScore;
                alert("You win");
            }
            AiScore.textContent = `Computer score: ${computerScore}`;
            playerScore.textContent = `Player score: ${humanScore}`;
            break;
    }
}
    rock.addEventListener("click", ()=>playRound("rock"));
    paper.addEventListener("click", ()=>playRound("paper"));
    scissors.addEventListener("click", ()=>playRound("scissors"));



