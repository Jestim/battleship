import { initGameArea, displayResult } from './domRendering.js';
import createPlayer from './playerFactory.js';

const game = (() => {

    const human = createPlayer('Human');
    const computer = createPlayer('Computer');

    function init() {
        human.gameboard.placeAllShipsRandomly();
        computer.gameboard.placeAllShipsRandomly();

        initGameArea(human, computer);
    }

    function playRound(e) {
        console.log(e.target.id);
        console.log(parseInt(e.target.id));

        if (e.target.id != 'null' && e.target.id != 'miss') {
            e.target.classList.add('hit');
        } else {
            e.target.classList.add('miss');
            e.target.id = 'miss';
        }
    }

    function computerShot() {

    }

    return {
        init,
        playRound
    };
})();

export default game;