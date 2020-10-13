// Exercise 3.2
// Write a program that will calculate the average value of a given array.

// Test it with the following arrays:

// [1, 2, 3, 4, 5] => 3
// [100, 101, 102] => 101
let numbers = [1, 2, 3, 4, 5];
let total = 0;
for(let i = 0; i < numbers.length; i++) {
    total += numbers[i];}
let avg = total / numbers.length;
console.log(avg)


let number = [100, 101, 102];
let total1 = 0;
for(let i = 0; i < number.length; i++) {
    total1 += number[i];}
let avg1 = total1 / number.length;
console.log(avg1)