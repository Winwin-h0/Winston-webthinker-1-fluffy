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
    inputText.position(200, 500);
    inputText.input(updateText);

    inputText2 = createInput();
    inputText2.position(200, 530);
    inputText2.input(updateText1);

    colorPicker = createColorPicker("rgb(255, 205, 3)");
    colorPicker.position(200,560);

    colorPickerForRect = createColorPicker("rgb(255, 254, 254)")
    colorPickerForRect. position(300,300)
}

function draw(){
    background(colorPicker.value());

    fill(255);
    rect(50,100,500,160,50);


    fill(0);
    textSize(28);
    textAlign(CENTER,CENTER);

    text(userText1, 300, 150);
    text(userText2, 300, 200);

    textSize(16);
    fill(0);
    text("Enter your name:",100, 300)
    text("Enter your age:", 100, 335)
    text("Pick a background color:", 100, 365)
}

function updateText(){
    userText1 = this.value();
}

function updateText1(){
    userText2 = this.value()
}