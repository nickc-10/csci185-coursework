let x = 100;
let y = 200;
let width = 50;
let fillColor = '#6B2D5C';

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

function setup() {
    createCanvas(canvasWidth, canvasHeight);

    // fill('red');
    // noFill();
    fill(fillColor)
    circle(x, y, width);

    drawGrid(canvasWidth, canvasHeight);
}

function moveController(ev) {
    console.log(ev.code);
    if (ev.code === 'ArrowUp') {
        y = y - 10
        console.log('The user just pressed the up arrow!');
    } else if (ev.code === 'ArrowDown') {
        y = y + 10
        console.log('The user just pressed the down arrow!');
    }
    console.log(ev.code);
    if (ev.code === 'ArrowLeft') {
        x = x - 10
        console.log('The user just pressed the left arrow!');
    } else if (ev.code === 'ArrowRight') {
        x = x + 10
        console.log('The user just pressed the right arrow!')
    }
    console.log(ev.code);
    if (ev.code === 'Space') {
        width = width + 10
    } else if (ev.code === 'Minus') {
        width = width - 10
    }
    console.log(ev.code);
    if (ev.code === 'KeyR') {
        fillColor = '#001242'
    } else if (ev.code === 'KeyT') {
        fillColor = '#6B2D5C'
    }
    
   
  

    // redraw circle:
    clear();
    // noFill();
    fill(fillColor);
    circle(x, y, width);
    drawGrid(canvasWidth, canvasHeight);
}


// Add event listener on keydown
document.addEventListener('keydown', moveController);
