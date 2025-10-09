let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
  const randomNumber = Math.round(Math.random() * 3);
  let computerResult = "";
  if (randomNumber === 0) {
    computerResult = "Rock";
  } else if (randomNumber === 1) {
    computerResult = "Paper";
  } else {
    computerResult = "Scissors";
  }

  return computerResult;
};

function getHumanChoice() {
  let choice = prompt("Veuillez choisir entre Rock, Paper or Scissors");
  return choice;
};

function playRound(humanChoice, computerChoice) {
  const humanChoiceConverted = humanChoice.toLowerCase();
  const computerChoiceConverted = computerChoice.toLowerCase();

  if (humanChoiceConverted === "rock" && computerChoiceConverted === "scissors"
    || humanChoiceConverted === "paper" && computerChoiceConverted === "rock"
    || humanChoiceConverted === "scissors" && computerChoiceConverted === "paper"
  ) {
    console.log(`You win ! ${humanChoiceConverted} beats ${computerChoiceConverted}`);
    humanScore += 1;
  } else if (humanChoiceConverted === "rock" && computerChoiceConverted === "paper"
    || humanChoiceConverted === "paper" && computerChoiceConverted === "scissors"
    || humanChoiceConverted === "scissors" && computerChoiceConverted === "rock"
  ) {
    console.log(`You lose... ${computerChoiceConverted} beats ${humanChoiceConverted}.`);
    computerScore += 1;
  } else {
    console.log(`It's a tie. You choose ${humanChoiceConverted} and Computer also!`);
  }
  console.log(`Votre score: ${humanScore} - Computer's score: ${computerScore}`);
};

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();


playRound(humanSelection, computerSelection);