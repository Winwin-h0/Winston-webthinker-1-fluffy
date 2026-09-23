let inputFieldGuess;

let buttonForGuess;

function setup(){
    createCanvas(600,400)
    background('green')

    inputFieldGuess = createInput("Enter your text here");
    inputFieldGuess.position(200,20);

    buttonForGuess = createButton("Show Input");
    buttonForGuess.mousePressed(displayInput);
    buttonForGuess.position(inputFieldGuess.x + inputFieldGuess.width + 10, inputFieldGuess.y);

}

function draw(){
    
}

function displayInput(){
    background('green')
    text(inputFieldGuess.value(), 200, 200)
}
