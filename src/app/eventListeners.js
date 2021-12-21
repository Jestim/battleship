function eventListeners() {
    const computerAreaEl = document.getElementById('computer');
    const squaresEl = computerAreaEl.querySelectorAll('.square');

    squaresEl.forEach(square => {
        square.addEventListener('click', (e) => {
            console.log(e.target);

            if (e.target.id != 'null' && e.target.id != 'miss') {
                e.target.classList.add('hit');
            } else {
                e.target.classList.add('miss');
            }

        });
    });
}

export default eventListeners;