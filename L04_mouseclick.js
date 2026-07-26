function setup() {
    createCanvas(600,600);
    background('green');
}

function draw() {
    let xpos = 50;
    let ypos = 50
    let ggColor
    for (let num = 0; num < 5; num++) {
        fill(0);
        circle(xpos,ypos,50)
        xpos = xpos + 50
        ypos = ypos+50
    }
}
