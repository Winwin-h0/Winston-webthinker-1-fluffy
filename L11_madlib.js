let inputFieldName;
let inputFieldVerb;
let inputFieldAdjective;
let inputFieldAdverb;
let inputFieldPlace;
let submitButtonForName
let outputArea

function setup(){
    createCanvas(600,600)
    background(220)

    inputFieldName = createInput("Enter your text here")
    inputFieldName.position(200,20)

    inputFieldVerb = createInput("Enter your text here")
    inputFieldVerb.position(55,20)

    inputFieldAdjective = createInput("Enter your text here")
    inputFieldAdjective.position(55,20)

    inputFieldAdverb = createInput("Enter your text here")
    inputFieldAdverb.position(55,20)

    inputFieldPlace = createInput("Enter your text here")
    inputFieldPlace.position(55,20)

    // submitButtonForName = createButton("Show Input")
    // submitButtonForName.mousePressed(displayInput);
    // submitButtonForName.position(inputFieldName.x + inputFieldName.width + 10, inputFieldName.y)
}

function displayInput(){
    background(220)
    const inputValue = inputField.value()
    textSize(64)
    textAlign(CENTER,CENTER)
    text(inputValue, 200, 100)
}