let rectSize = 50;

function setup(){
    createCanvas(400,600);
    background('green');
}

function draw(){
    background(220);
    rect(width / 2 - rectSize / 2, height / 2 - rectSize / 2, rectSize, rectSize);

}
function keyPressed(){
    if (key==="w"){
         rectSize = 100;
    }
}

function keyReleased(){
    rectSize = 50;
}