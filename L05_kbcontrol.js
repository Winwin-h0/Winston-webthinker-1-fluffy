let x = 200;

function setup(){
    createCanvas(400,600);
    background('green')
}

function draw(){
    circle(x, 600 / 2, 50)
    
    if(key === "a"){
        x = x - 10
    }

    if(key === "d"){
        x = x
    }
}


function keyPressed(){
    // console.log("key:", key);
    // console.log("keyCode", keyCode)

    // if (key ==="c"){
    //     circle(200 / 2, 200 / 2, 100)
    // }

    // if(key === "s"){
    //     square(50, 50, 100)
    // }
    // if (key === "w" && key ==="W"){
    //     console.log("W")
    // }
    // for(let i = 0; i < 15; i++){
    //     console.log("circles")
    //     fill(random(255), random(255), random(255))
    //     circle(random(1,400), random(1,600), random(1,30))
    // }
}

// function keyReleased(){
//     background('green')
// }