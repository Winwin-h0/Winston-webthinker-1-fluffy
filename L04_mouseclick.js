function setup() {
    createCanvas(600,600);
    background('green');
    // noLoop(); // l4 no need
}

function draw() {
    let xpos = 350; //x positon
    let ypos = 50; //y positon
    let ggColor= 0; //green color
    for (let num = 1; num < 4; num++) {//repeat 5 times
        fill(0, ggColor,0);//green color
        circle(xpos,ypos,50);//positon of circle
        xpos = xpos - 50;//change of positon X
        ypos = ypos + 50;//change of positon Y
        ggColor = ggColor + 50;//change of color
    }// to get the reverse, have a big X number and use -
    // the opposite  have a smaller number 
}
