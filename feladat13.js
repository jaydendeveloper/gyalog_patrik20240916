function feladat13(){

    console.log("FELADAT 13");

    for(let i = 10; i <= 31; i++){
        const divisors = [];
        for(let j = 2; j <= 31; j++){
           if(i % j == 0){
                divisors.push(j);
           }
        }

        const output = divisors.join(", ");

        console.log(i + ":" + output);
    }
}

feladat13();