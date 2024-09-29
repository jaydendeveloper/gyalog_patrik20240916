function feladat10(){
    
    console.info("FELADAT 10");
   
    const sqare_size = parseInt(prompt("FELADAT10: Negyzet merete: "));

    for(let i = 1; i <= sqare_size; i++){
        let row = "";
        for(let j = 1; j <= sqare_size; j++){
            if(i == j){
                row += "%";
            } else if(i == 1 || i == sqare_size || j == 1 || j == sqare_size){
                row += "%";

            } else {
                row += " ";
            }     
        
        }
        console.log(row);
    }
       
}

feladat10();