/* 
* JavaScript Has 8 Datatype-----
1. String
2. Number
3. Bigint
4. Boolean
5. Undefined
6. Null
7. Symbol
8. Object
*/

//String
let firstName = 'Ali';
firstName = 'Tonmoy';
//let fullName = 'My Name is \'Ali\'';
let fullName = "My Name is 'Ali'";

let finalName = `My Name is ${firstName}`;

console.log(finalName);
console.log(typeof firstName);

//? Bigint
// Bigint cannot mix with other data types
// You cannot add decimals

let numberBig = 999999999999999n;
let numberBig2 = 999999999999999n;

console.log(numberBig * numberBig2);
console.log(typeof numberBig);