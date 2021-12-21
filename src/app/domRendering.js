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
            squareEl.id = player.gameboard.grid[i][j];


            if (squareEl.id != 'null' && player.name != 'Computer') {
                if (parseInt(squareEl.id) < 1) {
                    squareEl.classList.add('ship0');
                } else if (parseInt(squareEl.id) < 2) {
                    squareEl.classList.add('ship1');
                } else if (parseInt(squareEl.id) < 3) {
                    squareEl.classList.add('ship2');
                } else if (parseInt(squareEl.id) < 4) {
                    squareEl.classList.add('ship3');
                } else if (parseInt(squareEl.id) < 5) {
                    squareEl.classList.add('ship4');
                }
            }

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