let ballX = 300
let ballY = 200
let ballSize = 30
let ballSpeedX = 2
let ballSpeedY = 2
function setup(){
    createCanvas(600,400)
    background('green')
}

function draw(){
    // background('green')

    ballX = ballX + ballSpeedX
    ballY = ballY + ballSpeedY

    noStroke()
    fill(255)
    circle(ballX,ballY,ballSize)
}
