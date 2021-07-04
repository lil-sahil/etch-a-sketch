const container = document.querySelector('.container');
const gridSize = [container.offsetWidth, container.offsetHeight];

let squareSize = 40;

let numberOfSquares =  ( gridSize[0] * gridSize[1] ) / ( squareSize * squareSize ) 



function createSquare() {
    
    const etchPadSquare = document.createElement('div');
    
    etchPadSquare.setAttribute("class", "square");
    etchPadSquare.style.outline = 'red 1px solid';
    etchPadSquare.style.width = `${squareSize}px`;
    etchPadSquare.style.height = `${squareSize}px`;

    return etchPadSquare;

}    


function specifyGrid () {
    for (let i = 0; i < numberOfSquares; i++ ){
        container.appendChild(createSquare());
    }
}

specifyGrid();



