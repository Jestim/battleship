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

    function placeAllShipsRandomly() {
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
        let freeSquares = 0;

        if (shipFitsHorisontally(ship, coordinate, direction)) {
            for (let i = coordinate.x; i < (coordinate.x + ship.length); ++i) {
                if (grid[coordinate.y][i] === null) {
                    freeSquares++;
                }
            }
        } else if (shipFitsVertically(ship, coordinate, direction)) {
            for (let i = coordinate.y; i < (coordinate.y + ship.length); ++i) {
                if (grid[i][coordinate.x] === null) {
                    freeSquares++;
                }
            }
        } else {
            return false;
        }

        if (freeSquares === ship.length) {
            return true;
        } else {
            return false;
        }
    }

    function shipFitsHorisontally(ship, coordinate, direction) {
        if (direction === 'horisontal' && (coordinate.x + ship.length - 1) < 10)
            return true;
        else
            return false;
    }

    function shipFitsVertically(ship, coordinate, direction) {
        if (direction === 'vertical' && (coordinate.y + ship.length - 1) < 10)
            return true;
        else
            return false;
    }

    function placeShip(ship, coordinate, direction) {
        if (shipCanBePlaced(ship, coordinate, direction)) {
            for (let i = 0; i < ship.length; ++i) {
                if (direction === 'horisontal') {
                    grid[coordinate.y][coordinate.x + i] = (ship.id + (i / 10));
                } else if (direction === 'vertical') {
                    grid[coordinate.y + i][coordinate.x] = (ship.id + (i / 10));
                }
            }
        } else {
            return 'Can\'t place ship there';
        }
    }

    function receiveAttack(coordinate) {
        if (grid[coordinate.y][coordinate.x] === 'miss') {
            return;
        } else if (grid[coordinate.y][coordinate.x] === null) {
            recordMiss(coordinate);
        } else {
            const id = grid[coordinate.y][coordinate.x];
            for (let i = 0; i < ships.length; ++i) {
                if (parseInt(id) === ships[i].id) {
                    ships[i].hit((id * 10) % 10);
                }
            }
        }
    }

    function recordMiss(coordinate) {
        grid[coordinate.y][coordinate.x] = 'miss';
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

    function isSquareEmpty(coordinate) {
        if (grid[coordinate.y][coordinate.x] === null) {
            return true;
        } else {
            return false;
        }
    }

    function reset() {
        for (let i = 0; i < numRows; ++i)
            for (let j = 0; j < numCollumns; ++j)
                grid[i][j] = null;

        for (let i = 0; i < 5; ++i)
            ships[i] = createShip(i + 1, i);

    }

    return {
        grid,
        ships,
        placeAllShipsRandomly,
        shipCanBePlaced,
        placeShip,
        receiveAttack,
        allShipsHaveSunk,
        isSquareEmpty,
        reset
    };
}

export default createGameboard;