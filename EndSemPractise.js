let foods = ["pizza", "icecream", "burger"]

let distance = 0
function setup(){
    background('green')
    createCanvas(600,400)

    for(i = 0; i < 4; i++){
        text(foods[i], distance, 300)
        distance += 100
    }
}
function draw(){

}