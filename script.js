function getComputerChoice() {
  let random = Math.random();
  if (random > .66) {
    return "Rock";
  }
  else if (random > .33) {
    return "Paper";
  }
  else {
    return "Scissors";
  }
}

console.log(getComputerChoice());