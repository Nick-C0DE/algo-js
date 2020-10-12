// // Exercise 1.6
// Ask two integers to the user. Display the rest of the integer division of the two numbers.

const readlineSync = require("readline-sync");


let firstName = readlineSync.question('Can you give me your first name please? ');
let a = (readlineSync.question(firstName +' give me a integrer numbers please '));
let b =  (readlineSync.question(firstName +' give me another integrer numbers please '));
let multiNumber = new Number (a/b);

console.log(multiNumber);

