// function that randomly returns rock, paper or scissors
function getComputerChoice() {
  let randomNum = Math.floor((Math.random() * 3) + 1);
  
  switch (randomNum) {
    case 1:
      return "rock";
      break;
    case 2:
      return "paper";
      break;
    case 3:
      return "scissors";
      break;  
  } 
}

// console.log(getComputerChoice());
