// Count from 1 to 100. For every even number display the result of their division by 2. For every odd number display the result of their multiplication by 3.
let i= 1; 
while (i <= 100) { 
    console.log(i); 
   i +=1; 
}
function isEven(n) {
    return i % 2 == 0;
 }
 
 function isOdd(n) {
    return Math.abs(i % 2) == 1;
 }
