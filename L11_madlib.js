let inputFieldName;
let inputFieldVerb;
let inputFieldAdjective;
let inputFieldAdverb;
let inputFieldPlace;

let submitButtonForName;

let storyText = ""
let storyTemplates

function setup(){
    createCanvas(600,600);
    background(220);

    inputFieldName = createInput("Enter your text here");
    inputFieldName.position(200,20);

    inputFieldVerb = createInput("Enter your text here");
    inputFieldVerb.position(200,70);

    inputFieldAdjective = createInput("Enter your text here");
    inputFieldAdjective.position(200,120);

    inputFieldAdverb = createInput("Enter your text here");
    inputFieldAdverb.position(200,170);

    inputFieldPlace = createInput("Enter your text here");
    inputFieldPlace.position(200,220);

    fill(0);
    textSize(15);
    text("Enter a noun:", 100, inputFieldName.y + 15);
    text("Enter a verb:", 100, inputFieldVerb.y + 15);
    text("Enter a adjective:", 70, inputFieldAdjective.y + 15);
    text("Enter a adverb:", 80, inputFieldAdverb.y + 15);
    text("Enter a place:", 100, inputFieldPlace.y + 15);

    storyTemplates = [
        "The {adj} {noun} decided to {verb} {adj} at the {place}.",
        "One day, a {adj} {noun} wanted to {verb} {adj} in {place}.",
        "Did you h"
    ]

    submitButtonForName = createButton("Show Input")
    submitButtonForName.mousePressed(displayInput);
    submitButtonForName.position(inputFieldName.x + inputFieldName.width + 10, inputFieldName.y)
}

function displayInput(){
    console.log(inputFieldName.value());

}