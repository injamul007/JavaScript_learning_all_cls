//! Global Scope 
// var age = 15;

//! Function Scope

// function sayHello() {
//   var name = "Earth";
//   console.log("Hello", name); // works only in this functions
// }

// sayHello();

//! Block scope

{
  let age = 30;
  // console.log(age); // it works here only(inside this block)
}
// console.log(age); //it won's run because of it is block scope

//! Temporal dead zone 

// console.log(marks);m // Temporal dead zone;
// console.log("love");m // Temporal dead zone;
// console.log("hate");m // Temporal dead zone;
// const marks = 100;  // Temporal dead zone;
// console.log(marks);