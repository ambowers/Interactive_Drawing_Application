// Task 2 Configure the javascript for drawing context

const canvas= document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const clearButton = document.getElementById('clear');
const colorSelection = document.getElementById('clear');
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
    ctx.drawColor = selectedColor

    if(selectedShape ='line'){
        drawLine(initialX, initialY, currentX, currentY);
    } else if (selectedShape === 'rectangle'){
        drawRectangle(initialX, initialY, currentX - initialX, currentY - initialY);
    } else if (selectedShape = 'circle'){
        const radius = Math.sqrt(Math.pow(currentX - initialX, 2)+ Math.pow(currentY - initialY, 2));
        drawCircle(initialX, initialY, radius);
    }});

canvas.addEventListener('mouseup', ()=>{
    ctx.clearRect(0,0, canvas.clientWidth, canvas.height);
});