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

export {
    getRandomCoordinate,
    getRadnomDirection
};