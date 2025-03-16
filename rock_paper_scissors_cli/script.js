document.addEventListener("DOMContentLoaded", ()=>{
    const rock = document.getElementsByClassName("rock")[0];
    const paper = document.getElementsByClassName("paper")[0];
    const scissors = document.getElementsByClassName("scissors")[0];
    const hScore =  document.getElementsByClassName("playerScore")[0];
    const cScore =  document.getElementsByClassName("computerScore")[0];

    let humanScore = 0;
    let computerScore = 0;


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


    function playRound(humanChoice){
        switch (humanChoice){
            case "rock":
                let computerChoice1 =  getComputerChoice();
                if (computerChoice1 === "rock"){
                    cScore.textContent = `Computer score: ${computerScore}`;
                    hScore.textContent = `Player score: ${humanScore}`;
                }
                else if (computerChoice1 === "scissors"){
                    ++humanScore;
                    cScore.textContent = `Computer score: ${computerScore}`;
                    hScore.textContent = `Player score: ${humanScore}`;
                }
                else if (computerChoice1 === "paper"){
                    ++computerScore;
                    cScore.textContent = `Computer score: ${computerScore}`;
                    hScore.textContent = `Player score: ${humanScore}`;
                }

                break;
        
            case "paper":
                let computerChoice2 =  getComputerChoice();
                if (computerChoice2 === "paper"){
                    cScore.textContent = `Computer score: ${computerScore}`;
                    hScore.textContent = `Player score: ${humanScore}`;
                }
                else if (computerChoice2 === "scissors"){
                    ++computerScore;
                    cScore.textContent = `Computer score: ${computerScore}`;
                    hScore.textContent = `Player score: ${humanScore}`;
                }
                else if (computerChoice2 === "rock"){
                    ++humanScore;
                    cScore.textContent = `Computer score: ${computerScore}`;
                    hScore.textContent = `Player score: ${humanScore}`;
                }
                break;
        
            case "scissors":
                let computerChoice3 =  getComputerChoice();
                if (computerChoice3 === "rock"){
                    ++computerScore;
                    cScore.textContent = `Computer score: ${computerScore}`;
                    hScore.textContent = `Player score: ${humanScore}`;
                }
                else if (computerChoice3 === "scissors"){
                    cScore.textContent = `Computer score: ${computerScore}`;
                    hScore.textContent = `Player score: ${humanScore}`;
                }
                else if (computerChoice3 === "paper"){
                    ++humanScore;
                    cScore.textContent = `Computer score: ${computerScore}`;
                    hScore.textContent = `Player score: ${humanScore}`;
                }
                break;
        }
    }
        rock.addEventListener("click", ()=>playRound("rock"));
        paper.addEventListener("click", ()=>playRound("paper"));
        scissors.addEventListener("click", ()=>playRound("scissors"));

})