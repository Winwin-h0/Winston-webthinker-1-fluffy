// x = 400 / 2
// y = 400 / 2
let staticImage

function preload(){
    staticImage
}

function setup(){
    createCanvas(400,400)
    background('green')
    Image(staticImage,0,0,100,100)
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


