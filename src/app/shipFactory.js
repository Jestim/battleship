function createShip(numberOfSquares, id) {

    const hitSquares = createHitSquares(numberOfSquares);

    function createHitSquares(numberOfSquares) {
        let hitSquaresArray = [];
        for (let i = 0; i < numberOfSquares; ++i) {
            hitSquaresArray[i] = false;
        }
        return hitSquaresArray;
    }

    function hit(squareToHit) {
        hitSquares[squareToHit] = true;
    }

    function isSunk() {
        if (hitSquares.every(s => s === true))
            return true;
        else
            return false;
    }

    return {
        id,
        length: numberOfSquares,
        hitSquares,
        hit,
        isSunk
    };
};

export default createShip;