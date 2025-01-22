// JavaScript Operator----
/*
* Arithmetic Operators
* Conditional Operators
* Comparison Operators
* Logical Operators
* Assignment Operators
*/

// * Arithmetic Operators

let a = 50;
let b = 20;
let c = a % b;

console.log(c);

// let userInput = prompt('Enter a number');
// let number = parseInt('userInput');

// if (number % 2 === 0) {
  //   console.log(`${number} is even number`);
  // } else {
    //   console.log(`${number} is odd number`);
    // }
    
    let x = 10;
    x = x + 1;
    x++;    //Increment
    console.log(x);
    
    let y = 20;
    y = y - 1;
    y--;    //Decrement
    console.log(y);
    
    /*
    * Comparison Operator
    */
   
   let p = 5;
   let q = 10;
   console.log(p == q);   //Equal to but not-strong
   console.log(p === q); //Equal to strong
   console.log(p !== q);  //Not Equal to
   console.log(p > q);  //Greater than
   console.log(p < q);  //Smaller than
   console.log(p <= q);  //Smaller than Equal
   console.log(p >= q);  //Greater than Equal
   
   
   /*
   * Logical Operator
   */
  // && AND operator
  // || OR operator
  // !(p<q) NOT operator
  
  
  
  /*
  * Assignment Operator
  */
 
 let j = 10;
 let k = 20;
 j = j + k;
 j += k;
 
 j = j - k;
 j -= k;
 
 j = j * k;
 j *= k;
 
 j = j / k;
 j /= k;
 
 j %= k;
 
 j **= k;

  /*
 * Conditional (Ternary) Operators
 */
  
  let t = a<b ? 'true' : 'false';
  console.log(t);
  

  //if else ----

  if (a > b) {
    console.log('true');
  } else {
    console.log('false');
  }
  