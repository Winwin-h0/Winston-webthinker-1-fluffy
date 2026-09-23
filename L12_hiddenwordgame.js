let words = ["apple", "mango", "grape", "peach", "melon", "table", "chair", "brick", "cloud", "storm", 
    "beach", "river", "flame", "grass", "skull", "horse", "laser", "brain", "plane", "train"];

let inputFieldGuess;

let buttonForGuess;

let randomWord;

let displayWord;

function setup(){
    createCanvas(600,400);

    randomWord = random(words);

    


    inputFieldGuess = createInput("Enter your text here");
    inputFieldGuess.size(150,30);
    inputFieldGuess.style("font-size","20px");
    inputFieldGuess.position(200, 200);

    buttonForGuess = createButton("Guess");
    buttonForGuess.mousePressed(displayInput);
    buttonForGuess.size(150,30);
    buttonForGuess.style("font-size", "20px");
    buttonForGuess.position(inputFieldGuess.x + inputFieldGuess.width + 10, inputFieldGuess.y);

}

function draw(){
    background('green');

    fill(0)
    textAlign(CENTER,CENTER)
    textSize(24)

    text("Guess the hidden word", 300, 50)
    text("Attempts: 0", 300, 100)
    text("Hint: " + randomWord, 300, 150)

    text(drawdis, 200, 200)
}

// function displayInput(){

//     textSize(20)
//     textAlign(CENTER,CENTER)

//     text(inputFieldGuess.value(), 200, 200)
// }
