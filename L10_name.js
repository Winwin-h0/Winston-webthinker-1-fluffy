let inputText2;
let inputText;
let userText1;

function setup(){
    createCanvas(600, 400);

    inputText = createInput();
    inputText.position(200, height - 0);
    inputText.input(updateText);

    inputText2 = createInput();
    inputText2.position(200, height - -30);
    inputText2.input(updateText);
}

function draw(){
    background('green');

    fill(0);
    textSize(28);
    text(userText1, 200, 100);
}

function updateText(){
    userText1 = this.value();
}