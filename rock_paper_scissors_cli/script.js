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

switch (_humanChoice.toLowerCase().trim()){
    case "rock":
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
        break;
    case "paper":
        computerChoice =  getComputerChoice();
        if (computerChoice === "paper"){
            alert("It's a tie!");
        }
        else if (computerChoice === "scissors"){
            alert("You lose!");
        }
        else if (computerChoice === "rock"){
            alert("You win!");
        }
}