function feladat11(){
        
    console.info("FELADAT 11");

    const string = prompt("FELADAT11 szoveg:");


    for(let i = 0; i < string.length; i++){
       if(parseInt(string[i])){
           break;
       } else {
            console.log(string[i]);
       }
    }
}

feladat11();