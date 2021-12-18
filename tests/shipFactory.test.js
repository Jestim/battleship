import { expect, test } from '@jest/globals';
import createShip from '../src/shipFactory.js';

test('Test if ship is sunk', () => {
    const ship = createShip(4);
    for (let i = 0; i < ship.length; ++i) {
        ship.hit(i);
    }
    expect(ship.isSunk()).toBe(true);
});

test('Test that the correct square is hit', () => {
    const ship = createShip(4);
    ship.hit(2);
    expect(ship.hitSquares[2]).toBe(true);
});

test('Test that the correct square is hit (checks array)', () => {
    const ship = createShip(4);
    ship.hit(2);
    expect(ship.hitSquares).toStrictEqual([
        false,
        false,
        true,
        false
    ]);
});

test('Test that hitSquares are populated with 3 false values', () => {
    const ship = createShip(3);
    expect(ship.hitSquares).toStrictEqual([
        false,
        false,
        false
    ]);
});

test('Get the correct length', () => {
    const ship = createShip(3);
    expect(ship.length).toBe(3);
});

test('Return correct id', () => {
    const ship = createShip(3, 0);
    expect(ship.id).toBe(0);
});