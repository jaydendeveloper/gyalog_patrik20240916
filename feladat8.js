//Write a for loop that calculates the factorial of a given number.

const number = parseInt(prompt("Szám:"));

let fact = 1;

for(let i = 1; i <= number; i++){
    fact = fact * i;
}

console.log(fact)