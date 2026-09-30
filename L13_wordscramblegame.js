let words = [
    "elephant", "backpack", "keyboard", "hospital", "sunlight", "raincoat", "notebook", "shoulder", 
    "football", "bathroom", "sandwich", "airplane", "umbrella", "medicine", "chocolate", "software", 
    "pineapple", "furniture", "telephone", "lighthouse"];
let randomWord;

let inputBoxForGuess;

let buttonForGuess;

let buttonForScramble

function setup(){
    createCanvas(600,400)
    background('green')

    randomWord = random(words)

    inputBoxForGuess = createInput()
    inputBoxForGuess.size(120,20)
    inputBoxForGuess.position(250, 200)

    buttonForGuess = createButton("Guess")
    buttonForGuess.size(120,20)
    buttonForGuess.position(inputBoxForGuess.position + inputBoxForGuess.x, 200)

    buttonForScramble = createButton("Resubmit")
    buttonForScramble.size(120,20)
    buttonForScramble.position(inputBoxForGuess.position - 20, 200)


}

function draw(){

}