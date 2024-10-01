import input from "./input.js";

async function feladat5(){

    console.info("leap_year")

    const userIn = parseInt(await input("Év:"));

    if(userIn % 4 == 0){
        if(userIn.toString().endsWith("00") && userIn % 400 == 0 ){
            console.log("Szökőév");
        } else if(userIn.toString().endsWith("00") && userIn % 400 != 0){
            console.log("Nem szökőév");
        } else {
            console.log("szökőév");
        }
    } else {
        console.log("Nem szökőév");
    }
}
feladat5();