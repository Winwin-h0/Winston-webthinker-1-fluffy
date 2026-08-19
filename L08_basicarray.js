// let favouriteHobbys = ["Reading","Gaming","Art","Music","Origami"]
// let yPos
let storyText = [
    "A long time ago in a galaxy far,",
    "far away...",
    "",
    "EPISODE I",
    "THE BEGINNING",
    "",
    "It is a period of learning...",
    "Students have begun their journey",
    "into the world of p5.js.",
    "With newfound powers, they",
    "create amazing visuals and",
    "animations...",
    "",
    "May the Code be with you!"
];

function setup(){
    createCanvas(600,400);
    yPos = height
}

function draw(){
    background(0)
    fill(255,255,0)
    textSize(24)
    textAlign(LEFT,CENTER)
    // yPos -= 0.6

    // for(let i = 0; i < favouriteHobbys.length; i++){
    //     text((i + 1) + "." + favouriteHobbys[i], 300, yPos + i * 30)
    // }
}