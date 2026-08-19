let squareX = 600/2
let squareY = 400/2

function setup(){
    createCanvas(600,400)
    background('green')
}

function draw(){
    squareX += 10
    contrain(squareX,600,0)

    fill(random(255),random(255),random(255))
    square(squareX,squareY,50)
}