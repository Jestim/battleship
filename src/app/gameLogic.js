import { initGameArea, displayResult } from './domRendering.js';
import createPlayer from './playerFactory.js';

function playGame() {
    const human = createPlayer('Human');
    human.gameboard.placeAllShipsRandomly();
    const computer = createPlayer('Computer');
    computer.gameboard.placeAllShipsRandomly();

    initGameArea(human, computer);

    // displayResult('You win!');
}

function playRound() {

}


export default playGame;