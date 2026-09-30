let words = [
    "elephant", "backpack", "keyboard", "hospital", "sunlight", "raincoat", "notebook", "shoulder", 
    "football", "bathroom", "sandwich", "airplane", "umbrella", "medicine", "chocolate", "software", 
    "pineapple", "furniture", "telephone", "lighthouse"];
let randomWord;

let inputBoxForGuess;

let buttonForGuess;

let buttonForScramble

let score = 0

let streak

function setup(){
    createCanvas(600,400)
    background('green')

    randomWord = random(words)

    inputBoxForGuess = createInput()
    inputBoxForGuess.size(120,25)
    inputBoxForGuess.position(250, 200)

    buttonForGuess = createButton("Guess")
    buttonForGuess.size(120,30)
    buttonForGuess.position(inputBoxForGuess.x + inputBoxForGuess.width + 20, 200)

    //buttonForGuess.position(inputFieldGuess.x + inputFieldGuess.width + 10, inputFieldGuess.y);

    buttonForScramble = createButton("Resubmit")
    buttonForScramble.size(120,30)
    buttonForScramble.position(inputBoxForGuess.x - buttonForScramble.width - 10, 200)


}

function draw(){
    textSize(19)
    textAlign(CENTER,CENTER)
    text("Word Scramble Game!", 300, 30)
    text("Random Word: " + randomWord.toUpperCase(), 300, 100)

    text("Score:")



}