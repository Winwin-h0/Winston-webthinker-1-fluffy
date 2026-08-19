let favouriteHobbys = ["Reading","Gaming","Art","Music","Origami"]
let yPos

function setup(){
    createCanvas(600,400);
    yPos = height
    fill(255,255,0)
    textSize(24)
    textAlign(CENTER,CENTER)
}

function draw(){
    background(0)


    text("Moving Text", width/2, yPos);

    yPos -= 0.6

    for(let i = 0; i < favouriteHobbys.lenght; i++){
        text((i + 1) + "." + favouriteHobbys[i], 50, 80 + i * 30)
    }
}