let num = 5
let countInter;

function setup(){
    createCanvas(600,400)
    
    // intervalId = setInterval(drawCircle, 1000)
    textSize(50)
    textAlign(CENTER,CENTER)
}

function draw(){
    background(200)
    text(num, 600/2, 400/2)

    // let h = hour()
    // let m = minute()
    // let s = second()
    // let timeString = nf(h, 2) + ':' + nf(m, 2) + ':' + nf(s,2);
    // fill(0);
    // textSize(72)
    // text(timeString, width/2, height/2)    
}

let x = 0 

// function drawCircle(){
//     clear()
//     circle(x, 50, 20)
//     x += 10
//     if(x > 200){
//         x = 0
//     }
// }

function mousePressed(){
    countInter = setInterval(time, 1000)
    
}

function time(){
    if (num > 0){
        num -= 1
    }else{
        clearInterval(countInter)
    }
}
