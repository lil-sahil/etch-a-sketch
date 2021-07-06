const container = document.querySelector('.container');
const gridSize = [container.offsetWidth, container.offsetHeight];
let color = 'red'


// User input
// let numberOfRows = 64;
let numberOfRows = parseInt(prompt('Enter Grid Size', '<64'));

if ( (numberOfRows > 64) || (typeof(numberOfRows) !== 'number' ) ){
    numberOfRows = 64;
    alert('Grid size set to a max of 64');
}

else if (isNaN(numberOfRows) === true) {
    numberOfRows = 64;
}


let squareSize =  gridSize[0] / numberOfRows; 


function createSquare() {
    
    const etchPadSquare = document.createElement('div');
    
    etchPadSquare.setAttribute("class", "square");
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

// Color Picker
const colorPicker = document.querySelectorAll('.color');

colorPicker.forEach(element => {
        element.addEventListener('click', (e) => {
        
        colorPicker.forEach(element => element.classList.remove('current-color'));

        e.target.classList.add('current-color');
        draw(e.target.classList[1]);
        });

    });




// Draw Effect
const buttonDraw = document.querySelector('.button-draw');
const square = document.querySelectorAll('.square');

buttonDraw.addEventListener('click', (e) => draw(color));

function draw (color) {
    square.forEach(element => { 
        element.addEventListener('mouseenter', (e) => e.target.style.backgroundColor = color);
    });
}

// Initial draw state
draw(color)


// Holding control while hovering should not draw anything (Not complete).

square.forEach(element => {
    element.addEventListener('onkeypress', (e)=>console.log(e.keyCode));

});

// Button eraser
const buttonErase = document.querySelector('.button-erase');
buttonErase.addEventListener('click', (e) => draw('white'));


// Button Clear
const button = document.querySelector('.button-clr');

button.addEventListener('click', () => reset());

function reset(){
    square.forEach(element => {
        element.style.backgroundColor = 'white';
    });
}
