let rectSize = 50;

function setup(){
    createCanvas(400,600);
    background('green');
}

// function draw(){
// }


function keyPressed(){
    for(i = 1; i == 15; i++){
        circle(random(1,100), random(1,100), random(1,30))
    }
    // if (key==="w"){
    //      rectSize = 100;
    // }
}

function keyReleased(){
    // rectSize = 50;
}