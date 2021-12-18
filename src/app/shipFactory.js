function createShip(numberOfSquares, id) {

    let hitSquares = [];
    for (let i = 0; i < numberOfSquares; ++i) {
        hitSquares[i] = false;
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