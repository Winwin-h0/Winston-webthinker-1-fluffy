let UserInputText;
function setup(){
    createCanvas(200,200)
    background('green')

    inputText = createInput();
    inputText.position(100, 100,);
    inputText.input(updateText);

}

function draw(){
    
}

function updateText(){
    UserInputText = this.value()
}
