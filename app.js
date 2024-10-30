// Task 2 Configure the javascript for drawing context
const canvas= document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const clearButton = document.getElementById('clear');
const colorSelection = document.getElementById('color');
const shapeOptions = document.getElementById('shape');

//set up drawing
let drawing = false
let initialX = 0
let initialY = 0
let selectedShape = 'line';
let selectedColor = '#FF0000';

//updates when shape selected from button
shapeOptions.forEach(option => {
    option.addEventListener('change',()=>{
        selectedShape = option.value
    });
});


// Task 3 Implement shape drawing logic
canvas.addEventListener('mousedown', (event) =>{
    drawing = true
    initialX= event.offsetX;
    initialY = event.offsetY;
});

canvas.addEventListener('mousemove',(event)=> {
    if (!drawing) return;
    const currentX = event.offsetX;
    const currentY = event.offsetY;

    ctx.clearRect(0,0, canvas.clientWidth, canvas.height);
    ctx.strokeStyle = selectedColor

    if (selectedShape ==='line'){
        drawLine(initialX, initialY, currentX, currentY);
    } else if (selectedShape === 'rectangle'){
        drawRectangle(initialX, initialY, currentX - initialX, currentY - initialY);
    } else if (selectedShape === 'circle'){
        const radius = Math.sqrt(Math.pow(currentX - initialX, 2)+ Math.pow(currentY - initialY, 2));
        drawCircle(initialX, initialY, radius);
    }});

canvas.addEventListener('mouseup', ()=>{
    drawing = false;
});
//function for drawing a line
function drawLine( x1, y1, x2, y2){
    ctx.beginPath();
    ctx.moveTo(x1,y1)
    ctx.lineTo(x2,y2);
    ctx.stroke();
}

//function for drawing a rectangle
function drawRectangle(x,y,width,height){
    ctx.beginPath();
    ctx.rect(x,y,width,height);
    ctx.stroke();
}

//function for drawing a circle 
function drawCircle(x,y,radius){
    ctx.beginPath();
    ctx.arc(x,y, radius, 0,2*Math.PI) //draws full circle (2pir)
    ctx.stroke();
}


// Task 4 add color selection and canvas clearing
colorSelection.addEventListener('input',(event)=>{
    selectedColor=event.target.value;
})

clearButton.addEventListener('click', ()=> {
    ctx.clearRect(0,0, canvas.width,canvas.height);
});

//