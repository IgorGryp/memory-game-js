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
];
const gameBoard = document.querySelector('.game-board');
const resetBtn = document.querySelector('.reset-btn');
const startGameBtn = document.querySelector('.start-game-btn');
const namesContainer = document.querySelector('.players-container');
const playerOneName = document.querySelector('.player-1-name');
const playerTwoName = document.querySelector('.player-2-name');
const playerOneScore = document.querySelector('.player-1-score');
const playerTwoScore = document.querySelector('.player-2-score');

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
  document.getElementById('game-section').style.display = 'block';
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
    this.classList.add('card-open');

    setTimeout(() => {
      /* If there more then two opened cards... */
      if (document.querySelectorAll('.card-open').length > 1) {
        /* If 1 card match 2 card... */
        if (
          document.querySelectorAll('.card-open')[0].innerHTML ==
          document.querySelectorAll('.card-open')[1].innerHTML
        ) {
          document.querySelectorAll('.card-open')[0].classList.add('card-match');
          document.querySelectorAll('.card-open')[1].classList.add('card-match');

          document.querySelectorAll('.card-open')[1].classList.remove('card-open');
          document.querySelectorAll('.card-open')[0].classList.remove('card-open');

          if (document.querySelectorAll('.card-match').length == images.length) {
            alert('Win!');
          }
        } else {
          document.querySelectorAll('.card-open')[1].classList.remove('card-open');
          document.querySelectorAll('.card-open')[0].classList.remove('card-open');
        }
      }
    }, 500);
  };
}

/* Resets game */
resetBtn.addEventListener('click', () => window.location.reload());
