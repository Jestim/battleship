import css from '../styles/index.css';
import {
    createGameAreaEl,
    createHeaderEl
} from './domRendering';
import createPlayer from './playerFactory.js';

const human = createPlayer('Human');
const computer = createPlayer('Computer');
human.gameboard.placeAllShipsRandomly();
computer.gameboard.placeAllShipsRandomly();

createHeaderEl();
createGameAreaEl(human, computer);