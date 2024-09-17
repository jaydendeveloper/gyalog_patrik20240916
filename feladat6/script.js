//1 = kő 2= papír 3= olló

const p1= parseInt(prompt("1 = kő 2= papír 3= olló"));
const p2= parseInt(prompt("1 = kő 2= papír 3= olló"));


if(p1 == 1){ // p1 követ választ
    if(p2 == 2){
        console.log("p2 nyert");
    } else {
        console.log("p1 nyert")
    }
}

if(p1 == 2){ // p1 papírt választ
    if(p2 == 3){
        console.log("p2 nyert");
    } else {
        console.log("p1 nyert");
    }
}

if(p1 == 3){ // p1 ollót választ
    if(p2 == 1){
        console.log("p2 nyert");
    } else {
        console.log("p1 nyert");
    }
}