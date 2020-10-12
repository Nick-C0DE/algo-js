const readlineSync = require("readline-sync");
// Ask the user to enter three numbers: min, max and current. Display if current is between min and max.
let min = readlineSync.question('Can you give me min number? ');
let max = readlineSync.question('Can you give me max number? ');
let current = readlineSync.question('Can you give me a current number? ');

  
  if((current>min) && (current<max)){
    console.log(current);
  } else {
  console.log("Retourne a l\'école");
}