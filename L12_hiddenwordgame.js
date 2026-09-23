let inputFieldGuess;

let buttonForGuess;

function setup(){
    createCanvas(600,400)
    background('green')

    inputFieldGuess = createInput("Enter your text here");
    inputFieldGuess.position(200,20);

    buttonForGuess = createButton("Show Input");
    buttonForGuess.mousePressed(displayInput);
    submitButtonForName.position(inputFieldName.x + inputFieldName.width + 10, inputFieldName.y);




}
