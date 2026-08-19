// let favouriteHobbys = ["Reading","Gaming","Art","Music","Origami"]
let yPos;
let lineGap = 50;

let backgroundMusic;

let toggleS = false

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
function preload(){
    backgroundMusic = loadSound('assets/star_wars_theme_8_bit.mp3')
}

function setup(){
    createCanvas(600,400);
    yPos = height;
    backgroundMusic.loop()
}

text("click to start")

function draw(){
    background(0);

    fill(255,255,0);
    textSize(24);
    textAlign(CENTER,CENTER);

    for (let i = 0; i < storyText.length; i++){
        let sentence = storyText[i];
        text(sentence,width/2, yPos + i * lineGap);
    }

    yPos -= 0.6;

    console.log(yPos);
    if(yPos < -storyText.length * (lineGap+5)){
        yPos = height;
    }

    // for(let i = 0; i < favouriteHobbys.length; i++){
    //     text((i + 1) + "." + favouriteHobbys[i], 300, yPos + i * 30)
    // }
}

//use for mouse click
function mouseClicked() {

    if(toggle === false){
        toggleS = true
    }else{
        to
    }
}