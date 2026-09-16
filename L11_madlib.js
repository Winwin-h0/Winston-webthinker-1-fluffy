let inputFieldName;
let submitButton
let outputArea

function setup(){
    createCanvas(600,600)
    background(220)

    inputFieldName = createInput("Enter your text here")
    inputField.position(55,20)

    submitButton = createButton("Show Input")
    submitButton.mousePressed(displayInput);
    submitButton.position(inputField.x + inputField.width + 10, inputField.y)
}

function displayInput(){
    background(220)
    const inputValue = inputField.value()
    textSize(64)
    textAlign(CENTER,CENTER)
    text(inputValue, 200, 100)
}