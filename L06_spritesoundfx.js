// x = 400 / 2
// y = 400 / 2
let staticImage;
let soundEffect
let staticImageX
let staticImageY
let staticSpeed

function preload(){
    staticImage = loadImage('assets/pico-a.png');
    soundEffect = loadSound('assets/bossaNova.mp3');
}

function setup(){
    createCanvas(400,400);
    background('green');
    image(staticImage,0,0,50,50);
}

function keyPressed(){
    if(keyCode === 32){
        soundEffect.loop();
    }

    
}

function draw(){
    background('green')

    if (keyIsDown(DOWN_ARROW)){
    }
    if (keyIsDown(UP_ARROW)){

    }
    if (keyIsDown(LEFT_ARROW)){
    }
    if (keyIsDown(RIGHT_ARROW)){
    }
    if (keyIsDown(32)){

    }

}


