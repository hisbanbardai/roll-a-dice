'use strict';

//Selecting elements
const score0Ele = document.querySelector('#score--0');
const score1Ele = document.getElementById('score--1');
const diceEle = document.querySelector('.dice');
const rollDiceEle = document.querySelector('.btn--roll');
const current0Ele = document.getElementById('current--0');

//Starting conditions
score0Ele.textContent = 0;
score1Ele.textContent = 0;
diceEle.classList.add('hidden');

//Rolling Dice Functionality
let currentScore = 0;

rollDiceEle.addEventListener('click', () => {
  const diceNumber = Math.floor(Math.random() * 6 + 1);
  diceEle.classList.remove('hidden');
  diceEle.src = `dice-${diceNumber}.png`;

  if (diceNumber !== 1) {
    currentScore += diceNumber;
  } else {
    currentScore = 0;
  }

  current0Ele.textContent = currentScore;
});
