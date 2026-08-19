let favouriteHobbys = ["Reading","Gaming","Art","Music","Origami"]
let yPos

function setup(){
    createCanvas(600,400);
    yPos = height
    fill(255,255,0)
    textSize(24)
    textAlign(LEFT,TOP)
}

function draw(){
    background(0)

    yPos -= 0.6

    for(let i = 0; i < favouriteHobbys.length; i++){
        text((i + 1) + "." + favouriteHobbys[i], 50, yPos + i * 30)
    }
}