function createGrid(size) {
    let height, width;

    if (size === 'small') {
        height = 16;
        width = 22;
    } else if (size === 'large') {
        height = 64;
        width = 88;
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

createGrid('small');
const gridBox = document.getElementsByClassName('grid-box');
Array.from(gridBox).forEach(element => {
    element.addEventListener('mouseover', () => {
        element.style.backgroundColor = 'gray';
    })
});