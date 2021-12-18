import { expect, test } from '@jest/globals';
import {
    getRandomCoordinate,
    getRadnomDirection,
    getCoordinateObject
} from '../src/utils.js';

test('Get an object with 2 props both between 0 and 9', () => {
    const randomCoordinate = getRandomCoordinate();

    expect(randomCoordinate.x)
        .toBeGreaterThanOrEqual(0);
    expect(randomCoordinate.x)
        .toBeLessThanOrEqual(9);
    expect(randomCoordinate.y)
        .toBeGreaterThanOrEqual(0);
    expect(randomCoordinate.y)
        .toBeLessThanOrEqual(9);
});

test('Get either "horisontal" or "vertical"', () => {
    const direction = getRadnomDirection();

    expect(direction === 'horisontal' || direction === 'vertical')
        .toBeTruthy();
});

test('Returns a coordinate object', () => {
    expect(getCoordinateObject(2, 7))
        .toStrictEqual({
            x: 2,
            y: 7
        })
})