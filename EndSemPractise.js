let foods = ["pizza", "icecream", "burger"]
function setup(){
    background("green")
    createCanvas(600,400)

    for(i = 0; i < 4; i++){
        text(foods[i], 300, i + 50)
    }
}
function draw(){

}