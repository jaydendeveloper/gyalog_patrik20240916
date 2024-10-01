import input from "./input.js";

async function feladat8(){
    console.info("for_loop_06");

    const number = parseInt(await input("Szám aminek a faktoriálisa kell:"));

    let fact = 1;

    for(let i = 1; i <= number; i++){
        fact = fact * i;
    }

    console.log(fact)
}

feladat8();