function feladat1(){

    console.info("FELADAT 1")

    const side1 = 10.4;
    const side2 = 13.5;
    const side3 = 8.2;

    const surface = 2 * (side1 + side2 + side3);
    const volume = side1 * side2 * side3;

    console.info()
    console.log(`Surface area: ${surface}`);
    console.log(`Volume: ${volume}`);
}

function feladat2(){

    console.info("FELADAT 2")

    const currentHours = 14;
    const currentMinutes = 34;
    const currentSeconds = 42;

    const currentDate = new Date();
    currentDate.setHours(currentHours);
    currentDate.setMinutes(currentMinutes);
    currentDate.setSeconds(currentSeconds)

    const date = new Date();
    date.setHours(23);
    date.setMinutes(59);
    date.setSeconds(59);

    console.log((date - currentDate) / 1000)
}

function feladat3(){

    console.info("FELADAT 3")

    const mass_in_kg = 81.2;
    const height_in_m = 1.78;

    const bmi = mass_in_kg / (height_in_m * height_in_m);

    console.log(bmi);
}


function feladat4(){

    console.info("FELADAT 4;")

    const gradesConversion = {
        [5]: "A",
        [4]: "B",
        [3]: "C",
        [2]: "E",
        [1]: "F"
    }
    
    
    const input = parseInt(prompt("Átkonvertálandó jegy:"));
    
    console.log(gradesConversion[input] == undefined ? "Nincs ilyen jegy" : gradesConversion[input]);
}

function feladat5(){

    console.info("FELADAT 5")

    const input = parseInt(prompt("Év:"));


    if(input % 4 == 0){
        if(input.toString().endsWith("00") && input % 400 == 0 ){
            console.log("Szökőév");
        } else if(input.toString().endsWith("00") && input % 400 != 0){
            console.log("Nem szökőév");
        } else {
            console.log("szökőév");
        }
    } else {
        console.log("Nem szökőév");
    }
}


function feladat6(){
    
    console.info("FELADAT 6")
    
    //1 = kő 2= papír 3= olló

    const p1= parseInt(prompt("Player1: 1 = kő 2 = papír 3 = olló"));
    const p2= parseInt(prompt("Player2: 1 = kő 2 = papír 3 = olló"));


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

function feladat7(){

    console.info("FELADAT 7")

    const my_string = 'apple';

    for(let i = 0; i < my_string.length; i++){
        console.log(my_string[i]);
    }

}


function feladat8(){
    console.info("FELADAT 8");

    const number = parseInt(prompt("Szám:"));

    let fact = 1;

    for(let i = 1; i <= number; i++){
        fact = fact * i;
    }

    console.log(fact)
}



function feladat9(){

    console.info("FELADAT 9");

    //Create a for loop that calculates the average of the digits of a given number.

    const number = 268;

    const str = number.toString();

    let sum = 0;

    for(let i = 0; i <= str.length; i++){
        if(parseInt(str[i])){
            sum += parseInt(str[i]);
        }
    }
    console.log(sum / str.length)

}


function feladat10(){
    
     console.info("FELADAT 10");
    
        
}

function feladat11(){
        
    console.info("FELADAT 11");

    const string = prompt("FELADAT10 szoveg:");


    for(let i = 0; i < string.length; i++){
       if(parseInt(string[i])){
           break;
       } else {
            console.log(string[i]);
       }
    }
}

function feladat12(){
            
    console.info("FELADAT 11");
    
    let x = 0;
    let divisible = 0;
    
    for(let i = 1; i <= 100; i++){
        if(i != 3){

            if(x == 1 && i % 3 == 0){
                if(!divisible == 2){
                    console.log(i);
                    divisible++;
                } else {
                    divisible = 0;
                }
            } else {
                console.log(i);
            }

            if(x == 2 && i % 3 == 0){
                if(!divisible == 3){
                    console.log(i);
                    divisible++;
                } else {
                    divisible = 0;
                }
            }

            if(x > 2) {
                x = 0;
            }
        } else {
            x++;
        }
    }
}