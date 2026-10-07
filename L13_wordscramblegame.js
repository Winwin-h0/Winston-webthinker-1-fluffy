let words = [
    "elephant", "backpack", "keyboard", "hospital", "sunlight", "raincoat", "notebook", "shoulder", 
    "football", "bathroom", "sandwich", "airplane", "umbrella", "medicine", "chocolate", "software", 
    "pineapple", "furniture", "telephone", "lighthouse"];

let hiddenWord;

let inputBoxForGuess;

let buttonForGuess;

let buttonForScramble;

let score = 0;

let streak = 0;

let max = 0;

let scrambledWord;

function setup(){
    createCanvas(600,400);
    background('green');

    pickNewWord();

    inputBoxForGuess = createInput();
    inputBoxForGuess.size(120,25);
    inputBoxForGuess.position(250, 200);

    buttonForGuess = createButton("Guess");
    buttonForGuess.size(120,30);
    buttonForGuess.position(inputBoxForGuess.x + inputBoxForGuess.width + 20, 200);

    //buttonForGuess.position(inputFieldGuess.x + inputFieldGuess.width + 10, inputFieldGuess.y);

    buttonForScramble = createButton("Rescramble");
    buttonForScramble.size(120,30);
    buttonForScramble.position(inputBoxForGuess.x - buttonForScramble.width - 10, 200);
    buttonForScramble.mousePressed(shuffleExistingWord);
}

function draw(){
    textSize(19);
    textAlign(CENTER,CENTER);
    text("Word Scramble Game!", 300, 30);
    text("Random Word: " + scrambledWord.toUpperCase(), 300, 100);

    text("Score: " + score, 300, 300);
    text("Streak: " + streak + " (Max: " + max + ")", 300, 350);
}

function shuffleWord(word){
    let arr = word.split('');
    for(let i = arr.length - 1; i > 0; i--){
        let j = floor(random(i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.join('');
}

function pickNewWord(){
    hiddenWord = random(words);
    scrambledWord = shuffleWord(hiddenWord);
}

function shuffleExistingWord(){
    background('green');
    scrambledWord = shuffleWord(hiddenWord);
    
}

function checkGuess(){
    let guess = inputBoxForGuess.value().toLowerCase();
    attempts++;

    if (guess === hiddenWord) {
        message = "Correct! Moving on to the next word!";
        hidx.splice(hidx, 1);
        score++;
        if (attempts === 1) {
            streak++;
            maxStreak = max(streak, maxStreak);
        } else {
            streak = 0;
        }
        attempts = 0;
        inputBoxForGuess.value("");
        pickNewWord;
    } else {
        message = "Incorrect! Try again!";
        streak = 0;
    }
}