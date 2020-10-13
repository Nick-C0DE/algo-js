// Exercise 3.1
// Write a program that will add all the elements of an array.
// Test it with the following arrays:[1, 2, 3, 4, 5] => 15 and [100, 101, 102] => 303


// with function
// let arr = [1,2,3,4,5].reduce((a, b)=> a + b,0);
// console.log(arr);
// arr=15

let arr1=[1,2,3,4,5];
let total1 = 0;
for(let i=0; i<arr1.length; i++ ){
    total1+= arr1[i];
}
console.log(total1)



let arr2=[100, 101, 102];
let total2 = 0;
for(let i=0; i<arr2.length; i++ ){
    total2+= arr2[i];
}
console.log(total2)
