//========================================================================
//Rock Paper Scissors
//========================================================================
//variables
let playerChoice = "";
let computerChoice = "";
let gameChoices = ["rock", "paper", "scissors"];


//function to make random moves
const randomMove = () => {
    let index = Math.floor(Math.random() * gameChoices.length);    
    return gameChoices[index];
}

//function for game logic

const rockPaperScissors = (playerMove, computerMove) => {
    playerMove = playerMove.toLowerCase();
    computerMove = computerMove.toLowerCase();

    if (playerMove === computerMove) {
        return `Both teams chose ${playerMove}, it's a tie!`;
    } else {
        if (playerMove === 'rock' && computerMove === 'scissors'){ 
            return playerWins;
        } 
        else if (playerMove === 'scissors' && computerMove === 'paper') {
            return playerWins;
        }
        else if (playerMove === 'paper' && computerMove === 'rock'){
            return playerWins;
        } 
        else {
            return `Player chose ${playerMove} and computer chose ${computerMove}, computer wins!`
        }
    }
}

playerChoice = randomMove();
computerChoice = randomMove();
let playerWins = `Player chose ${playerChoice} and computer chose ${computerChoice}, player wins!`;


console.log(rockPaperScissors(playerChoice, computerChoice));