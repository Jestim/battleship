import game from './gameLogic.js';

function computerGrideventListeners() {
    const computerAreaEl = document.getElementById('computer');
    const squaresEl = computerAreaEl.querySelectorAll('.square');

    squaresEl.forEach(square => {
        square.addEventListener('click', game.playRound);
    });
}

export default computerGrideventListeners;