let color = 'black';

function makeGrid(size) {
    let grid = document.querySelector('.grid');
    let box = grid.querySelectorAll('div');
    box.forEach((div) => div.remove());
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let total = size * size;
    for (let i = 0; i < total; i++) {
        let box = document.createElement('div');
        box.addEventListener('mouseover', (colorChange));
        box.style.backgroundColor = 'white';
        grid.insertAdjacentElement("beforeend", box);

    }
}

makeGrid(16);

function newGridSize(input) {
    if (input >= 2 && input <= 100) {
        makeGrid(input);
    } else {
        let userInput = prompt("greater than 2, less or equal 100");
        makeGrid(userInput);
    }

}

function colorChange() {
    if (color === 'random') {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
        this.style.backgroundColor = color;
    }
}

function newColor(choice) {
    color = choice;
}

function resetGrid() {
    let grid = document.querySelector('.grid');
    let box = grid.querySelectorAll('div');
    box.forEach((div) => div.style.backgroundColor = 'white');

}