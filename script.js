function getComputerChoice() {
    let random = Math.random();
    console.log(random);
    if (random > .66) {
      return "rock";
    }
    else if (random > .33) {
      return "paper";
    }
    else {
      return "scissors";
    }
  }
  
function playRound(playerSelection, computerSelection) {
   computerSelection = getComputerChoice();
    if (playerSelection === 'paper') {
        if (computerSelection === 'paper'){
            return tie(playerSelection, computerSelection);
        }
        if (computerSelection === 'rock') {
            return displayRound(playerSelection, computerSelection, 'human');
        }
        else {
            return displayRound(playerSelection, computerSelection, 'computer');
        }
    }
    else if (playerSelection === 'rock') {
        if (computerSelection === 'paper'){
            return displayRound(playerSelection, computerSelection, 'computer');
        }
        if (computerSelection === 'rock') {
            return tie(playerSelection, computerSelection);
        }
        else {
            return displayRound(playerSelection, computerSelection, 'human');
        }
    }
    else {
        if (computerSelection === 'scissors') {
            return tie(playerSelection, computerSelection);
    }    
        if (computerSelection === 'rock') {
            return displayRound(playerSelection, computerSelection, 'computer');
        }
        else {
            return displayRound(playerSelection, computerSelection, 'human');
        }
} }

function displayRound(playerSelection, computerSelection, winner) {
  console.log('52');
  result.textContent = `Human ${playerSelection} vs Computer ${computerSelection}`;
  score(winner);
  return;
}

function tie(playerSelection, computerSelection) {
   result.textContent = `Human ${playerSelection} vs Computer ${computerSelection}`;
   return; 
}

let humanScore = 0;
let computerScore = 0;

function score(winner) {
  let champ;
  ///default to computer to eliminate an else
  let champName = 'computer';
  if (winner === 'human') 
    humanScore ++;
    else 
      computerScore ++;
  scoreBoard.textContent = `Human: ${humanScore}  Computer: ${computerScore}`;
  if (humanScore === 5 || computerScore === 5) {
    champ = Math.max(humanScore, computerScore);
    if (champ === humanScore)
      champName = 'human';
    winMessage.textContent = `${champName}, ${champName}, chicken dinner (winner, winner)`;
  }
  return;
}

const result = document.querySelector('#matchup');
const scoreBoard = document.querySelector('#scoreBoard');
const winMessage = document.querySelector('#winner');

const choices = document.querySelectorAll('.choice');
choices.forEach(choice => {
  choice.addEventListener('click', (e) =>
  {
    let elementId = e.target.id;
    playRound(elementId, getComputerChoice);
  });
});