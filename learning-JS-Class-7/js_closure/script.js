//? JavaScript Closure in details******

// function outer() {
//   console.log("outer");
//   function inner() {
//     console.log("inner");
//   }
//   inner();
// };

// outer();

// function outer() {
//   console.log("outer");
//   return function inner() {
//     console.log("inner");
//   }
// };


// outer()();  //? put double paren-thesis for calling the nested function or returning functions;


//? closure interview questions no1

// function outer() {
//   let x = 10;
//   function inner() {
//     console.log(x);
//   }
  
//   x = 20;
//   return inner;
// };

// var innerFunc = outer();

// innerFunc();



//? closure interview questions no2


// function outer() {
//   var x = 10;
//   function inner() {
//     var y = 5;
//     console.log(x + y);
//   }

//   var x = 20;
//   return inner;
// };

// var innerFunc = outer();

// innerFunc();


//? closure interview questions no3*** IIFE

// (function x(a) {
  //   console.log(a)
  // })(1212);
  
  // (function outer(x) {
  //   return (function inner(y) {
  //     console.log(x);
  //   })(105); //? this 105 output will not show because we didn't console the value of inner functions parameter y;
  // })(100);
  
  




//? closure interview questions no4*** IIFE

// let count = 0; //? let is a block scope

// (function logCount() {
//   if(count === 0) {
//     let count = 1;  //? so that this let is only existed to this if because it is a block scope;
//     console.log(count);
//   }
//   console.log(count); //? so this console log is get a value or take a value from outside variable or value; because it cannot access the if blocks variables;
// })();

