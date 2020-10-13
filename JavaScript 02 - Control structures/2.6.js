// Exercise 2.6
// Make a program that ask the user to enter a number between 1 and 7. Depending on the number, display the day of the week that correspond. (1 => Monday, 2 => Tuesday, etc...)

const readlineSync = require("readline-sync");
let number = readlineSync.question('Enter a number between 1 and 7, please!');

switch (number>1 || number<7) {
  	case number==1:
    console.log(number + ' => Monday');
    break;
    case number==2:
    console.log(number + ' => tuesday');
    break;
    case number==3:
    console.log(number + ' => wednesday');
    break;
    case number==4:
    console.log(number + ' => thursday');
    break;
    case number==5:
    console.log(number + ' => friday');
    break;
    case number==6:
    console.log(number + ' is saturday');
    break;
    case number==7:
    console.log(number + ' => sunday');
    break;
    default:
    console.log('not a good number');
}