let UserInputText;
function setup(){
    createCanvas(200,200)
    background('green')

    inputText = createInput();
    inputText.position(10, 210);
    inputText.input(updateText);

}

function draw(){
    
    fill()
}

function updateText(){
    UserInputText = this.value()
}
