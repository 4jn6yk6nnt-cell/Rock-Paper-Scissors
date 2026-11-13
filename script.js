console.log("Hello World");

function getComputerChoice() {
    let randomNumber = Math.random()*10;
    //console.log(randomNumber);
    if (randomNumber >= 7){
        //console.log("Rock") ;
        randomNumber = "Rock";
    } else if (randomNumber >= 4) {
        //console.log("Paper");
        randomNumber = "Paper";
    } else {
        //console.log("Scissors");
        randomNumber = "Scissors";
    }

    return randomNumber;
}

function getHumanChoice() {
    let huchoice = prompt("What's your choice?");
        huchoice = huchoice.charAt(0).toUpperCase()
           + huchoice.slice(1).toLowerCase();

    if (huchoice === "Rock"){
        console.log(huchoice);
        return "Rock"
    } else if (huchoice === "Paper"){
        console.log(huchoice);
        return "Paper"
    } else if(huchoice === "Scissors"){
        console.log(huchoice);
        return "Scissors"
    } else{
        console.log("OK, maybe next time.");
    }
}



function playGame(){

    let humanScore = 0
    let computerScore = 0

function humanWins(){
    humanScore++;
    console.log("humanScore",humanScore);
}

function computerWins(){
    computerScore++;
    console.log("computerScore",computerScore);
}

function playRound(HumanChoice, ComputerChoice){
    
    if (HumanChoice === ComputerChoice){
        console.log("It's a tie!")
    } else if (HumanChoice === "Rock" && ComputerChoice === "Paper"){
        console.log("You lose! Paper beats Rock!");
        computerWins();
    } else if (HumanChoice === "Rock" && ComputerChoice === "Scissors"){
        console.log("You Win!! Rock beats Scissors!");
        humanWins();
    } else if (HumanChoice === "Paper" && ComputerChoice === "Scissors"){
        console.log("You lose! Scissors beats Paper!");
        computerWins();
    } else if (HumanChoice === "Paper" && ComputerChoice === "Rock"){
        console.log("You Win!! Paper beats Rock!")
        humanWins();
    } else if (HumanChoice === "Scissors" && ComputerChoice === "Rock"){
        console.log("You lose! Rock beats Scissors!");
        computerWins();
    } else if (HumanChoice === "Scissors" && ComputerChoice === "Paper"){
        console.log("You Win!! Scissors beats Paper!")
        humanWins();
    } else {
        console.log("OK, maybe next time.");
    }

}

for (let i = 0; i < 5; i++) {
    let HumanChoice = getHumanChoice();
    let ComputerChoice = getComputerChoice();

    playRound(HumanChoice, ComputerChoice);
}

function gameResult(){
    if (humanScore === computerScore){
        console.log("Even!?");
    } else if (humanScore > computerScore){
        console.log("You're Winner!!!");
    } else if (humanScore < computerScore){
        console.log("You're Loser...");
    } else {
        console.log("Something wrong");
    }
}

gameResult()
}

playGame()