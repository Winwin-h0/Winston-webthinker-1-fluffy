let favouriteFoods = ["Pizza","burger","Sushi","Tacos","pasta"]

function setup(){
    createCanvas(600,400);
    textSize(24)
    textAlign(LEFT,TOP)
}

function draw(){
    background('green')

    fill(0);
    text("My Favourite Foods:",50,50)

    for(let i = 0; i < favouriteFoods; i++){
        text((i))
    }
}