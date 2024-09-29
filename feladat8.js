function feladat8(){
    console.info("FELADAT 8");

    const number = parseInt(prompt("Szám:"));

    let fact = 1;

    for(let i = 1; i <= number; i++){
        fact = fact * i;
    }

    console.log(fact)
}

feladat8();