let ballX = 300;
let ballY = 200;
let ballSize = 30;
let ballSpeedX = 2;
let ballSpeedY = 2;

let toggleColour = true
let toggleTrail = true

function setup(){
    createCanvas(600,400)
    background('green');
}

function draw(){
    if (toggleTrail === false){
        background('green');
    }
    ballX = ballX + ballSpeedX;
    ballY = ballY + ballSpeedY;

    if (ballX - ballSize/2 <= 0 || ballX + ballSize/2 >= width){
        ballSpeedX = ballSpeedX * -1;
        if(toggleColour === true){
            fill(random(255),random(255),random(255))
        }
        else{
            fill('white')
        }
    }

    if (ballY - ballSize/2 <= 0 || ballY + ballSize/2 >= height){
        ballSpeedY = ballSpeedY * -1;
        if(toggleColour === true){
            fill(random(255),random(255),random(255))
        }
        else{
            fill('white')
        }
    }

    noStroke();
    circle(ballX,ballY,ballSize);
}
function keyPressed(){
    if(keyCode === UP_ARROW){
        ballSpeedX *= 1.2;
        ballSpeedY *= 1.2;
    }
    if(keyCode === DOWN_ARROW){
        ballSpeedX *= 0.8;
        ballSpeedY *= 0.8;
    }

    if(keyCode === 187){
        ballSize += 10
    }
    if(keyCode === 189){
        ballSize -= 10
    }

    if(key === 'c' || key === 'C'){
        if(toggleColour === true){
            toggleColour = false

        }else{
            toggleColour = true
        }
    } 
    if(key === 't' || key === 'T'){
        if(toggleTrail === true){
            toggleTrail = false
        }else{
            toggleTrail = true
        }
    }
}