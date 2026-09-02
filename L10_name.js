let inputText2;
let inputText;
let userText = "Your Text Here";

function setup(){
    createCanvas(600, 400);

    inputText = createInput();
    inputText.position(200, height - 50);
    inputText.input(updateText);

    inputText2 = createInput();
    inputText2.position(200, height - 80);
    inputText2.input(updateText);
}

function draw(){
    background('green');

    fill(0);
    textSize(28);
    textAlign(CENTER,CENTER);
    text(userText, width/2, 180);
}

function updateText(){
    userText = this.value();
}