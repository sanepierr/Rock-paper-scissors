document.addEventListener("DOMContentLoaded", ()=>{
    const rock = document.getElementsByClassName("rock")[0];
    const paper = document.getElementsByClassName("paper")[0];
    const scissors = document.getElementsByClassName("scissors")[0];
    const hScore =  document.getElementsByClassName("playerScore")[0];
    const cScore =  document.getElementsByClassName("computerScore")[0];
    const results = document.querySelector(".results")

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
    function score(){
        const score = document.createElement("div");
        score.classList.add("score");
        results.appendChild(score);

        if (computerScore === 5){
            score.textContent = "You lose!!"
            computerScore = 0;
            humanScore = 0;
        } 
        if (humanScore === 5){
            score.textContent = "You win!!"
            computerScore = 0;
            humanScore = 0;
        }
        cScore.textContent = `Computer score: ${computerScore}`;
        hScore.textContent = `Player score: ${humanScore}`;
    }


    function playRound(humanChoice){
        switch (humanChoice){
            case "rock":
                let computerChoice1 =  getComputerChoice();
                if (computerChoice1 === "rock"){

                }
                else if (computerChoice1 === "scissors"){
                    ++humanScore;
                    cScore.textContent = `Computer score: ${computerScore}`;
                    hScore.textContent = `Player score: ${humanScore}`;
                }
                else if (computerChoice1 === "paper"){
                    ++computerScore;
                    score();
                }

                break;
        
            case "paper":
                let computerChoice2 =  getComputerChoice();
                if (computerChoice2 === "paper"){
                    score();
                }
                else if (computerChoice2 === "scissors"){
                    ++computerScore;
                    cScore.textContent = `Computer score: ${computerScore}`;
                    hScore.textContent = `Player score: ${humanScore}`;
                }
                else if (computerChoice2 === "rock"){
                    ++humanScore;
                    score();
                }
                break;
        
            case "scissors":
                let computerChoice3 =  getComputerChoice();
                if (computerChoice3 === "rock"){
                    ++computerScore;
                    score();
                }
                else if (computerChoice3 === "scissors"){
                    score();
                }
                else if (computerChoice3 === "paper"){
                    ++humanScore;
                    score();
                }
                break;
        }
    }
        rock.addEventListener("click", ()=>playRound("rock"));
        paper.addEventListener("click", ()=>playRound("paper"));
        scissors.addEventListener("click", ()=>playRound("scissors"));

})