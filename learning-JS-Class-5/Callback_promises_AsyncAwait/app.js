//! Synchronous Programming in JS--
//? Synchronous means the code runs in a particular sequence of instruction given in the program.
//? Each instruction waits for the previous instruction to complete its execution.

//! Asynchronous Programming in JS--
//? Duo to synchronous programming, sometimes important instruction get blocked duo to some previous instructions, which causes a delay in the UI.
//? Asynchronous code execution allow to execute next instructions immediately and doesn't block the flow.


// console.log("one");
// console.log("two");

// setTimeout (() => {
//   console.log("hello");
// },4000);

// console.log("three");
// console.log("four");


//! Callbacks --
//? A callback is a function passes as an argument to another function.

// function sum(a,b) {
//   console.log(a+b);
// }

// function calculator(a,b, sumCallback) {
//   sumCallback(a,b);
// }

// calculator(1,2, sum);

//!Callback Hell ---
//? Callback Hell - Nested callbacks stacked below one another forming a pyramid structure.
//? (Pyramid of Doom)
//? This style of programming becomes difficult to understand & manage.

//? Nesting --
// let age = 19;
//Nested if else statement---
// if(age >= 18) {
//   if(age>=60) {
//     console.log("senior");
//   } else {
//     console.log("middle");
//   }
// }else {
//   console.log("child");
// }

// function getData(dataId, getNextData) {
//   setTimeout(() => {
//     console.log("data", dataId);
//     if(getNextData) {
//       getNextData();
//     }
//   },2000);
// }

function getData(dataId) {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      console.log(`Data: ${dataId}`);
      resolve("success");
    }, 3000);
  });
}

//? Async - Await function. The most easiest way to clean code.
(async function () {   //? used IIFE here because of Immediately Invoked the F     Functions call.
  console.log("getting data1....")
  await getData(1)
  console.log("getting data2....")
  await getData(2)
  console.log("getting data3....")
  await getData(3)
  console.log("getting data4....")
  await getData(4)
})();  //? IIFE ends here.

//*** IIFE: Immediately Invoked Function Expression
//? IIFE is a function that is called immediately as soon as it is.
//? And this the one time used code, i mean you cannot call it second time.


//? Promise Chain //-> this can be done with promise chain the easiest way.
// getData(1).then((res) => {
//   return getData(2);
// }).then((res) => {
//   return getData(3);
// }).then((res) => {
//   console.log(res);
// })


//? This is just callback hell ! the bad code.
//? This is also call nested callback
// getData(1, () => {
//   console.log("getting data2 ......");
//   getData(2, () => {
//     console.log("getting data2 ......");
//     getData(3, () => {
//       console.log("getting data2 ......");
//       getData(4);
//     });
//   });
// });


//! promises in JS---
//? Promises is for "eventual" completion of task. It is an object in JS.
//? it is a solution to callback hell.
//? Promise is an object in JavaScript.
//? It has 3 state in js - 1.Pending. 2.Resolve. 3.Rejected.
//? Resolve and Rejected are 2 handler of Promise in JS.
//!*** resolve & reject are callbacks provided by JS.
// ** A JavaScript Promise object can be:
//? Pending: the result is undefined
//? Resolved: the result is a value(fulfilled)...resolve(result)
//? Rejected: the result is an error object ... reject(error)
//** Promise has state(pending,fulfilled) & some result(result for resolve & error for reject) */ 

// const getPromise = () => {
//   return new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     resolve("success");
//     reject("some error occurred");
//   });
// };

// let promise = getPromise();
// promise.then((res) => {
//   console.log("promise fulfilled", res);
// });
// promise.catch((err) => {
//   console.log("rejected", err);
// });

// function getData(dataId, getNextData) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data", dataId);
//       resolve("success");
//       if(getNextData) {
//         getNextData();
//       }
//     },5000);
//   });
// }

// let finalValue = getData(123);


function asyncFunc1() {   //? asynchronous function 1 
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data1");
      resolve("success");
    },4000);
  });
};

function asyncFunc2() {   //? asynchronous function 2
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data2");
      resolve("success");
    },4000);
  });
};

// console.log("fetching data1....");
// let p1 = asyncFunc1();
// p1.then((res) => {
//   // console.log(res);
//   console.log("fetching data2....");  //? this is called promise chaining.
//   let p2 = asyncFunc2();
//   p2.then((res) => {
//     // console.log(res);
//   })
// });


// console.log("fetching data2....");
// let p2 = asyncFunc2();
// p2.then((res) => {
//   console.log(res);
// });


//************************** Async-Await *********************************
//? async function always returns a promise.
//? async function myFunc(){.....}
//? await meaning in english is "to wait".
//? await pauses the execution of its surrounding async function until the promise is settle.
//*** we can use await keyword only inside of an async function.

// async function hello() {
//   console.log("Hello");
// }

function api(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Weather data : ${num}`);
      resolve(200);
    }, 2000);
  });
};

// async function getWeatherData() {
//   await api(1); //? 1st call 
//   await api(2); //? 2nd call 
//   await api(3); //? 3rd call 
// }
// console.log(getWeatherData());


