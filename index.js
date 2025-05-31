// function that randomly returns rock, paper or scissors
function getComputerChoice() {
  let randomNum = Math.floor((Math.random() * 3) + 1);
  
  switch (randomNum) {
    case 1:
      return 'rock';
      break;
    case 2:
      return 'paper';
      break;
    case 3:
      return 'scissors';
      break;  
  } 
}

// function that prompts the user for either rock, paper, or scissors
function getHumanChoice() {
  let userInput = prompt('Rock, Paper, or Scissors?');
  return(userInput.toLowerCase());
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

// function for a single round of rock, paper, scissors
function playRound(humanChoice, computerChoice) {
  if (humanChoice == computerChoice) {
    return "It's a draw.";
  } 

  if (humanChoice == 'rock') {
    switch(computerChoice) {
      case 'paper':
        return 'Computer wins!';
        break;
      case 'scissors':
        return 'Human wins!';
        break;
    }
  }

    if (humanChoice == 'paper') {
    switch(computerChoice) {
      case 'scissors':
        return 'Computer wins!';
        break;
      case 'rock':
        return 'Human wins!';
        break;
    }
  }

    if (humanChoice == 'scissors') {
    switch(computerChoice) {
      case 'rock':
        return 'Computer wins!';
        break;
      case 'paper':
        return 'Human wins!';
        break;
    }
  }
}

let humanScore = 0;
let computerScore = 0;
console.log(playRound(humanChoice, computerChoice));



