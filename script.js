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

let HumanResult = getHumanChoice()
//console.log(HumanResult)

let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice){
    let HumanChoice = HumanResult
    let ComputerChoice = getComputerChoice()

    if (HumanChoice === ComputerChoice){
        console.log("It's a tie!")
    } else if (HumanChoice === "Rock" && ComputerChoice === "Paper"){
        console.log("You lose! Paper beats Rock!")
    } else if (HumanChoice === "Rock" && ComputerChoice === "Scissors"){
        console.log("You Win!! Rock beats Scissors!")
    } else if (HumanChoice === "Paper" && ComputerChoice === "Scissors"){
        console.log("You lose! Scissors beats Paper!")
    } else if (HumanChoice === "Paper" && ComputerChoice === "Rock"){
        console.log("You Win!! Paper beats Rock!")
    } else if (HumanChoice === "Scissors" && ComputerChoice === "Rock"){
        console.log("You lose! Rock beats Scissors!")
    } else if (HumanChoice === "Scissors" && ComputerChoice === "Paper"){
        console.log("You Win!! Scissors beats Paper!")
    } else {
        console.log("OK, maybe next time.");
    }

}
//const humanSelection = getHumanChoice();
//const computerSelection = getComputerChoice();

playRound()