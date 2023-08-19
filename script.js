'use strict';
const playerName = document.querySelector('.player-name');
const submit = document.querySelector('.submit-name');
const choiceSelector = document.querySelectorAll('.choice');
const displayPlayerChoice = document.querySelector('.player-choice img');
const displayComputerChoice = document.querySelector('.computer-choice img');
const updatePlayerScore = document.querySelector('.player-display-score');
const inputValueName = document.querySelector('.input-player-name');
const updateComputerScore = document.querySelector('.computer-display-score');
const crownPlayer = document.createElement('div');
crownPlayer.classList.add('crown', 'crown-hidden');
crownPlayer.textContent = '👑';
console.log(String(crownPlayer));
const crownComputer = document.querySelector('.crown-computer');

let playerScore = 0;
let computerScore = 0;
const cpChoice = ['rock', 'paper', 'scissors'];

const nameHandlerLogic = function () {
  playerName.textContent = '';
  playerName.textContent = inputValueName.value;
  playerName.append(crownPlayer);
  document.querySelector('.name-pop-up').classList.add('hidden');
  document.querySelector('.overlay').classList.add('hidden');
  document.querySelector('.main').classList.remove('opacity');
};
const nameHandlerClick = function (e) {
  e.preventDefault();
  nameHandlerLogic();
};
submit.addEventListener('click', nameHandlerClick);
const gameLogic = function (playerChoice, computerChoice) {
  if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    playerScore++;
    updatePlayerScore.textContent = playerScore;
  } else if (playerChoice === computerChoice) {
    playerScore++;
    updatePlayerScore.textContent = playerScore;
    computerScore++;
    updateComputerScore.textContent = computerScore;
  } else {
    computerScore++;
    updateComputerScore.textContent = computerScore;
  }
};
let timeInt;
let timeOut;
const playFunction = function (e) {
  if (timeInt || timeOut) {
    clearInterval(timeInt);
    clearTimeout(timeOut);
  }
  timeInt = setInterval(() => {
    displayPlayerChoice.src = `img/rock.png`;
    displayComputerChoice.src = `img/rock.png`;
    displayComputerChoice.classList.toggle('transform');
    displayPlayerChoice.classList.toggle('transform');
  }, 500);

  timeOut = setTimeout(() => {
    clearInterval(timeInt);
    const chose = e.target.textContent;
    const rn = Math.floor(Math.random() * 3);
    displayPlayerChoice.src = `img/${chose}.png`;
    displayComputerChoice.src = `img/${cpChoice[rn]}.png`;
    gameLogic(chose, cpChoice[rn]);
    if (
      Number(updatePlayerScore.textContent) >
      Number(updateComputerScore.textContent)
    ) {
      crownPlayer.classList.remove('crown-hidden');
      crownComputer.classList.add('crown-hidden');
    } else if (
      Number(updateComputerScore.textContent) >
      Number(updatePlayerScore.textContent)
    ) {
      crownPlayer.classList.add('crown-hidden');
      crownComputer.classList.remove('crown-hidden');
    } else {
      crownPlayer.classList.add('crown-hidden');
      crownComputer.classList.add('crown-hidden');
    }
  }, 3000);
};

choiceSelector.forEach(choice => {
  choice.addEventListener('click', playFunction);
});
