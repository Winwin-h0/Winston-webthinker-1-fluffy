let squareX = 600/2
let squareY = 400/2

function setup(){
    createCanvas(600,400)
    background('green')
}

function draw(){
    squarex += 10
    contrain(squareX,600,0)

    fill()
    square(squareX,squareY,50)
}