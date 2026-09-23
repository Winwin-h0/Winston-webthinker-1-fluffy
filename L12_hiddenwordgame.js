let inputFieldGuess;

let buttonForGuess;

function setup(){
    createCanvas(600,400)
    background('green')

    inputFieldGuess = createInput("Enter your text here");
    inputFieldGuess.position(200,20);

    submitButtonForName = createButton("Show Input");
    submitButtonForName.mousePressed(displayInput);
    submitButtonForName.position(inputFieldName.x + inputFieldName.width + 10, inputFieldName.y);




}
