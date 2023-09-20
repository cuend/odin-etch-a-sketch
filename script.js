function createGrid(size) {
    let height, width;

    if (size === 'small') {
        height = 64;
        width = 88;
    } else if (size === 'large') {
        height = 16;
        width = 22;
    } else {
        height = 32;
        width = 44;
    }


    squares = height*width;

    for (let index = 0; index < squares; index++) {
        // create div element
        const gridBox = document.createElement('div');

        gridBox.classList.add('grid-box', `${size}`);

        // add a div element to container
        const gridContainer = document.getElementById('grid-container');
        gridContainer.appendChild(gridBox);
    }

    const gridBoxes = document.getElementsByClassName('grid-box');
    Array.from(gridBoxes).forEach(box => {
    box.addEventListener('mouseover', () => {
        box.style.backgroundColor = 'gray';
    })
});
}

function clearGrid() {
    const gridContainer = document.getElementById('grid-container');

    while (gridContainer.hasChildNodes()) {
        gridContainer.removeChild(gridContainer.childNodes[0]);
    }
}

function resetGrid(size) {
    clearGrid();
    createGrid(size);
}

let currentSize = 'small';
createGrid(currentSize);

const sizeSelect = document.querySelectorAll('.box-size');
sizeSelect.forEach(element => {
    element.addEventListener('click', () => {
        switch (element.id) {
            case 'small-size-square':
                currentSize = 'small';
                break;

            case 'medium-size-square':
                currentSize = 'medium';
                break;

            case 'large-size-square':
                currentSize = 'large';
                break;
        
            default:
                currentSize = 'medium';
                break;
        }

        resetGrid(currentSize);

        // remove border around all squares
        sizeSelect.forEach(size => {
            size.classList.remove('selected-size')
        })

        // selected square gets a border
        element.classList.add('selected-size');
    })
})