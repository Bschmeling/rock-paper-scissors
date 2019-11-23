    let playerScore = 0;
    let computerScore = 0;
    let player;
    let computer;


    const container = document.querySelector('#container');
    
    const results = document.createElement('div');
    results.classList.add('content');
    
    const runningScore = document.createElement('div');
    runningScore.classList.add('runningScore');
    
    const buttons = document.querySelectorAll('button');
    
    buttons.forEach((button) => {
      button.addEventListener('click', (e) => {
        player = button.id;
        computer = computerPlay();
        playGame();
      })
    })
    
    
    function playGame() {
      if (playerScore < 5 && computerScore < 5) {
        playRound();
        }
      else {
        winner();
        }
      }
    
    
    function computerPlay() {
      computerSelection = Math.random();
      if (computerSelection < 0.33) {
        computerSelection = "rock";
        }
      else if (computerSelection < 0.66) {
        computerSelection = "paper";
        }
      else {
        computerSelection = "scissors";
        }
      return computerSelection;
      }
      
      
    function playRound(playerSelection, computerSelection) {
      playerSelection = player;
      computerSelection = computer;
      if (playerSelection === computerSelection) {
        results.textContent = "It's a draw.";
        runningScore.textContent = 'Your score: ' + playerScore + '. Computer score: ' + computerScore + '.'
      }  
      else if (playerSelection === "rock" && computerSelection === "paper") {
        results.textContent = "You lose! Paper beats rock!";  
        computerScore++;
        runningScore.textContent = 'Your score: ' + playerScore + '. Computer score: ' + computerScore + '.'
      }
      else if (playerSelection === "rock" && computerSelection === "scissors") {
        results.textContent = "You win! Rock beats Scissors!"; 
        playerScore++;
        runningScore.textContent = 'Your score: ' + playerScore + '. Computer score: ' + computerScore + '.'
      }
      else if (playerSelection === "paper" && computerSelection === "rock") {
        results.textContent = "You win! Paper beats rock!";  
        playerScore++;
        runningScore.textContent = 'Your score: ' + playerScore + '. Computer score: ' + computerScore + '.'
      }
      else if (playerSelection === "paper" && computerSelection === "scissors") {
        results.textContent = "You lose! Scissors beats paper!"; 
        computerScore++;
        runningScore.textContent = 'Your score: ' + playerScore + '. Computer score: ' + computerScore + '.'
      }
      else if (playerSelection === "scissors" && computerSelection === "paper") {
        results.textContent = "You win! Scissors beats rock!";  
        playerScore++;
        runningScore.textContent = 'Your score: ' + playerScore + '. Computer score: ' + computerScore + '.'
      }
      else if (playerSelection === "scissors" && computerSelection === "rock") {
        results.textContent = "You lose! Rock beats Scissors!"; 
        computerScore++;
        runningScore.textContent = 'Your score: ' + playerScore + '. Computer score: ' + computerScore + '.'
      }
    }

function winner() {
  if (playerScore > computerScore) {
    alert('you\'re the winner!');
  } else {
    alert('You lose! =(');
  }
}

container.appendChild(results);
container.appendChild(runningScore);

/*    
    function game() {
      while(rounds < 5) {
        playRound();
        rounds++;
        console.log("Your score: " + playerScore + ", Computer score: " + computerScore);
      }
      if((rounds = 5) && (playerScore > computerScore)) {
        console.log("You won the game! " + playerScore + " to " + computerScore);
      }
      else if((rounds = 5) && (computerScore > playerScore)) {
        console.log("You lost the game! " + computerScore + " to " + playerScore);
      }
      else {
        console.log("It's a tie!");
      }    
    }   
    
    game();
  */
