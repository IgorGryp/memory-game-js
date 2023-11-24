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

resetBtn.addEventListener('click', () => window.location.reload());

const randomImage = images.sort(() => (Math.random() > 0.5 ? 2 : -1));

for (let i = 0; i < images.length; i++) {
  const cardBox = document.createElement('div');
  cardBox.className = 'card-box';
  cardBox.innerHTML = randomImage[i];
  gameBoard.appendChild(cardBox);
}
