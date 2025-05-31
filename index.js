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

//function that plays 5 rounds, keeps track of score, and declares a winner at the end
function playGame(humanChoice, computerChoice) {
  let humanScore = 0;
  let computerScore = 0;
  
  for (let i = 1; i < 6; i++) {
    results = playRound(humanChoice, computerChoice);

    if (results === true) {
      console.log(`Computer wins round ${i}.`);
      computerScore += 1;
      console.log(`Human score: ${humanScore}`);
      console.log(`Computer score: ${computerScore}`);
    } else if (results === false) {
      console.log(`Human wins round ${i}.`);
      humanScore += 1;
      console.log(`Human score: ${humanScore}`);
      console.log(`Computer score: ${computerScore}`);
    } else {
      console.log(`It's a draw for round ${i}.`);
      console.log(`Human score: ${humanScore}`);
      console.log(`Computer score: ${computerScore}`);
    }  
  }

  console.log(`FINAL HUMAN SCORE: ${humanScore}`);
  console.log(`FINAL COMPUTER SCORE: ${computerScore}`);
  
  printWinner(humanScore, computerScore);
}

// function that prints the winner of the game
function printWinner(humanScore, computerScore) {
  if (humanScore > computerScore) {
    console.log(`Humanity continues their reign.`)
  } else {
    console.log(`Computers take over the world.`)
  }
}

// function for a single round of rock, paper, scissors
function playRound(humanChoice, computerChoice) {
  humanChoice = getHumanChoice();
  computerChoice = getComputerChoice();

  if (humanChoice == computerChoice) {
    return 'draw';
  } 
  
  if (humanChoice == 'rock') {
    switch(computerChoice) {
      case 'paper':
        return true;
        break;
      case 'scissors':
        return false;
        break;
    }
  }
      
  if (humanChoice == 'paper') {
    switch(computerChoice) {
      case 'scissors':
        return true;
        break;
      case 'rock':
        return false;
        break;
    }
  }
          
  if (humanChoice == 'scissors') {
    switch(computerChoice) {
      case 'rock':
        return true;
        break;
      case 'paper':
        return false;
        break;
    }
  }
}
         
playGame();



