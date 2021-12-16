import createShip from './shipFactory';
import { getRandomCoordinate, getRadnomDirection } from './utils.js';

function createGameboard(numRows, numCollumns) {
    const grid = createGrid(numRows, numCollumns);
    const ships = createShips(5);

    function createGrid(numRows, numCollumns) {
        let grid = new Array(numRows);
        for (let i = 0; i < numCollumns; ++i)
            grid[i] = new Array(numCollumns);

        for (let i = 0; i < numRows; ++i)
            for (let j = 0; j < numCollumns; ++j)
                grid[i][j] = null;

        return grid;
    }

    function createShips(numberOfShips) {
        let ships = [];
        for (let i = 0; i < numberOfShips; ++i)
            ships.push(createShip(i + 1, i));

        return ships;
    }

    function placeAllShips() {
        for (let i = 0; i < ships.length; ++i) {
            let randomCoordinate = getRandomCoordinate();
            let randomDirection = getRadnomDirection();

            while (!shipCanBePlaced(ships[i], randomCoordinate, randomDirection)) {
                randomCoordinate = getRandomCoordinate();
                randomDirection = getRadnomDirection();
            }

            placeShip(ships[i], randomCoordinate, randomDirection);
        }
    }

    function shipCanBePlaced(ship, coordinate, direction) {
        if (direction == 'horisontal' && (coordinate.x + ship.length - 1) < 10) {
            for (let i = coordinate.x; i < (coordinate.x + ship.length); ++i) {
                if (grid[i][coordinate.y] != null) {
                    return false;
                }
                return true;
            }
        } else if (direction == 'vertical' && (coordinate.y + ship.length - 1) < 10) {
            for (let i = coordinate.y; i < (coordinate.y + ship.length); ++i) {
                if (grid[coordinate.x][i] != null) {
                    return false;
                }
                return true;
            }
        } else
            return false;
    }

    function placeShip(ship, coordinate, direction) {
        for (let i = 0; i < ship.length; ++i) {
            if (direction == 'horisontal') {
                grid[coordinate.x + i][coordinate.y] = (ship.id + (i / 10));
            } else if (direction == 'vertical') {
                grid[coordinate.x][coordinate.y + i] = (ship.id + (i / 10));
            }
        }
    }

    function receiveAttack(coordinate) {
        if (grid[coordinate.x][coordinate.y] == 'miss') {
            return;
        } else if (grid[coordinate.x][coordinate.y] == null) {
            recordMiss(coordinate);
        } else {
            const id = grid[coordinate.x][coordinate.y];
            for (let i = 0; i < ships.length; ++i) {
                if (parseInt(id) === ships[i].id) {
                    ships[i].hit((id * 10) % 10);
                }
            }
        }
    }

    function recordMiss(coordinate) {
        grid[coordinate.x][coordinate.y] = 'miss';
    }

    function allShipsHaveSunk() {
        let sunkenShips = 0;
        for (let i = 0; i < ships.length; ++i) {
            if (ships[i].isSunk()) {
                sunkenShips++;
            }
        }

        if (sunkenShips == ships.length) {
            return true;
        } else {
            return false;
        }
    }

    return {
        grid,
        ships,
        receiveAttack,
        allShipsHaveSunk
    };
}

export default createGameboard;