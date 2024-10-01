function feladat9(){

    console.info("for_loop_12");

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

feladat9();