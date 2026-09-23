let words = ["apple", "mango", "grape", "peach", "melon", "table", "chair", "brick", "cloud", "storm", 
    "beach", "river", "flame", "grass", "skull", "horse", "laser", "brain", "plane", "train"];

let inputFieldGuess;

let buttonForGuess;

function setup(){
    createCanvas(600,400);
    background('green');

    fill(0)
    textAlign(CENTER,CENTER)
    textSize(24)

    text("Guess the hidden word", 300, 10)
    text("Attempts: 0", 300, 30)
    text("", 300, 50)


    inputFieldGuess = createInput("Enter your text here");
    inputFieldGuess.size(150,30);
    inputFieldGuess.style("font-size","20px");
    inputFieldGuess.position(200,20);

    buttonForGuess = createButton("Show Input");
    buttonForGuess.mousePressed(displayInput);
    buttonForGuess.size(150,30);
    buttonForGuess.style("font-size", "20px");
    buttonForGuess.position(inputFieldGuess.x + inputFieldGuess.width + 10, inputFieldGuess.y);

}

function draw(){
    
}

function displayInput(){
    background('green')
    textSize(20)
    textAlign(CENTER,CENTER)
    text(inputFieldGuess.value(), 200, 200)
}
