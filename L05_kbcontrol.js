let rectSize = 50;

function setup(){
    createCanvas(400,600);
    background('green')
}

function draw(){
}


function keyPressed(){
    for(let i = 0; i < 15; i++){
        fill(random(255), random(255), random(255))
        circle(random(1,400), random(1,600), random(1,30))
    }
}

function keyReleased(){
    // rectSize = 50;
}