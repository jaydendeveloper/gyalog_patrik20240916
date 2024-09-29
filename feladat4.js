function feladat4(){

    console.info("FELADAT 4;")

    const gradesConversion = {
        [5]: "A",
        [4]: "B",
        [3]: "C",
        [2]: "E",
        [1]: "F"
    }
    
    
    const input = parseInt(prompt("Átkonvertálandó jegy:"));
    
    console.log(gradesConversion[input] == undefined ? "Nincs ilyen jegy" : gradesConversion[input]);
}

feladat4();