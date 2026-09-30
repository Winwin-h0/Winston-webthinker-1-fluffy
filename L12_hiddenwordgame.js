let words = ["apple", "mango", "grape", "peach", "melon", "table", "chair", "brick",
             "cloud", "storm", "beach", "river", "flame", "grass", "skull", "horse",
             "laser", "brain", "plane", "train"];

let inputFieldGuess;

let buttonForGuess;

let hiddenWord;

let displayWord;

let guess;

let correctLetters = "";

let attempts = 0

let message = "";

function setup(){
    createCanvas(600,400);

    hiddenWord = random(words);

    displayText = hiddenWord[0].toUpperCase() + " _".repeat(hiddenWord.length -1)

    
    inputFieldGuess = createInput("Enter your text here");
    inputFieldGuess.size(150,30);
    inputFieldGuess.style("font-size","20px");
    inputFieldGuess.position(200, 200);

    buttonForGuess = createButton("Guess");
    // buttonForGuess.mousePressed(getGuess);
    buttonForGuess.mousePressed(checkGuess)
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
    text("Attempts: " + attempts + "/5", 300, 100)

    text("Hint:" + displayText, width / 2, height / 3)

    //text(displayWord, 300, 300)

    text(message, 300, 300 );

    
}

// function getGuess(){
//     guess = inputFieldGuess.value()
//     correctLetters = getCorrectLetters(guess, hiddenWord)
// }

function getCorrectLetters(guess,word){
    let myCorrectLetters = "";
    for(let i = 0; i < word.length; i++){
        if(word.includes(guess[i].toLowerCase()) && !myCorrectLetters.includes(guess[i].toUpperCase())){
            myCorrectLetters += guess[i].toUpperCase() + " "
        }
    }
    return myCorrectLetters
}

function checkGuess(){
    let guess = inputFieldGuess.value().toLowerCase();
    attempts++;

    if(guess === hiddenWord){
        message = "Correct! The word was: " + hiddenWord.toUpperCase() + "!";
    }

    else if(guess.length != 5){
        correctLetters = getCorrectLetters(guess, hiddenWord);
        message = "5 letters words only. Correct letters: " + correctLetters;
    }

    else if(attempts > 5){
        message = "G"
    }

    else{
        correctLetters = getCorrectLetters(guess, hiddenWord);
        message = "Wrong! Correct letters: " + correctLetters;
    }
}
