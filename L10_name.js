let inputText2;
let inputText;
let userText1;
let userText2;

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
    textAlign(CENTER,CENTER)
    text(userText1, width/2, 100);
    text(userText2, width/2, 200)
}

function updateText(){
    userText1 = this.value();
}

function updateText1(){
    userText2 = this.value()
}