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

function classicColoring() {
    const gridBoxes = document.getElementsByClassName('grid-box');
    Array.from(gridBoxes).forEach(box => {
    box.addEventListener('mouseover', () => {
        box.style.backgroundColor = 'gray';
        })
    });
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function modernColoring() {
    const gridBoxes = document.getElementsByClassName('grid-box');
    Array.from(gridBoxes).forEach(box => {
    box.addEventListener('mouseover', () => {
        const randomColor = getRandomColor();
        box.style.backgroundColor = randomColor;
        })
    });
}

function setColoring(mode) {
    if (mode === 'modern') {
        modernColoring();
    } else {
        classicColoring();
    }
}


// start with default normal sized grid and classic coloring
let currentSize = 'medium',
    coloringMode = 'classic';
createGrid(currentSize);
setColoring(coloringMode);

// change coloring
const colorSelect = document.querySelectorAll('.box-color');
colorSelect.forEach(element => {
    element.addEventListener('click', () => {
        if (element.id === 'modern') {
            coloringMode = 'modern';
        } else {
            coloringMode = 'classic';
        }

        resetGrid(currentSize);
        setColoring(coloringMode);

        // remove border around all squares
        colorSelect.forEach(color => {
            color.classList.remove('selected-color')
        })

        // selected square gets a border
        element.classList.add('selected-color');
    })
})

// erase grid
const erase = document.querySelector('#erase');
console.log(erase);
erase.addEventListener('click', () => {
    resetGrid(currentSize);
    setColoring(coloringMode);
})

// change pencil size
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
        setColoring(coloringMode);

        // remove border around all squares
        sizeSelect.forEach(size => {
            size.classList.remove('selected-size')
        })

        // selected square gets a border
        element.classList.add('selected-size');
    })
})