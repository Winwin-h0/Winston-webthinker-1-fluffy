let foods = ["pizza", "icecream", "burger"]

let distance = 50
function setup(){
    background('green')
    createCanvas(600,400)

    textSize(20)
    

    for(i = 0; i < 4; i++){
        text(foods[i], distance, 300)
        distance += 100
    }
}
function draw(){

}