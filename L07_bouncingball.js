let ballX = 300;
let ballY = 200;
let ballSize = 30;
let ballSpeedX = 2;
let ballSpeedY = 2;
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
        random()
    }

    if (ballY - ballSize/2 <= 0 || ballY + ballSize/2 >= height){
        ballSpeedY = ballSpeedY * -1;
    }

    noStroke();
    fill(255);
    circle(ballX,ballY,ballSize);
}
