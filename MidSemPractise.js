let Cxpos = 50
let fillCoulour;
function setup(){
    createCanvas(600,400)
    background('green')
}

function draw(){
    for(let i = 0; i < 5; i++ ){
        fill(10 + i * 50)
        circle(50 + i * 100, 200, 50)
    }
    // strokeWeight(10)
    // stroke(0,0,255)

    // fill(255,255,255)
    // circle(600/2, 400/2, 100)

    // square(100, 150, 100)

    // triangle(400,250, 500,250, 450,150 )

}
