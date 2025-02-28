const _rock = document.getElementsByClassName('rock-button')[0];
const _paper = document.getElementsByClassName('paper-button')[0];
const _scissors = document.getElementsByClassName('scissors-button')[0];

function getComputerChoice(){
    const randomValue = Math.random();
    let computerChoice;
    if (0 <= randomValue <= 0.3){
        computerChoice = "rock"; 
    }
    else if (0.3 < randomValue <= 0.6){
        computerChoice = "paper";
    }
    else {
        computerChoice = "scissors";
    }
    return computerChoice;
}

_rock.addEventListener('click', ()=>{
    let computerChoice =  getComputerChoice();
    if (computerChoice === "rock"){
        alert("It's a tie!");
    }
    else if (computerChoice === "scissors"){
        alert("You win!");
    }
    else if (computerChoice === "paper"){
        alert("You lose");
    }
});

_paper.addEventListener('click', ()=>{
    let computerChoice =  getComputerChoice();
    if (computerChoice === "paper"){
        alert("It's a tie!");
    }
    else if (computerChoice === "scissors"){
        alert("You lose!");
    }
    else if (computerChoice === "rock"){
        alert("You win!");
    }
});

_scissors.addEventListener('click', ()=>{
    let computerChoice =  getComputerChoice();
    if (computerChoice === "rock"){
        alert("You lose!");
    }
    else if (computerChoice === "scissors"){
        alert("It's a tie!");
    }
    else if (computerChoice === "paper"){
        alert("You win");
    }
});