let squareX = 600/2
let squareY = 400/2
let squareSize = 50
let squareSpeed = 5

function setup(){
    createCanvas(600,400);
}

function draw(){
    background('green')
    squareX += squareSpeed

    if (squareX <= 0 || squareX +  >= width){
        squareSpeed = squareSpeed * -1;
        fill(random(255),random(255),random(255))
    }
    square(squareX,squareY,squareSize)
}