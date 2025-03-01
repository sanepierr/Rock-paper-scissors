
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


function playGame(){

    let humanScore = 0;
    let computerScore = 0;

    function playRound(){
        let _humanChoice = getHumanChoice();
        switch (_humanChoice.toLowerCase().trim()){
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
                break;
        }
    }

    for(let i = 0; i < 5; i++){
        playRound();
    }
    alert(`player score: ${humanScore}\ncomputer score: ${computerScore}`);
}




document.body.addEventListener('load', playGame());

