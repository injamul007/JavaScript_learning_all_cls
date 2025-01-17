//! JS Promise 

// let firstPromise = new Promise((resolve, reject) => {
  // console.log("Love");
  // reject (new Error("Internal server error"));
  
//   setTimeout(function sayMyName() {
//     console.log("My name is love love love");
//   }, 10000);
  
//     resolve (1001);
// } );



let promise1 = new Promise((resolve, reject) => {
  let success = true;
  if(success) {
    resolve("promise fulfilled");
  } else {
    reject("Promise Rejected");
  }
});


// promise then and catch 

promise1.then((message) => {
  console.log("then ka a message is " + message);
}).catch((error) => {
  console.log("Error: " + error);
});
