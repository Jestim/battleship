import { expect, test } from '@jest/globals';
import createGameboard from '../src/gameboardFactory.js';
import createShip from '../src/shipFactory.js';


// createGrid
test('Returns an object with a 2d array property 10x10, all null values', () => {
    let grid = new Array(10);

    for (let i = 0; i < 10; ++i)
        grid[i] = new Array(10);

    for (let i = 0; i < 10; ++i)
        for (let j = 0; j < 10; ++j)
            grid[i][j] = null;

    expect(createGameboard(10, 10).grid)
        .toStrictEqual(grid);
});

// createShips
test('Returns an object with an array property of 5 ships', () => {
    let ships = [];
    for (let i = 0; i < 5; ++i)
        ships.push(createShip(i + 1, i));

    const gameboardShips = createGameboard(10, 10).ships;

    expect(JSON.stringify(gameboardShips))
        .toBe(JSON.stringify(ships));
});

// isSquareEmpty
test('Returns true if square is null', () => {
    const gameboard = createGameboard(10, 10);

    expect(gameboard.isSquareEmpty({
            x: 0,
            y: 0
        }))
        .toBe(true);
});

test('Returns false for square marked "miss"', () => {
    const gameboard = createGameboard(10, 10);
    gameboard.receiveAttack({
        x: 0,
        y: 0
    });

    expect(gameboard.isSquareEmpty({
            x: 0,
            y: 0
        }))
        .toBe(false);
});

// placeShip
test('Ship gets placed correctly horisontally on the grid', () => {
    const gameboard = createGameboard(10, 10);
    gameboard.placeShip(gameboard.ships[3], { x: 0, y: 0 }, 'horisontal');

    expect(gameboard.grid[0][0])
        .toBe(3.0);
    expect(gameboard.grid[1][0])
        .toBe(3.1);
    expect(gameboard.grid[2][0])
        .toBe(3.2);
});

test('Ship gets placed correctly vertically on the grid', () => {
    const gameboard = createGameboard(10, 10);
    gameboard.placeShip(gameboard.ships[3], { x: 0, y: 0 }, 'vertical');

    expect(gameboard.grid[0][0])
        .toBe(3.0);
    expect(gameboard.grid[0][1])
        .toBe(3.1);
    expect(gameboard.grid[0][2])
        .toBe(3.2);
});

test('Ship can not be placed on non null square', () => {
    const gameboard = createGameboard(10, 10);
    gameboard.placeShip(gameboard.ships[3], { x: 0, y: 0 }, 'vertical');

    expect(gameboard.placeShip(gameboard.ships[3], { x: 0, y: 0 }, 'vertical'))
        .toBe('Can\'t place ship there');
});

// receivAttack
test('Correct ship recieves an attack at the correct square', () => {
    const gameboard = createGameboard(10, 10);
    gameboard.placeShip(gameboard.ships[4], { x: 0, y: 0 }, 'horisontal');

    gameboard.receiveAttack({ x: 0, y: 0 });

    expect(gameboard.ships[4].hitSquares[0])
        .toBe(true);
});

// shipCanBePlaced
test('Can be placed if squares are null', () => {
    const gameboard = createGameboard(10, 10);

    expect(gameboard.shipCanBePlaced(gameboard.ships[3], { x: 2, y: 4 }, 'vertical'))
        .toBe(true);
});

test('Can not place ship if square is occupied horisontally', () => {
    const gameboard = createGameboard(10, 10);
    gameboard.placeShip(gameboard.ships[3], { x: 0, y: 0 }, 'horisontal');


    expect(gameboard.shipCanBePlaced(gameboard.ships[2], { x: 1, y: 0 }, 'horisontal'))
        .toBe(false);
});

test('Can not place ship if square is occupied vertically', () => {
    const gameboard = createGameboard(10, 10);
    gameboard.placeShip(gameboard.ships[3], { x: 0, y: 0 }, 'vertical');


    expect(gameboard.shipCanBePlaced(gameboard.ships[2], { x: 0, y: 1 }, 'vertical'))
        .toBe(false);
});

test('Can not place ship if out of bounds horisontally', () => {
    const gameboard = createGameboard(10, 10);

    expect(gameboard.shipCanBePlaced(gameboard.ships[3], { x: 8, y: 0 }, 'horisontal'))
        .toBe(false);
});

test('Can not place ship if out of bounds vertically', () => {
    const gameboard = createGameboard(10, 10);

    expect(gameboard.shipCanBePlaced(gameboard.ships[3], { x: 0, y: 8 }, 'vertical'))
        .toBe(false);
});