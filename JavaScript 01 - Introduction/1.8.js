// Exercice 1.8
// Create a "Story Teller".

// Ask questions to the user about different things. Store the results he gives to you. Display them in a way that it creates a fun story!

// Bonus: when you ask questions to the user he should be able to see how many questions remain to be asked.
const readlineSync = require("readline-sync");


let firstName = readlineSync.question('Can you give me your first name please? ');
let lucky = (readlineSync.question(firstName+" "+'what is your lucky Number? '));
let country = (readlineSync.question(firstName+" "+'Where would you like to live? '));
let animal = (readlineSync.question(firstName+" "+'what is your favourite animal? '));
let unlucky = (readlineSync.question(firstName+" "+'what is your unliky number? '));

console.log(lucky + " people from "+ country + " are sitting next to a river, A "+ animal + " swims past and they start to throw rocks at it. The " + animal + " gets angry and begins to swim towards them. " + unlucky + " of them run and climb in a tree. They shout to the other <<Why are you staying there, you better run before the " +animal+ " comes! He replies <<Why I didn't throw any Rocks>>. ");
