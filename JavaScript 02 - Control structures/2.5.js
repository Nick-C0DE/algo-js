// Exercise 2.5
// Make a program that asks the favorite number of the user. If that number is anything other than 42 display "Are you sure?" and ask again. (This program should never end as long as the user didn't chose 42).
const readlineSync = require("readline-sync");

let lucky = (readlineSync.question('what is your favourite number? '));
let sure = "Are you sure?";

while (lucky!=42){
	lucky = readlineSync.question(sure);
}






