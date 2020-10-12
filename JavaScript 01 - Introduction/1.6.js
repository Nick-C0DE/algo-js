const readlineSync = require("readline-sync");


let shoeSize = readlineSync.question('Can you give me your shoe size please? ');
let birthYear = readlineSync.question('Can you give me your birth year please? ');

let a = new Number (readlineSync.question(""));
let b = new Number (readlineSync.question(""));
let multiNumber = new Number (Math.round(a/b))

console.log(multiNumber);

