function getRandomCoordinate() {
    let x = Math.floor(Math.random() * 10);
    let y = Math.floor(Math.random() * 10);
    return {
        x,
        y
    };
}

function getRadnomDirection() {
    if (Math.floor(Math.random() * 2))
        return 'horisontal';
    else
        return 'vertical';
}

function getCoordinateObject(x, y) {
    return {
        x,
        y
    };
}

export {
    getRandomCoordinate,
    getRadnomDirection,
    getCoordinateObject
};