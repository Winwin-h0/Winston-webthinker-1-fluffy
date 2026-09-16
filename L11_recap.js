let UserInputText;

let colorPickerForText;
function setup(){
    createCanvas(200,200)
    background('green')

    inputText = createInput();
    inputText.position(10, 210);
    inputText.input(updateText);

    
    colorPickerForText = createColorPicker("rgb(0,0,0)")
    colorPickerForText.position(10,230)
    
}

function draw(){

    fill()
}

function updateText(){
    UserInputText = this.value()
}
