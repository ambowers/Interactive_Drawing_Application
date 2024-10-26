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