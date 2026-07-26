function setup() {
    createCanvas(600,600);
    background('grey');
}

function draw() {
    for (let num = 0; num < 5; num++) {
        fill(num)
        circle()
    }
}
