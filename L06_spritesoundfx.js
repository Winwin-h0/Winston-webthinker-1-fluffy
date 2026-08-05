x = 400 / 2
y = 400 / 2
function setup(){
    createCanvas(400,400)
    background('green')
}

function draw(){
    square(x, y, 100)

}

function keyPressed(){
    if(keyCode === DOWN_ARROW)
        y = y - 50
    if(keyCode === UP_ARROW)
        y = y + 50
    if(keyCode === "left_arrow")
        x = x - 50
    if(keyCode === "right_arrow")
        x = x + 50

    if(key === "space_bar")
        fill(random(50,200))
}