// Exercise 2.7
// Make a program that ask the user to enter a number named n. 

// Then ask the user to give the program let=n  X to enter a new number. 
// At the end display the sum of all the numbers collected this way.

// Example: If the user enters 3 for n then 1, 2 and 3, the program should display 6.
const readlineSync = require("readline-sync");

let n = (readlineSync.question('give me how many loops? '));
let total = 0;

for(let i=0; i<n; i++ ){
 
    total+= new Number (readlineSync.question('give a number that I will add? '));
}
console.log(total);
