function getComputerChoice() {
  const options = ['rock', 'paper', 'scissors']
  let randomChoice = Math.floor(Math.random() * 3);
  
  return options[randomChoice];
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  const result = document.querySelector('.result');
  const playerScoreboard = document.querySelector('.player-score');
  const computerScoreboard = document.querySelector('.computer-score');

  const choices = document.querySelectorAll('.choice');
  choices.forEach(choice => {
    choice.addEventListener('click', () => {
      let playerChoice = choice.className.split(" ")[0];
      let computerChoice = getComputerChoice();
      
      playRound(playerChoice, computerChoice);
      
      if (playerScore === 5 || computerScore === 5) {
        gameOver();
      }
    });
  })

  const restartButton = document.querySelector('#restart');
  restartButton.addEventListener('click', () => {
    window.location.reload();
  })

  function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      result.textContent = 'IT\'S A TIE!!';
    } else if (playerSelection === 'rock') {
      if (computerSelection === 'paper') {
        result.textContent = 'Computer played paper. YOU LOSE!!';
        computerScoreboard.textContent = ++computerScore;
      } else {
        result.textContent = 'Computer played scissors. YOU WIN!!';
        playerScoreboard.textContent = ++playerScore;
      }
    } else if (playerSelection === 'paper') {
      if (computerSelection === 'scissors') {
        result.textContent = 'Computer played scissors. YOU LOSE!!';
        computerScoreboard.textContent = ++computerScore;
      } else {
        result.textContent = 'Computer played rock. YOU WIN!!';
        playerScoreboard.textContent = ++playerScore;
      }
    } else if (playerSelection === 'scissors') {
      if (computerSelection === 'rock') {
        result.textContent = 'Computer played rock. YOU LOSE!!';
        computerScoreboard.textContent = ++computerScore;
      } else {
        result.textContent = 'Computer played paper. YOU WIN!!';
        playerScoreboard.textContent = ++playerScore;
      }
    }
  }

  function gameOver() {
    choices.forEach(choice => {
      choice.style.display = 'none';
    })
    if (playerScore > computerScore) {
      result.textContent = 'YOU ARE THE WINNER!!!';
    } else {
      result.textContent = 'THE COMPUTER IS THE WINNER!!!';
    }
  }
}

game();