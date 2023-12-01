const images = [
  '🐸',
  '🐸',
  '🐰',
  '🐰',
  '🦝',
  '🦝',
  '🐻‍❄️',
  '🐻‍❄️',
  '🐻',
  '🐻',
  '🐯',
  '🐯',
  '🐵',
  '🐵',
  '🐺',
  '🐺',
  '🦊',
  '🦊',
  '🐭',
  '🐭',
  '🐨',
  '🐨',
  '🐹',
  '🐹',
  '👻',
];
const gameBoard = document.querySelector('.game-board');
const resetBtn = document.querySelector('.reset-btn');
const startGameBtn = document.querySelector('.start-game-btn');
const playersSection = document.querySelector('.players-section');
const gameSection = document.querySelector('.game-section');
const playerOneName = document.querySelector('.player-1-name');
const playerTwoName = document.querySelector('.player-2-name');
const playerOneScore = document.querySelector('.player-1-score');
const playerTwoScore = document.querySelector('.player-2-score');
const player = document.querySelector('.player');

let currentPlayer = 1;
let playerOneMatches = 0;
let playerTwoMatches = 0;

/* --------------------------------------------------------- */

/* The game starts with the modal window displaying */
openModal();

// Function to open the modal
function openModal() {
  document.getElementById('modal').style.display = 'flex';
}

/* --------------------------------------------------------- */

startGameBtn.addEventListener('click', () => startGame());

// Function to start the game
function startGame() {
  playersSection.style.display = 'flex';
  gameSection.style.display = 'block';
  // Get player names from input fields
  let player1 = document.getElementById('player1').value;
  let player2 = document.getElementById('player2').value;

  // Check if players entered names
  if (player1 && player2) {
    // Display player names on the page
    playerOneName.innerHTML = `Player 1: ${player1}`;
    playerOneScore.innerHTML = `Score: 0`;
    playerTwoName.innerHTML = `Player 2: ${player2}`;
    playerTwoScore.innerHTML = `Score: 0`;
    // Close the modal
    document.getElementById('modal').style.display = 'none';
  } else {
    // If any player didn't enter a name, show an alert
    alert('Please enter names for both players to start the game.');
  }
}

/* --------------------------------------------------------- */

/* Randomly rearranges the elements in the images array. */
const randomImage = images.sort(() => (Math.random() > 0.5 ? 2 : -1));

for (let i = 0; i < images.length; i++) {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = randomImage[i];
  gameBoard.appendChild(card);

  /* Opens clicked card */
  card.onclick = function () {
    if (!this.classList.contains('card-open') && !this.classList.contains('card-match')) {
      this.classList.add('card-open');

      setTimeout(() => {
        /* If there are more than two opened cards... */
        if (document.querySelectorAll('.card-open').length > 1) {
          /* If 1 card matches 2 cards... */
          if (
            document.querySelectorAll('.card-open')[0].innerHTML ==
            document.querySelectorAll('.card-open')[1].innerHTML
          ) {
            /* Add matching classes  */
            document.querySelectorAll('.card-open')[0].classList.add('card-match');
            document.querySelectorAll('.card-open')[1].classList.add('card-match');

            if (currentPlayer === 1) {
              playerOneMatches++;
              playerOneScore.innerHTML = `Score: ${playerOneMatches}`;
            } else {
              playerTwoMatches++;
              playerTwoScore.innerHTML = `Score: ${playerTwoMatches}`;
            }

            document.querySelectorAll('.card-open').forEach((card) => {
              card.classList.remove('card-open');
            });

            checkWin(); // Checks which player won
          } else {
            document.querySelectorAll('.card-open').forEach((card) => {
              card.classList.remove('card-open');
            });

            // Switch to the next player
            currentPlayer = currentPlayer === 1 ? 2 : 1;
            player.innerHTML = `Player ${currentPlayer}'s turn`;
          }
        }
      }, 500);
    }
  };
}

/* Checks which player won */
function checkWin() {
  if (playerOneMatches + playerTwoMatches === (images.length - 1) / 2) {
    player.style.color = 'red';
    player.innerHTML = `Player ${currentPlayer} won!`;
  }
}

/* Reset game */
resetBtn.addEventListener('click', () => window.location.reload());
