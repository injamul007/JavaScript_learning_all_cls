//! Error Handling 
//! Compile time error
//!Syntax error
// console.log(1;) //! syntax error 


//! Runtime error
//! Reference error
// console.log(x);


// try {
//   console.log("try block starts here");
//   // error -> reference error
//   console.log(x);
//   console.log("try block ends here");
  // a
  // b
  //c

// }
// catch(err) {
  // define that what you do with the errors you get
  // retry logic
  // fallback mechanism
  // logging
  // custom error
//   console.log("I AM INSIDE CATCH BLOCK");
//   console.log("Your error is here: ", err);
// }
// finally {
//   console.log("I will run every-time, as i am finally block");
// }


//! let's create a custom error

try {
  // Reference error
  console.log(x);
}
catch(err) {
  throw new Error ("First declare it and then print it");
}

let errorCode = 100;
if (errorCode == 100) {
  throw new error("Invalid Json");
}