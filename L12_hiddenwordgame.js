let inputFieldGuess;

let buttonForGuess;

function setup(){
    createCanvas(600,400)
    background('green')

    inputFieldGuess = createInput("Enter your text here");
    inputFieldGuess.size(150,30)
    inputFieldGuess.style("font-size","20px")
    inputFieldGuess.position(200,20);

    buttonForGuess = createButton("Show Input");
    buttonForGuess.mousePressed(displayInput);
    buttonForGuess.size(150,30)
    buttonForGuess.style("font-size", )
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
