// Exercise 2.2
// Ask the user to enter three numbers: min, max and current. Display if current is between min and max.

// Bonus: if min is greater than max, display an error message to explain the user he's doesn't understand anything then exit the program. (It must not ask any other question.)

// Bonus 2: be polite in the error messages. (facultative)


const readlineSync = require("readline-sync");
// Ask the user to enter three numbers: min, max and current. Display if current is between min and max.
let min = readlineSync.question('Can you give me min number? ');
let max = readlineSync.question('Can you give me max number? ');
let current = readlineSync.question('Can you give me the number in between? ');

  
  if((current>min) && (current<max)){
    console.log(current);
  } else {
  console.log("Retourne a l\'école");
}