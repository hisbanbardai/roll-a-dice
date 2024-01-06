'use strict';

//Selecting elements
const score0Ele = document.querySelector('#score--0');
const score1Ele = document.getElementById('score--1');
const diceEle = document.querySelector('.dice');
const rollDiceEle = document.querySelector('.btn--roll');
const holdEle = document.querySelector('.btn--hold');
const newEle = document.querySelector('.btn--new');
const current0Ele = document.getElementById('current--0');
const current1Ele = document.getElementById('current--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

function switchPlayer() {
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
}

//Starting conditions
score0Ele.textContent = 0;
score1Ele.textContent = 0;
let activePlayer = 0;
let isPlaying = true;
diceEle.classList.add('hidden');

//Rolling Dice Functionality
let currentScore = 0;

rollDiceEle.addEventListener('click', () => {
  if (isPlaying) {
    const diceNumber = Math.floor(Math.random() * 6 + 1);
    diceEle.classList.remove('hidden');
    diceEle.src = `dice-${diceNumber}.png`;

    if (diceNumber !== 1) {
      currentScore += diceNumber;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      document.getElementById(`current--${activePlayer}`).textContent = 0;

      //Switch player
      switchPlayer();
    }
  }
});

let totalScore = 0;

holdEle.addEventListener('click', () => {
  if (isPlaying) {
    //Add current score to current player's total score
    totalScore = Number(
      document.getElementById(`score--${activePlayer}`).textContent
    );
    totalScore += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = totalScore;

    if (totalScore >= 20) {
      isPlaying = false;
      diceEle.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      //Switch player
      switchPlayer();
    }
  }
});

newEle.addEventListener('click', () => {
  currentScore = 0;
  totalScore = 0;
  current0Ele.textContent = 0;
  current1Ele.textContent = 0;
  score0Ele.textContent = 0;
  score1Ele.textContent = 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  activePlayer = 0;
  isPlaying = true;
  diceEle.classList.add('hidden');
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--active');
});
