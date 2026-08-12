let ballX = 300;
let ballY = 200;
let ballSize = 30;
let ballSpeedX = 2;
let ballSpeedY = 2;

let toggleCoulour
function setup(){
    createCanvas(600,400)
    background('green');
}

function draw(){
    // background('green');

    ballX = ballX + ballSpeedX;
    ballY = ballY + ballSpeedY;

    if (ballX - ballSize/2 <= 0 || ballX + ballSize/2 >= width){
        ballSpeedX = ballSpeedX * -1;
        fill(random(255),random(255),random(255))
    }

    if (ballY - ballSize/2 <= 0 || ballY + ballSize/2 >= height){
        ballSpeedY = ballSpeedY * -1;
        fill(random(255),random(255),random(255))
    }

    noStroke();
    circle(ballX,ballY,ballSize);
}
function keyPressed(){
    if(keyCode === UP_ARROW){
        ballSpeedX *= 1.2;
        // ballSpeedX = ballSpeedX * 1.2;
        ballSpeedY *= 1.2;
    }
        if(keyCode === DOWN_ARROW){
        ballSpeedX *= 0.8;
        // ballSpeedX = ballSpeedX * 1.2;
        ballSpeedY *= 0.8;
    }
}