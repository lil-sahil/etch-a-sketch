const container = document.querySelector('.container');
const gridSize = [container.offsetWidth, container.offsetHeight];



let numberOfRows = 64; 
let squareSize =  gridSize[0] / numberOfRows; 


function createSquare() {
    
    const etchPadSquare = document.createElement('div');
    
    etchPadSquare.setAttribute("class", "square");
    // etchPadSquare.style.outline = 'red 1px solid';
    etchPadSquare.style.width = `${squareSize}px`;
    etchPadSquare.style.height = `${squareSize}px`;

    return etchPadSquare;

}    


function createGrid () {
    for (let i = 0; i < (numberOfRows*numberOfRows); i++ ){
        container.appendChild(createSquare());
    }
}

createGrid();


// Hover Effect
const square = document.querySelectorAll('.square');

square.forEach(element => { 
    element.addEventListener('mouseenter', e => {
        e.target.style.backgroundColor = 'red'})
});

// Holding control while hovering should not draw anything (Not complete).

square.forEach(element => {
    element.addEventListener('onkeypress', (e)=>console.log(e.keyCode));

});

// Add an eraser button
// ...






// Button Clear
const button = document.querySelector('.button-primary');

button.addEventListener('click', () => reset());

function reset(){
    square.forEach(element => {
        element.style.backgroundColor = 'white';
    });
}
