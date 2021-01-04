let playerName;

const introForm = document.querySelector('.intro');
const wrapper = document.querySelector('.wrapper');

introForm.addEventListener('submit', (e) => {
  e.preventDefault();
  playerName = document.querySelector('.name').value;

  introForm.style.opacity = 0;
  introForm.style.zIndex = 0;
  introForm.style.display = 'none';
  wrapper.style.opacity = 1;

  showNames();
});

let playerScore = 0;
let computerScore = 0;

const playerScoreDiv = document.querySelector('.player-score');
const computerScoreNumber = document.querySelector('.computer-score-number');

function showNames() {
  playerScoreDiv.innerHTML = `${playerName}: <span class="player-score-number"></span>`;
  const playerScoreNumber = document.querySelector('.player-score-number');

  playerScoreNumber.textContent = `${playerScore}`;
  computerScoreNumber.textContent = `${computerScore}`;
}

const playerBox = document.querySelector('.player-box');
const computerBox = document.querySelector('.computer-box');
const timerBox = document.querySelector('.timer-box');

const btns = document.querySelectorAll('.play-btn');

let computerHand;

function countDown(playerHand) {
  let i = 3;

  let int = setInterval(() => {
    timerBox.innerHTML = `<h1>${i}</h1>`;
    playerBox.textContent += '.';
    computerBox.textContent += '.';
    i--;
  }, 1000);

  setTimeout(() => {
    clearInterval(int);
    showHands(playerHand);
  }, 4000);
}

function showHands(playerHand) {
  let randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber === 1) {
    computerHand = 'rock';
  } else if (randomNumber === 2) {
    computerHand = 'paper';
  } else if (randomNumber === 3) {
    computerHand = 'scissors';
  }

  computerBox.innerHTML = `<img src="./img/${computerHand}.svg">`;
  playerBox.innerHTML = `<img src="./img/${playerHand}.svg">`;

  displayResult(playerHand, computerHand);
}

function displayResult(playerHand, computerHand) {
  if (playerHand === computerHand) {
    timerBox.innerHTML = `<p>Draw!</p>`;
  } else if (playerHand === 'rock' && computerHand === 'paper') {
    timerBox.innerHTML = `<p>Computer Wins!</p>`;
  } else if (playerHand === 'rock' && computerHand === 'scissors') {
    timerBox.innerHTML = `<p>Player Wins!</p>`;
  } else if (playerHand === 'paper' && computerHand === 'rock') {
    timerBox.innerHTML = `<p>Player Wins!</p>`;
  } else if (playerHand === 'paper' && computerHand === 'scissors') {
    timerBox.innerHTML = `<p>Computer Wins!</p>`;
  } else if (playerHand === 'scissors' && computerHand === 'rock') {
    timerBox.innerHTML = `<p>Computer Wins!</p>`;
  } else if (playerHand === 'scissors' && computerHand === 'paper') {
    timerBox.innerHTML = `<p>Player Wins!</p>`;
  }

  if (timerBox.innerHTML === `<p>Player Wins!</p>`) {
    playerScore++;
  } else if (timerBox.innerHTML === `<p>Computer Wins!</p>`) {
    computerScore++;
  }

  updateScores();
}

btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    countDown(e.target.dataset.hand);
  });
});

function updateScores() {
  const playerScoreNumber = document.querySelector('.player-score-number');

  playerScoreNumber.textContent = `${playerScore}`;
  computerScoreNumber.textContent = `${computerScore}`;
}
