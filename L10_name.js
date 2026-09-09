let inputText2;
let inputText;
let userText1;
let userText2;

let nameInput
let ageInput
let colorPicker

function setup(){
    createCanvas(600, 400);

    inputText = createInput();
    inputText.position(200, height - 0);
    inputText.input(updateText);

    inputText2 = createInput();
    inputText2.position(200, height - -30);
    inputText2.input(updateText1);

    colorPicker = createColorPicker("rgb(255, 205, 3)");
    colorPicker.position(200,32);
}

function draw(){
    background(colorPicker.value());

    fill(255)
    rect(50,100,500,160,50)


    fill(0);
    textSize(28);
    textAlign(CENTER,CENTER)
    text(userText1, 300, 200);
    text(userText2, 300, 150)
    text("Pick a background color;", 20, 50)
}

function updateText(){
    userText1 = this.value();
}

function updateText1(){
    userText2 = this.value()
}