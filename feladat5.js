const input = parseInt(prompt("Év:"));


if(input % 4 == 0){
    if(input.toString().endsWith("00") && input % 400 == 0 ){
        console.log("Szökőév");
    } else if(input.toString().endsWith("00") && input % 400 != 0){
        console.log("Nem szökőév");
    } else {
        console.log("szökőév");
    }
} else {
    console.log("Nem szökőév");
}