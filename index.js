const getComputerChoice = () => {
  let choices = ["rock", "paper", "scissors"];
  index = Math.floor(Math.random() * 3);
  return choices.at(index);
};

const game = () => {
  playerScore = 0;
  computerScore = 0;

  const playRound = (playerSelection, computerSelection) => {
    console.log(computerSelection);
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
      console.log("Draw");
      return;
    }
    if (playerSelection.toLowerCase() === "rock") {
      if (computerSelection.toLowerCase() === "scissors") {
        console.log("You won, rock beats scissors");
        return playerScore++;
      } else {
        console.log("You lost, paper beats rock");
        return computerScore++;
      }
    }
    if (playerSelection.toLowerCase() === "paper") {
      if (computerSelection.toLowerCase() === "rock") {
        console.log("You won, paper beats rock");
        return playerScore++;
      } else {
        console.log("You lost, scissors beats paper");
        return computerScore++;
      }
    }
    if (playerSelection.toLowerCase() === "scissors") {
      if (computerSelection.toLowerCase() === "paper") {
        console.log("You won, scissors beats paper");
        return playerScore++;
      } else {
        console.log("You lost, rock beats scissors");
        return computerScore++;
      }
    }
  };

  for (i = 0; i < 5; i++) {
    const playerSelection = prompt("Enter your choice: ");
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    const getComputerChoice = () => {
      let choices = ["rock", "paper", "scissors"];
      index = Math.floor(Math.random() * 3);
      return choices.at(index);
    };

    const game = () => {
      playerScore = 0;
      computerScore = 0;

      const playRound = (playerSelection, computerSelection) => {
        console.log(computerSelection);
        if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
          console.log("Draw");
          return;
        }
        if (playerSelection.toLowerCase() === "rock") {
          if (computerSelection.toLowerCase() === "scissors") {
            console.log("You won, rock beats scissors");
            return playerScore++;
          } else {
            console.log("You lost, paper beats rock");
            return computerScore++;
          }
        }
        if (playerSelection.toLowerCase() === "paper") {
          if (computerSelection.toLowerCase() === "rock") {
            console.log("You won, paper beats rock");
            return playerScore++;
          } else {
            console.log("You lost, scissors beats paper");
            return computerScore++;
          }
        }
        if (playerSelection.toLowerCase() === "scissors") {
          if (computerSelection.toLowerCase() === "paper") {
            console.log("You won, scissors beats paper");
            return playerScore++;
          } else {
            console.log("You lost, rock beats scissors");
            return computerScore++;
          }
        }
      };

      for (i = 0; i < 5; i++) {
        const playerSelection = prompt("Enter your choice: ");
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
      }

      return `You scored ${playerScore}, the computer scored ${computerScore}`;
    };

    console.log(game());
  }

  return `You scored ${playerScore}, the computer scored ${computerScore}`;
};

console.log(game());
