function getComputerChoice() {
  const randomNumber = Math.round(Math.random() * 3);
  let choice = "";
  if (randomNumber === 0) {
    choice = "Rock";
  } else if (randomNumber === 1) {
    choice = "Paper";
  } else {
    choice = "Scissors";
  }
  return choice
};

console.log(getComputerChoice());

function getHumanChoice() {
  let choice = prompt("Veuillez choisir entre Rock, Paper or Scissors");
  return choice;
};

console.log(getHumanChoice());