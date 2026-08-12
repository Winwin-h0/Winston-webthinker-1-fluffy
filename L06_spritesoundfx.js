// x = 400 / 2
// y = 400 / 2
let staticImage = 100
let soundEffect;
let soundPop;
let imageWidth = 50
let newImageWidth = imageWidth
let staticImageX = 50
let staticImageY = 300
let staticSpeed = 5

function preload(){
    staticImage = loadImage('assets/pico-a.png');
    soundPop = loadSound('assets/pop.mp3')
}

function setup(){
    createCanvas(400,400);
    background('green');
}

function keyPressed(){
    if(keyCode === 32){
        soundPop.play()

    }

    
}

function draw(){
   

    background('green')
    image(staticImage,staticImageX,staticImageY,newImageWidth,50);
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
        newImageWidth = imageWidth/2
    }else{
        newImageWidth = imageWidth
    }
    staticImageX = constrain(staticImageX,0,400 - 50)
}


