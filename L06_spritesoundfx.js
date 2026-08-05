x = 400 / 2
y = 400 / 2
function setup(){
    createCanvas(400,400)
    background('green')
}

function draw(){
    square(x, y, 100)
}

function keyIsDown(){
    if(keyCode === DOWN_ARROW){
        y = y + 50
    }
        
    if(keyCode === UP_ARROW){
        y = y - 50
    }
    if(keyCode === LEFT_ARROW){
        x = x - 50
    }
    if(keyCode === RIGHT_ARROW){
        x = x + 50
    }
    if(keyCode === 32){
        fill(random(50,200))
    }
}