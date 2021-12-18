import createGameboard from './gameboardFactory.js';
import { getRandomCoordinate } from './utils.js';

function createPlayer(playerName) {
    const gameboard = createGameboard(10, 10);
    const name = playerName;

    function attack(player, coordinate) {
        player.gameboard.receiveAttack(coordinate);
    }

    function randomAttack(player) {
        let coordinate = getRandomCoordinate();

        while (player.gameboard.grid[coordinate.x][coordinate.y] === 'miss') {
            coordinate = getRandomCoordinate();
        }

        attack(player, coordinate);
    }

    return {
        name,
        gameboard,
        attack,
        randomAttack,
    };
}

export default createPlayer;