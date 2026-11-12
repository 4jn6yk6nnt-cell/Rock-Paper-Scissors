console.log("Hello World");

function getComputerChoice() {
    let randomNumber = Math.random()*10;
    console.log(randomNumber);
    if (randomNumber >= 7){
        console.log("Rock") ;
        randomNumber = "Rock";
    } else if (randomNumber >= 4) {
        console.log("Paper");
        randomNumber = "Paper";
    } else {
        console.log("Scissors");
        randomNumber = "Scissors";
    }

    return randomNumber;
}

console.log(getComputerChoice());

function getHumanChoice() {
    let humanchoice = prompt("What's your choice?")

    if (humanchoice === "Rock"){
        console.log(humanchoice)
    } else if (humanchoice === "Paper"){
        console.log(humanchoice)
    } else if(humanchoice === "Scissors"){
        console.log(humanchoice)
    } else{
        console.log("OK, maybe next time.")
    }
}
getHumanChoice()
