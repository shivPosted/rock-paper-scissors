'use strict';
const playerName = document.querySelector('.player-name');
const submit = document.querySelector('.submit-name');
const choiceSelector = document.querySelectorAll('.choice');
const displayPlayerChoice = document.querySelector('.player-choice img');
const displayComputerChoice = document.querySelector('.computer-choice img');

const cpChoice = ['rock', 'paper', 'scissors'];
console.log(cpChoice);
submit.addEventListener('click', function (e) {
  e.preventDefault();
  playerName.textContent = document.querySelector('.input-player-name').value;
  document.querySelector('.name-pop-up').classList.add('hidden');
  document.querySelector('.overlay').classList.add('hidden');
  document.querySelector('.main').classList.remove('opacity');
});

const playFunction = function (e) {
  const timeInt = setInterval(() => {
    displayPlayerChoice.src = `img/rock.png`;
    displayComputerChoice.src = `img/rock.png`;
    displayComputerChoice.classList.toggle('transform');
    displayPlayerChoice.classList.toggle('transform');
  }, 500);

  setTimeout(() => {
    clearInterval(timeInt);
    const chose = e.target.textContent;
    const rn = Math.floor(Math.random() * 3);
    console.log(rn);
    displayPlayerChoice.src = `img/${chose}.png`;
    displayComputerChoice.src = `img/${cpChoice[rn]}.png`;
  }, 3000);
};

choiceSelector.forEach(choice => {
  choice.addEventListener('click', playFunction);
});
