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

function result(){
    let _humanChoice = getHumanChoice();
    switch (_humanChoice.toLowerCase().trim()){
        case "rock":
            let computerChoice1 =  getComputerChoice();
            if (computerChoice1 === "rock"){
                alert("It's a tie!");
            }
            else if (computerChoice1 === "scissors"){
                alert("You win!");
            }
            else if (computerChoice1 === "paper"){
                alert("You lose");
            }
            break;
    
        case "paper":
            let computerChoice2 =  getComputerChoice();
            if (computerChoice2 === "paper"){
                alert("It's a tie!");
            }
            else if (computerChoice2 === "scissors"){
                alert("You lose!");
            }
            else if (computerChoice2 === "rock"){
                alert("You win!");
            }
            break;
    
        case "scissors":
            let computerChoice3 =  getComputerChoice();
            if (computerChoice3 === "rock"){
                alert("You lose!");
            }
            else if (computerChoice3 === "scissors"){
                alert("It's a tie!");
            }
            else if (computerChoice3 === "paper"){
                alert("You win");
            }
            break;
    }
}


document.body.addEventListener('load', result());

