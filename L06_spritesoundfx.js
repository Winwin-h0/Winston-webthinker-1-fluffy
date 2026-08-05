// x = 400 / 2
// y = 400 / 2
let staticImage;
let soundEffect
let staticImageX = 50
let staticImageY = 300
let staticSpeed = 5

function preload(){
    staticImage = loadImage('assets/pico-a.png');
    soundEffect = loadSound('assets/bossaNova.mp3');
}

function setup(){
    createCanvas(400,400);
    background('green');
}

function keyPressed(){
    if(keyCode === 32){
        soundEffect.loop();
    }

    
}

function draw(){
    background('green')
    image(staticImage,staticImageX,staticImageY,50,50);
    if (keyIsDown(DOWN_ARROW)){
    }
    if (keyIsDown(UP_ARROW)){
    }
    if (keyIsDown(LEFT_ARROW)){
        staticImageX = staticImageX - staticSpeed
    }
    if (keyIsDown(RIGHT_ARROW)){
        staticImageX = staticImageX + staticSpeed
    }
    if (keyIsDown(32)){
    }
    staticImageX = constrain(staticImageX,0,400 - 50)
}


