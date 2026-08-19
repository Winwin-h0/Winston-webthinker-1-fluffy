let squareX = 600/2
let squareY = 400/2
let squareWidth = 

function setup(){
    createCanvas(600,400)
}

function draw(){
    background('green')
    squareX += 10
    constrain(squareX,600,0)

    fill(random(255),random(255),random(255))
    square(squareX,squareY,50)
}