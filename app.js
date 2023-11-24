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

/* Resets game */
resetBtn.addEventListener('click', () => window.location.reload());

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
  };
}
