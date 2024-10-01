import input from "./input.js";

async function feladat4(){

    console.info("grade_calculator")

    const gradesConversion = {
        [5]: "A",
        [4]: "B",
        [3]: "C",
        [2]: "E",
        [1]: "F"
    }
    
    
    const userIn = parseInt(await input("Átkonvertálandó jegy:"));
    
    console.log(gradesConversion[userIn] == undefined ? "Nincs ilyen jegy" : gradesConversion[userIn]);
}

feladat4();