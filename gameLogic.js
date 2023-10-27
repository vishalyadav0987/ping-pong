'use strict';
let score0 = document.querySelector('#score--0');
let score1 = document.querySelector('#score--1');
let currentScore0El = document.querySelector('#current--0');
let currentScore1El = document.querySelector('#current--1');
let newGame = document.querySelector('.btn--new');
let rollDice = document.querySelector('.btn--roll');
let holdDice = document.querySelector('.btn--hold');
document.querySelector('#dice').classList.add('hidden');
score0.textContent = 0;
score1.textContent = 0;
let currentScore0 = 0;
let currentScore1 = 0; 
let scores = [0, 0];
const switchPlayer = function () {
    document.getElementById(`current--${currentScore1}`).textContent = 0;
    currentScore0 = 0;
    currentScore1 = currentScore1 === 0 ? 1 : 0;
    document.querySelector('.player--0').classList.toggle('player--active');
    document.querySelector('.player--1').classList.toggle('player--active');
}

rollDice.addEventListener('click', function () {
    document.querySelector('#dice').classList.remove('hidden');
    let randomGenerateDice = Number(Math.trunc(Math.random() * 6) + 1);
    document.querySelector('#dice').src = `dice--${randomGenerateDice}.png`;

    if (randomGenerateDice !== 1) {
        currentScore0 += randomGenerateDice;
        document.getElementById(`current--${currentScore1}`).textContent = currentScore0;

    }
    else {
        switchPlayer();
    }
})

holdDice.addEventListener('click', function () {
    console.log('pressed');

    scores[currentScore1] += currentScore0;
    document.getElementById(`score--${currentScore1}`).textContent = scores[currentScore1];
    if (scores[currentScore1] >= 100) {
        document.getElementById("rollDice").disabled = true;
        document.getElementById("holdDice").disabled = true;
        document.querySelector(`.player--${currentScore1}`).classList.remove('player--active');
        document.querySelector(`.player--${currentScore1}`).classList.add('player--winner');
    }
    else {
        switchPlayer();
    }
})
newGame.addEventListener('click', function () {
    document.querySelector(`.player--${currentScore1}`).classList.add('player--active');
    document.querySelector(`.player--${currentScore1}`).classList.remove('player--winner');
    document.querySelector('#score--0').textContent = 0;
    document.querySelector('#score--1').textContent = 0;
    document.querySelector('#current--0').textContent = 0;
    document.querySelector('#current--1').textContent = 0;
    document.getElementById("rollDice").disabled = false;
    document.getElementById("holdDice").disabled = false;
    document.querySelector('#dice').classList.add('hidden');
})