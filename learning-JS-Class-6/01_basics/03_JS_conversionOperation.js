//! The most important Topics of JavaScript.
//! It's all about conversion Operation.

// let score = "33" //? it wil give a actual Number Output.
// let score = "33abc" //? Now it is actually a NaN. **// Type of NaN is a Number but it shows that its a NaN(Not a Number).
// let score = null  //? it gives the output of 0
// let score = undefined //? it gives the output of NaN
// let score = true //? it gives the output of 1  // Obviously false will give 0
// let score = "Boss" //? it gives the output of NaN


// console.log(typeof score);
// console.log(typeof (score));

// let valueInNumber = Number(score); //? to convert the value of score into a number data type.  *** Number()-- JavaScript Built in Function.

// console.log(typeof valueInNumber);
// console.log(valueInNumber); //? NaN because of lineNumber4 has a NaN value.


// let isLoggedIn = 1 //?this will give output of True.
// let isLoggedIn = "" //? this will give output of false.
// let isLoggedIn = "Boss" //? this will give output of True.

// let booleanIsLoggedIn = Boolean(isLoggedIn); //? to convert a binary value it to Boolean.

// console.log(booleanIsLoggedIn);


// let someNumber = 33 //? it will shows 33 but it becomes a string.

// let stringNumber = String(someNumber) //? to convert number in to a string.

// console.log(stringNumber);

// console.log(typeof stringNumber); //? it is showing as a string, like i said it or line number 30.


//? ***************************** Operations ********************************

// let value = 3
// let negValue = -value

// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " Boss"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2); //? If strings come first, then everything will be counted as a string. 
// console.log(1 + "2"); //? If strings come last, then everything will be counted as conversions/ like it will added as sum.
// console.log("1" + 2 + 2)
// console.log(1 + 2 + "2")

// console.log(3 + 4 * 5 % 3)

// console.log(+true) //? it is correct syntax but a very messy one / so it has to be avoided ! 

// let num1, num2, num3

// num1 = num2 = num3 = 2 + 2 //? this is not a good way to writing code because of it hampers the readability.

let gameCounter = 100
// ++gameCounter; //? Prefix Operator aka Increment Operator -- it will deliver the value first then print it.

// gameCounter++; //? Postfix Operator aka decrement Operator -- it will print first and then deliver the value.

console.log(gameCounter);
