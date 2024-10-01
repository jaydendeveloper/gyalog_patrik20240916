function feladat12(){
            
    console.info("CONTINUE_4");
    
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

feladat12();