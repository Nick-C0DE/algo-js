// Exercise 1.3
// Ask the user to enter its first name and display a message saying "Hello first name".
const readlineSync = require("readline-sync");

let firstName= readlineSync.question('Can you give me your first name please? ');
let welcome = (readlineSync.question("Hello"+" "+ firstName));
console.log(welcome);
