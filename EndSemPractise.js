let foods = ["pizza", "icecream", "burger"]

let distance = 50
function setup(){
    createCanvas(600,400)
    background('green')

    textSize(20)
    textAlign(CENTER,CENTER)

    for(i = 0; i < 4; i++){
        text(foods[i], distance, 300)
        distance += 100
    }
}
function draw(){

}