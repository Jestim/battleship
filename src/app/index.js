import css from '../styles/index.css';
import {
    createGameAreaEl,
    createHeaderEl
} from './domRendering';
import createPlayer from './playerFactory.js';

const human = createPlayer('Human');
const computer = createPlayer('Computer');

createHeaderEl();
createGameAreaEl(human, computer);