// Exercise 2.1
// Ask the user to enter its age. If its age is at least 18 display "You are an adult". If it's not the case display "You are not yet an adult".

const readlineSync = require("readline-sync");

let userAge = readlineSync.question('Can you give me your age please? ');

if(userAge<=18) {  
    console.log("You probably are an child");
} else {
  console.log("You probably are a adult");
}