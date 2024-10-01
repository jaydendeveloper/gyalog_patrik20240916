import input from "./input.js";

async function feladat6(){
    
    console.info("stone paper scissors")
    
    //1 = kő 2= papír 3= olló

    const p1= parseInt(await input("Player1: 1 = kő 2 = papír 3 = olló"));
    const p2= parseInt(await input("Player2: 1 = kő 2 = papír 3 = olló"));


    if(p1 == 1){ // p1 követ választ
        if(p2 == 2){
            console.log("p2 nyert");
        } else if(p2 == 1) {
            console.log("dontetlen")
        } else {
            console.log("p1 nyert")
        }
    }

    if(p1 == 2){ // p1 papírt választ
        if(p2 == 3){
            console.log("p2 nyert");
        } else if(p2 ==2){
            console.log("dontetlen")
        } else {
            console.log("p1 nyert");
        }
    }

    if(p1 == 3){ // p1 ollót választ
        if(p2 == 1){
            console.log("p2 nyert");
        } else if(p2 == 3){
            console.log("dontetlen")
        } else {
            console.log("p1 nyert");
        }
    }
}

feladat6();