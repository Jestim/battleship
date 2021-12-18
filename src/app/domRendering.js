const bodyEl = document.querySelector('body');

function createHeaderEl() {
    const headerEl = document.createElement('header');
    headerEl.classList.add('header');
    const headerTextEl = document.createElement('h1');
    headerTextEl.classList.add('header-text');

    headerTextEl.textContent = 'Battleship';

    headerEl.appendChild(headerTextEl);
    bodyEl.appendChild(headerEl);
}

function createGameAreaEl(human, computer) {
    const gameAreaEl = document.createElement('div');
    gameAreaEl.classList.add('game-area');

    const humanAreaEl = createPlayerAreaEl(human);
    const computerAreaEl = createPlayerAreaEl(computer);

    gameAreaEl.appendChild(humanAreaEl);
    gameAreaEl.appendChild(computerAreaEl);
    bodyEl.appendChild(gameAreaEl);
}

function createPlayerAreaEl(player) {
    const playerAreaEl = document.createElement('div');
    playerAreaEl.classList.add('player-area');

    const playerNameEl = document.createElement('h2');
    playerNameEl.classList.add('player-name');
    playerNameEl.textContent = player.name;
    playerAreaEl.appendChild(playerNameEl);

    const gameboardEl = createGameboardEl(player);
    playerAreaEl.appendChild(gameboardEl);

    return playerAreaEl;
}

function createGameboardEl(player) {
    const gameboardEl = document.createElement('div');
    gameboardEl.classList.add('gameboard');

    for (let i = 0; i < player.gameboard.grid.length; ++i) {
        for (let j = 0; j < player.gameboard.grid[i].length; ++j) {
            const squareEl = document.createElement('div');
            squareEl.classList.add('square');
            gameboardEl.appendChild(squareEl);
        }
    }

    return gameboardEl;
}

export {
    createHeaderEl,
    createGameAreaEl,
    createGameboardEl
};