function getComputerChoice() {
  let randomNum = Math.floor((Math.random() * 3) + 1);
  
  if (randomNum === 1) {
    return 'rock';
  } else if (randomNum === 2) {
    return 'paper';
  } else {
    return 'scissors';
  }
}


function getHumanChoice() {
  let userInput = prompt('Rock, Paper, or Scissors?');
  return(userInput.toLowerCase());
}

// function for a single round of rock, paper, scissors
function playRound(humanChoice, computerChoice) {
  humanChoice = getHumanChoice();
  computerChoice = getComputerChoice();
  
  if (humanChoice === computerChoice) {
    console.log(`Human: ${humanChoice}, Computer: ${computerChoice}`);
    return 'draw';
  } 
  
  if ((humanChoice == 'rock' && computerChoice == `paper`) ||
  (humanChoice == `paper` && computerChoice == `scissors`) ||
  (humanChoice == `scissors` && computerChoice == `rock`)) {
    console.log(`Human: ${humanChoice}, Computer: ${computerChoice}`);
    return true;
  } else {
    console.log(`Human: ${humanChoice}, Computer: ${computerChoice}`);
    return false;
  }
}

//function that plays 5 rounds, keeps track of score, and declares a winner at the end
function playGame(humanSelection, computerSelection) {
  let humanScore = 0;
  let computerScore = 0;
  
  for (let i = 1; i < 6; i++) {
    results = playRound(humanSelection, computerSelection);

    if (results === true) {
      computerScore += 1;
      console.log(`Computer wins round ${i}. 👶: ${humanScore}, 🤖: ${computerScore}`);
    } else if (results === false) {
      humanScore += 1;
      console.log(`Human wins round ${i}. 👶: ${humanScore}, 🤖: ${computerScore}`);
    } else {
      console.log(`It's a draw for round ${i}. 👶: ${humanScore}, 🤖: ${computerScore}`);
    }  
  }

  console.log(`FINAL SCORE. Human: ${humanScore} VS Computer: ${computerScore}`);  
  printWinner(humanScore, computerScore);
}

// function that prints the winner of the game
function printWinner(humanScore, computerScore) {
  if (humanScore > computerScore) {
    console.log(`Humanity continues their reign. 💪`)
  } else if (humanScore < computerScore ) {
    console.log(`Computers take over the world. 🦾`)
  } else {
    console.log(`An uneasy peace grips the two dominant beings in the world.🌎`)
  }
}

playGame();



