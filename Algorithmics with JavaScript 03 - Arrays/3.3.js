// Exercise 3.3
// Write a program that will create a duplicate of a given array.

// Bonus: make a first version that will only do it using push(). Make a second version that uses a single method call to perform the copy. (You'll have to search on the MDN or Google for this one.)
// 1er version
let array = [1,2,3,4,5,6,7,8,9,10];
let newArray = [];

for(let i=0; i<array.length; i++) {
	newArray.push(array[i])
}
console.log(array, newArray);



// 2eme version

numbers = [1, 2, 3];
numbersCopy = [...numbers];
console.log(numbersCopy)