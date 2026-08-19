// let favouriteFoods = ["Pizza","Sashimi","Sushi","Tacos","pasta"]
let favouriteHobbys = ["Reading","Gaming","Art","Music","Origami"]

function setup(){
    createCanvas(600,400);
    textSize(16)
    textAlign(LEFT,TOP)
}

function draw(){
    background('green')

    fill(0);
    // text("My Favourite Foods:",50,50)
    text("My favourite Hobbys",50,50)

    // for(let i = 0; i < favouriteFoods.length; i++){
    //     text((i + 1) + "." + favouriteFoods[i], 50, 80 + i * 30)
    // }
    for(let i = 0; i < favouriteHobbys.lenght; i++){
        text((i + 1) + "." + favouriteHobbys.lenght)
    }
}