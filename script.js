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
    playerSelection = playerSelection.toLowerCase();
    console.log(playerSelection);
    console.log(computerSelection);
    if (playerSelection === 'paper') {
        if (computerSelection === 'paper'){
            return tie();
        }
        if (computerSelection === 'rock') {
            return winner('Dumb human');
        }
        else {
            return winner('Rockstar computer');
        }
    }
    else if (playerSelection === 'rock') {
        if (computerSelection === 'paper'){
            return winner('Rockstar computer');
        }
        if (computerSelection === 'rock') {
            return tie();
        }
        else {
            return winner('Dumb human');
        }
    }
    else {
        if (computerSelection === 'scissors') {
            return tie();
    }    
        if (computerSelection === 'rock') {
            return winner('Rockstar computer');
        }
        else {
            return winner('Dumb human');
        }
} }

function winner(string) {
    alert(`${string} wins!`);
    return string;
}

function tie() {
   alert('Tie! Suckers!'); 
}

function getHumanChoice() {
    let choice = prompt("Rock - Paper - Scissors? (choose one)").toLowerCase();
    if (choice === 'rock' || choice === 'paper' || choice === 'scissors') {
        return choice;
    } 
    else {
        return getHumanChoice();
    }    
}

function game() {
    let computerWins = 0;
    let humanWins = 0;
    let playerSelection = getHumanChoice();
    let roundResult;
    for (let i = 0; i < 5; i++) {
        roundResult = playRound(playerSelection, getComputerChoice());
        if (roundResult === 'Dumb human') {
            humanWins ++;
        }
        else if (roundResult === 'Dumb human') {
            computerWins ++;
        }
        else {
            //do nothing, tie
        }
    }
    console.log(humanWins);
    console.log(computerWins);
    if (humanWins > computerWins) {
        return alert("final result: dumb human wins");
    }
    else if (computerWins > humanWins) {
        return alert("final result: what did you expect? cpu W");
    }
    else {
        return alert("Nobody wins. How do you like that? Not very fun huh");
    }
}

game();