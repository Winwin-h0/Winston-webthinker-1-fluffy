// x = 400 / 2
// y = 400 / 2
let staticImage;
let soundEffect
let

function preload(){
    staticImage = loadImage('assets/pico-a.png');
    soundEffect = loadSound('assets/bossaNova.mp3');
}

function setup(){
    createCanvas(400,400);
    background('green');
    image(staticImage,0,0,100,100);
}

function keyPressed(){
    if(keyCode === 32){
        soundEffect.loop();
    }
}

// function draw(){
//     background('green')

//     square(x, y, 100)

//     if (keyIsDown(DOWN_ARROW)){
//         y = y + 50
//     }
//     if (keyIsDown(UP_ARROW)){
//         y = y - 50
//     }
//     if (keyIsDown(LEFT_ARROW)){
//         x = x - 50
//     }
//     if (keyIsDown(RIGHT_ARROW)){
//         x = x + 50
//     }
//     if (keyIsDown(32)){
//         x = x + 50
//         fill(random(50,200))
//     }

//     x = constrain(x,300,300)
//     y = constrain(y,300,300)
// }


