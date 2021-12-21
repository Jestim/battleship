import css from '../styles/index.css';
import {
    createGameAreaEl,
    createHeaderEl
} from './domRendering';
import eventListeners from './eventListeners.js';
import createPlayer from './playerFactory.js';
import playGame from './gameLogic.js';

playGame();