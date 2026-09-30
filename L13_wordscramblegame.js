let words = [
    "elephant", "backpack", "keyboard", "hospital", "sunlight", "raincoat", "notebook", "shoulder", 
    "football", "bathroom", "sandwich", "airplane", "umbrella", "medicine", "chocolate", "software", 
    "pineapple", "furniture", "telephone", "lighthouse"];
let randomWord;

let inputBoxForGuess;
function setup(){
    createCanvas(600,400)
    background('green')

    randomWord = random(words)

    inputBoxForGuess = createInput("Guess")
    inputBoxForGuess.postion(100, 300)
}

function draw(){

}