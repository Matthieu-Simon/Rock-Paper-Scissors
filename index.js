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

// function playGame () {
//   let total = 0;
//   let computerScore = 0;
//   let humanScore = 0;

//   while (total < 5) {
//     const humanSelection = getHumanChoice();
//     const computerSelection = getComputerChoice();

//     playRound(humanSelection, computerSelection);
//     total++
//   };

//   function playRound(humanChoice, computerChoice) {
//     const humanChoiceConverted = humanChoice.toLowerCase();
//     const computerChoiceConverted = computerChoice.toLowerCase();

//     if (humanChoiceConverted === "rock" && computerChoiceConverted === "scissors"
//       || humanChoiceConverted === "paper" && computerChoiceConverted === "rock"
//       || humanChoiceConverted === "scissors" && computerChoiceConverted === "paper"
//     ) {
//       console.log(`You win ! ${humanChoiceConverted} beats ${computerChoiceConverted}`);
//       humanScore += 1;
//     } else if (humanChoiceConverted === "rock" && computerChoiceConverted === "paper"
//       || humanChoiceConverted === "paper" && computerChoiceConverted === "scissors"
//       || humanChoiceConverted === "scissors" && computerChoiceConverted === "rock"
//     ) {
//       console.log(`You lose... ${computerChoiceConverted} beats ${humanChoiceConverted}.`);
//       computerScore += 1;
//     } else {
//       console.log(`It's a tie. You choose ${humanChoiceConverted} and Computer also!`);
//     }
//     console.log(`Votre score: ${humanScore} - Computer's score: ${computerScore}`);
//   };
// }

// playGame();

const body = document.querySelector("body");

const btnRock = document.createElement("button");
btnRock.classList.add("btn");
btnRock.textContent = "Rock";

const btnPaper = document.createElement("button");
btnPaper.classList.add("btn");
btnPaper.textContent = "Paper";

const btnScissors = document.createElement("button");
btnScissors.classList.add("btn");
btnScissors.textContent = "Scissors";

body.appendChild(btnRock);
body.appendChild(btnPaper);
body.appendChild(btnScissors);