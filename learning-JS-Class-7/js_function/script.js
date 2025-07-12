//? All about functions*********

// function sum(a, b) {  //? this is one rules.
//   return a+b;
// }

// console.log(sum(2,5));


// function sum(a, b) {  //? this is another rules.
//     const ret = a+b;
//     return ret;
// }

// console.log(sum(2,7));

// function calc(a,b) {
//   return (2 * (a + b));
// }

// console.log(calc(2,4));
// console.log(calc(2)); //? this will appear NaN value because of 1 parameters are not given;

//? Default Parameters*********

// function calc(a=0, b=0) { //? Default parameters are given here.
//   return (2 * (a + b));
// }

// console.log(calc(3)); //? single argument value are passed here and it will show perfectly.


//? REST Parameters *******

// function collectThis(x, ...y) { //? rest parameter is ...y 
//   console.log(x);
//   console.log(y);
// }


// console.log(collectThis(1,2,3,4,5,6,7,8,9)); //? 1st parameter is x and the rest parameters ...y is all of the rest numbers from 2;

//! Rule number 1 -- in one functions we can take only one REST parameter;

//! Rule number 2 -- REST parameter must be last formal parameters;


//? fat arrow functions******


// const printThis = () => {   //? Basic Arrow function
//   console.log("printing");
// }

// printThis();


// const print = (a) => { //? Arrow function with parameters
//   console.log(a);
// }

// print("boss");

// const print = (a) => console.log(a); //?This is shorter version of arrow functions writing; only if you have single line of code.



// const returnSomething = (a) => 2 * a; //? this is a return statement but if this only has one line of code then no longer required to write return keyWord;


// function x() {
  // console.log("x", this); //? this is a regular functions and here (this) will appear and execute global object on node ! its depending on browser and which platforms you run (this)
// }

// x();


// const obj = {
  // items: 12
// };

// obj.fun = x; //? now the x function and (this) is assign to a normal object. so that (this) will appear and execute the regular object like its nature of act.

// obj.fun(); //? now the function x will appear here and it indicate the object that assign here.


const x = () => {
  console.log("x", this); //? now in Arrow functions (this) will execute also global object use case of act and where it run
};


const obj = {
  item: 12
}

obj.fun = x;  //? IN this object the arrow function x is assign here and (this) is also appear here and execute by global object because of in arrow function (this) will indicate where it created ;

obj.fun();

