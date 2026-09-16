let inputField;
let submitButton
let outputArea

function setup(){
    createCanvas(400,200)
    background(220)

    inputField = createInput("Enter your text here")
    inputField.position(55,20)

    submitButton = createButton("Show Input")
    submitButton.mousePressed(displayInput);
    submitButton.position(inputField)
}