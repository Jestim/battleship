import createGameboard from "./gameboardFactory.js";

function createPlayer() {
    const gameboard = createGameboard(10, 10);

    return {
        gameboard
    };
}

export default createPlayer;