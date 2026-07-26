function setup() {
    createCanvas(600,600);
    background('green');
}

function draw() {
    for (let num = 0; num < 5; num++) {
        fill(num)
        circle(50 + num * 50, 100, 40)
    }
}
