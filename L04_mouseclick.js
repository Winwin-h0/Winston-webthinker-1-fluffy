function setup() {
    createCanvas(600,600);
    background('green');
}

function draw() {
    let xpos = 50; //x positon
    let ypos = 50; //y positon
    let ggColor= 0; //green color
    for (let num = 0; num < 5; num++) {//repeat 5 times
        fill(0, ggColor,0);//green color
        circle(xpos,ypos,50);
        xpos = xpos + 50;
        ypos = ypos+50;
        ggColor = ggColor + 50;
    }
}
