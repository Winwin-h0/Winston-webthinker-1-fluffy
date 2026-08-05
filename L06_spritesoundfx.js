x = 400 / 2
y = 400 / 2
function setup(){
    createCanvas(400,400)
    
}

function draw(){
    background('green')

    square(x, y, 100)

    if (keyIsDown(DOWN_ARROW)){
        y = y + 50
    }
    if (keyIsDown(UP_ARROW)){
        y = y - 50
    }
    if (keyIsDown(LEFT_ARROW)){
        x = x - 50
    }
    if (keyIsDown(RIGHT_ARROW)){
        x = x + 50
    }
    if (keyIsDown(32)){
        x = x + 50
        fill(random(50,200))
    }

    x = constrain(x,300,300)
    y = contrain(y,300,300)
}


// function keyIsDown(){
//     x = contrain(x,300,300)
//     y = contrain(y,300,300)
//     if(keyCode === DOWN_ARROW){
//         y = y + 50
//     }
        
//     if(keyCode === UP_ARROW){
//         y = y - 50
//     }
//     if(keyCode === LEFT_ARROW){
//         x = x - 50
//     }
//     if(keyCode === RIGHT_ARROW){
//         x = x + 50
//     }
//     if(keyCode === 32){
//         fill(random(50,200))
//     }
// }