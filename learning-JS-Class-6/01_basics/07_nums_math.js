const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);

// console.log(balance.toFixed(2)); //? added 0 value to next after the numbers like (.00) !

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-BN')); //? this method based on us standard. // you can change it to your origin country.

//? +++++++++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++++

console.log(Math)
console.log(Math.abs(-4)); //? Absolute value (negative change it to positive value)
console.log(Math.round(4.6)); //? it round up the number like 4.5 into 5 and 4.4 into 4.
console.log(Math.ceil(4.2)); //? it increase the value whats after the dot. like 4.2 into 5.
console.log(Math.floor(4.3)); //? it decrease the value whats after the dot. like 4.3 into 4.
console.log(Math.min(5,3,2,6)); //? it shows the min value.
console.log(Math.max(5,3,2,6)); //? it shows the max value.

console.log(Math.random()); //? it will create random value between o and 1 with decimals.
console.log((Math.random()*10) + 1); //? to add +1 means it will never show now 0 value.
console.log(Math.floor(Math.random()*10) + 1) //? it will give the value to exact and without decimals.

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)

