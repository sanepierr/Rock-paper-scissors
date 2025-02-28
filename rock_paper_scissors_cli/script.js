function getHumanChoice(){
    let humanChoice = prompt("Choose rock, paper or scissors: ");
    return humanChoice;
}

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

_humanChoice = document.body.addEventListener('onload', getHumanChoice);