const readlineSync = require("readline-sync");


let firstName = readlineSync.question('Can you give me your first name please? ');
// let name = readlineSync.question('Can you give me your name please? ');
// let city = readlineSync.question('Where do you live? ');
// console.log("Your name is " + firstName + " "+ name + " and you live in " + city + ".");
let a = new Number (readlineSync.question(firstName +' give me  numbers with decimal part please '));
let b = new Number (readlineSync.question(firstName +' give me two numbers with decimal part please '));
let multiNumber = new Number (Math.round(a/b))

console.log(multiNumber);
