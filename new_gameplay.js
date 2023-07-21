let player = document.getElementById("player-score");
let computer = document.getElementById("computer-score");
let text = document.getElementById("text");
const buttons = document.querySelectorAll("button");
let playerScore = 0;
let computerScore = 0;

// logic to get computer choice

const getComputerChoice = () => {
  let choices = ["rock", "paper", "scissors"];
  index = Math.floor(Math.random() * 3);
  return choices.at(index);
};

// logic for score
const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    text.textContent = "You selected the same thing, draw.";
  }
  if (playerSelection === "rock") {
    if (computerSelection === "scissors") {
      text.textContent = "You won, rock beats scissors";
      return playerScore++;
    } else {
      text.textContent = "You lost, paper beats rock";
      return computerScore++;
    }
  }
  if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      text.textContent = "You won, paper beats rock";
      return playerScore++;
    } else {
      text.textContent = "You lost, scissors beats paper";
      return computerScore++;
    }
  }
  if (playerSelection === "scissors") {
    if (computerSelection === "paper") {
      text.textContent = "You won, scissors beats paper";
      return playerScore++;
    } else {
      text.textContent = "You lost, rock beats scissors";
      return computerScore++;
    }
  }
};

// add an event listener to buttons that call playRound\

buttons.forEach((button) =>
  button.addEventListener("click", () => {
    playerSelection = button.classList.value;
    console.log(playerSelection);
    computerSelection = getComputerChoice();
    console.log(computerSelection);
    playRound(playerSelection, computerSelection);
    player.textContent = `Your score is: ${playerScore}`;
    computer.textContent = `The computer's score is: ${computerScore}`;
    if (playerScore == 5 || computerScore == 5) {
      if (playerScore == 5) {
        text.textContent = "You Win!";
      } else {
        text.textContent = "Computer Wins! Try again";
      }
      playerScore = 0;
      computerScore = 0;
    }
  })
);

// change console.logs to outputs
// track score
