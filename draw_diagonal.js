import input from "./input.js";

async function feladat10(){
    
    console.info("draw_diagonal");
   
    const sqare_size = parseInt(await input("Negyzet merete: "));

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