let $rectangle;
let $circle;
let $line;
let $red;
let $green;
let $yellow;
let $blue;
let $black;
let $btnRgb;
let $firstNum;
let $secondNum;
let $thirdNum;
let $selectInfo

// CANVAS SET
const canvas = document.querySelector('#canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
context.lineJoin = 'round';
context.lineCap = 'round';
context.lineWidth = 5;


// prepareDOMElemnts
$rectangle = document.querySelector('.rectangle');
$circle = document.querySelector('.circle');
$line = document.querySelector('.line');
$red = document.querySelector('.red');
$green = document.querySelector('.green');
$yellow = document.querySelector('.yellow');
$blue = document.querySelector('.blue');
$black = document.querySelector('.black');
$btnRgb = document.querySelector('.btnRgb');
$firstNum = document.querySelector('.input-1');
$secondNum = document.querySelector('.input-2');
$thirdNum = document.querySelector('.input-3');
$selectInfo = document.querySelector('.selected-txt');


// SET COLORS AND SHAPES 
const makeRgb = () =>{
    let rgb = `rgb(${$firstNum.value}, ${$secondNum.value}, ${$thirdNum.value})`
    return rgb
}

const setRed = () =>{
    sessionStorage.setItem('color', 'red')
    selectedOptions()
    choseColor()
}

const setGreen = () =>{
    sessionStorage.setItem('color', 'green')
    selectedOptions()
    choseColor()
}

const setYellow = () =>{
    sessionStorage.setItem('color', 'yellow')
    selectedOptions()
    choseColor()
}

const setBlue = () =>{
    sessionStorage.setItem('color', 'blue')
    selectedOptions()
    choseColor()
}

const setBlack = () =>{
    sessionStorage.setItem('color', 'black')
    selectedOptions()
    choseColor()
}

const setRgb = () =>{
    let rgb = makeRgb()
    sessionStorage.setItem('color', rgb)
    selectedOptions()
    choseColor()
}

const setRectangular = () =>{
    sessionStorage.setItem('shape', 'rectangular')
    selectedOptions()
}

const setCircle = () =>{
    sessionStorage.setItem('shape', 'circle')
    selectedOptions()
}

const setLine = () =>{
    sessionStorage.setItem('shape', 'line')
    selectedOptions()
}

// prepareDOMEvents
$red.addEventListener('click', setRed)
$green.addEventListener('click', setGreen)
$yellow.addEventListener('click', setYellow)
$blue.addEventListener('click', setBlue)
$black.addEventListener('click', setBlack)
$rectangle.addEventListener('click', setRectangular)
$circle.addEventListener('click', setCircle)
$line.addEventListener('click', setLine)
$btnRgb.addEventListener('click', setRgb)

// GENERAL FUNCTION

const selectedOptions = () => {
    $selectInfo.innerText = `${sessionStorage.getItem('shape')}, ${sessionStorage.getItem('color')}`
}

const choseColor = () =>{
    context.fillStyle = sessionStorage.getItem('color')
}

function getMousePos(canvas, event) {
    let rect = canvas.getBoundingClientRect();
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
}
    
let mousePosA;
let mousePosB;
    


// RECTANGULAR
document.addEventListener('mousedown', function(event) {
    mousePosA = getMousePos(canvas, event);
});
        
document.addEventListener('mouseup', function(event) {
    mousePosB = getMousePos(canvas, event);
    
    context.fillStyle = `${sessionStorage.getItem('color')}`;
    if (sessionStorage.getItem('shape') === 'rectangular'){
        context.fillRect(mousePosA.x, mousePosA.y, (mousePosB.x - mousePosA.x), (mousePosB.y - mousePosA.y));
    }
});

// ELLIPSE
function drawEllipse(x1, y1, x2, y2) {

    let radiusX = (x2 - x1) * 0.5;   
    let radiusY = (y2 - y1) * 0.5;   
    let centerX = x1 + radiusX;      
    let centerY = y1 + radiusY;
    let step = 0.01;                 
    let a = step;                   
    let pi2 = Math.PI * 2 - step;    
    
    context.beginPath();

    /// set start point at angle 0
    context.moveTo(centerX + radiusX * Math.cos(0),
               centerY + radiusY * Math.sin(0));

    /// create the ellipse    
    for(; a < pi2; a += step) {
        context.lineTo(centerX + radiusX * Math.cos(a),
                   centerY + radiusY * Math.sin(a));
    }
    
    context.closePath();
    context.strokeStyle = `${sessionStorage.getItem('color')}`;
    context.stroke();
}

document.addEventListener('mousedown', function(event) {
    mousePosA = getMousePos(canvas, event);
});

document.addEventListener('mouseup', function(event) {
    mousePosB = getMousePos(canvas, event);
    if (sessionStorage.getItem('shape') === 'circle'){
        drawEllipse(mousePosA.x, mousePosA.y, mousePosB.x, mousePosB.y);
    }
});


// LINE
let isDrawing = false;
let lastX = 0;
let lastY = 0;

function drawLine(event) {
    // stop the function if they are not mouse down
    if(isDrawing === false) return;
    //listen for mouse move event
    context.strokeStyle = `${sessionStorage.getItem('color')}`

    context.beginPath();
    context.moveTo(lastX, lastY);
    context.lineTo(event.offsetX, event.offsetY);

    if (sessionStorage.getItem('shape') === 'line'){
        context.stroke();
    }else{
        if(isDrawing === false) return;
    }

    lastX = event.offsetX
    lastY = event.offsetY
    }

document.addEventListener('mousedown', (event) => {
    isDrawing = true;
    lastX = event.offsetX
    lastY = event.offsetY
});

document.addEventListener('mousemove', drawLine);
document.addEventListener('mouseup', () => isDrawing = false);
document.addEventListener('mouseout', () => isDrawing = false);





