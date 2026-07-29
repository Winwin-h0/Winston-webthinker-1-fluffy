let rectSize = 50;

function setup(){
    createCanvas(400,600);
    background('green')
}

function draw(){

}


function keyPressed(){
    for(i = 1; i == 15; i++){
        fill(random(255), random(255), random(255))
        circle(random(1,100), random(1,100), random(1,30))
    }
}

function keyReleased(){
    // rectSize = 50;
}