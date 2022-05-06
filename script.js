const container = document.querySelector('.container');
const grid_64 = document.querySelector('.grid_64');
const grid_16 = document.querySelector('.grid_16');


function makeGrid(a, b) {
    for (let i = 0; i < a * b; i++) {
        const grid_div = document.createElement('div');
        grid_div.classList.toggle('box');
        grid_div.setAttribute('id', 'grids')
        container.appendChild(grid_div);
        if (a != 16 && b != 16) {
            grid_div.classList.toggle('boxTransform');

        }
    }
}

function colorChange() {
    const grid_div = document.querySelectorAll('.box');
    grid_div.forEach(grid_div => grid_div.addEventListener('mouseover', function(e) {
        grid_div.classList.add('colorChange')
    }));

}

function changeGrid() {
    grid_64.addEventListener('click', function() {
        document.querySelectorAll('.box').forEach(e => e.remove())
        makeGrid(64, 64)
        colorChange()

    });
    grid_16.addEventListener('click', function() {
        document.querySelectorAll('.box').forEach(e => e.remove())
        makeGrid(16, 16)
        colorChange()
    });

}



changeGrid()
makeGrid(16, 16)
colorChange()