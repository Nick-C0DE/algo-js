// Exercise 1.5
// // Ask two numbers with decimal part to the user. For the first one only keep the integer part. Then multiply them and display the result.

const readlineSync = require("readline-sync");


let firstName = readlineSync.question('Can you give me your first name please? ');
let a = (readlineSync.question(firstName +' give me a numbers with decimal part please '));
let b =  (readlineSync.question(firstName +' give me another numbers with decimal part please '));


console.log( Math.trunc(a) * b);