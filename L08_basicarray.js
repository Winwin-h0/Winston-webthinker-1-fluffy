let squareX = 600/2
let squareY = 400/2
let squareSize = 50

function setup(){
    createCanvas(600,400)
}

function draw(){
    background('green')
    squareX += 10
    constrain(squareX,600,0)
    if (squareX - squareSize/2 <= 0 || squareX + squareSize/2 >= width){
        ballSpeedX = ballSpeedX * -1;
    }
    fill(random(255),random(255),random(255))
    square(squareX,squareY,ballSize)
}