let rectSize = 50;

function setup(){
    createCanvas(600,400);
    background('green')
}

function draw(){
}


function keyPressed(){
    if (key === "w")
        console.log("W")
    for(let i = 0; i < 15; i++){
        console.log("circles")
        fill(random(255), random(255), random(255))
        circle(random(1,400), random(1,600), random(1,30))

    }
}

function keyReleased(){
    background('green')
}