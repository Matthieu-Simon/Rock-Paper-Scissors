const body = document.querySelector("body");

const message = document.createElement("p");
message.textContent = "";
body.appendChild(message);

const result = document.createElement("p");
result.textContent = "";
body.appendChild(result);

const annonce = document.createElement("p");
annonce.textContent = "";
annonce.classList.add("annonce");
body.appendChild(annonce);

const buttons = ["Rock", "Paper", "Scissors"];
buttons.forEach(choice => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.textContent = choice;
  btn.addEventListener("click", () => playRound(choice, getComputerChoice()));
  body.appendChild(btn);
});

const btnReset = document.createElement("button");
btnReset.textContent = "Reset";
btnReset.classList.add("reset");
btnReset.style.display = "none";
body.appendChild(btnReset);

btnReset.addEventListener("click", resetGame);

const rules = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper"
}

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function playRound(humanChoice, computerChoice) {
  const human = humanChoice.toLowerCase();
  const computer = computerChoice.toLowerCase();

  if (human === computer) {
    message.textContent = `It's a tie! You both chose ${human}.`;
  } else if (rules[human] === computer) {
    message.textContent = `You win! ${human} beats ${computer}.`;
    humanScore += 1;
  } else {
    message.textContent = `You lose... ${computer} beats ${human}.`;
    computerScore += 1;
  }

  result.textContent = `Player: ${humanScore} - Computer: ${computerScore}`;
  checkWinner();
}

function checkWinner() {
  if (humanScore === 5) {
    annonce.textContent = "Bravo, vous avez remporté la partie !!!";
    btnReset.style.display = "block";
    disableButtons();
  } else if (computerScore === 5) {
    annonce.textContent = "Vous avez perdu... L'ordinateur remporte la partie!";
    btnReset.style.display = "block";
    disableButtons();
  }
}

function disableButtons() {
  const allButtons = document.querySelectorAll(".btn");
  allButtons.forEach(btn => btn.disabled = true);
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  message.textContent = "";
  result.textContent = "";
  annonce.textContent = "";

  const allButtons = document.querySelectorAll(".btn");
  allButtons.forEach(btn => btn.disabled = false);

  btnReset.style.display = "none";
}