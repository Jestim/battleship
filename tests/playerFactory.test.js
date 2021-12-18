import { test, expect } from '@jest/globals';
import createGameboard from '../src/gameboardFactory.js';
import createPlayer from '../src/playerFactory.js';
import createShip from '../src/shipFactory.js';

test('Returns a player object that owns a gameboard', () => {
    expect(JSON.stringify(createPlayer()))
        .toBe(JSON.stringify({
            gameboard: createGameboard(10, 10),
        }));
});

test('Can attack another player', () => {
    const player1 = createPlayer('player1');
    const player2 = createPlayer('player2');

    const ship = createShip(1, 5);

    player2.gameboard.placeShip(player2.gameboard.ships[0], { x: 0, y: 0 }, 'horisontal');

    player1.attack(player2, { x: 0, y: 0 });

    expect(player2.gameboard.ships[0].hitSquares[0])
        .toBe(true);
});