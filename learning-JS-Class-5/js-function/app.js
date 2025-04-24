//!function
//!function with loop
//!function with if else statement

// function hello() {
//   console.log("hello");
// }
// hello();

// function print1to5() {
//   for(let i=1; i<=5; i++) {
//     console.log(i);
//   }
// }
// print1to5();

// function isAdult() {
//   let age = 17;
//   if(age>=18) {
//     console.log("you are Adult");
//   } else {
//     console.log("you are not Adult");
//   }
// }
// isAdult();

// function rollDice() {
//   let random = Math.floor(Math.random() * 6) + 1;
//   console.log(random);
// }

// rollDice();

// function printInfo(name, age) {
//   console.log(`${name}'s age is ${age}.`);
// }

// printInfo(30, "tonmoy" );

// function sum(a,b) {
//   console.log(a+b);
// }

// sum(1,2);
// sum(4,2);
// sum(9,2);
// sum(6,2);

// function calcAvg(a,b,c) {
//   let avg = (a+b+c)/3;
//   console.log(avg);
// }
// calcAvg(3,6,8);

//! Print Table with Function
// function printTable(n) {
//   for(i=n; i<=n*10; i+=n) {
//     console.log(i);
//   }
// }
// printTable(7);
// printTable(9);

//! functions of adding number gradually 1+2+3+4+5----+7+8
// function getSum(n) {
//   let sum = 0;
//   for(i=1; i<=n; i++) {
//     sum += i;
//   }
//   return sum;
// }

//concatinate of string
// let str = ["hi","hello","bye","!"];
// function concat(str) {
//   let result = "";
//   for(i=0; i<str.length; i++) {
//     result  += str[i];
//   }
//   return result;
// }

//! Scope
// function Scope
// Block Scope {this is block}
// Lexical Scope - Used of Nested function
//Global Scope

//! Function expression(functions that are store in variables)
// let sum = function(a, b) {
//   return a+b;
// }

//! Higher Order function
// function multipleGreet (func, count) {
//   for (let i = 1; i<=count; i++) {
//     func();
//   }
// }

// let greet = function() {
//   console.log("hello");
// }

// // multipleGreet(greet, 5);
// multipleGreet(function() {console.log("hellow")}, 5);

//even odd function

// let odd = function(n) {
//   console.log(!(n%2==0));
// }

// let even = function(n) {
//   console.log(n%2 == 0);
// }

//high order function(return statement)

// function oddOrEvenFactory(request) {
//   if(request == "odd") {
//     return function(n) {
//       console.log(!(n%2==0));
//     }
//   } else if (request == "even") {
//     return function(n) {
//       console.log(n%2 == 0);
//     }
//   } else {
//     console.log("wrong request");
//   }
// }

// let request = "odd";

//! those functions are define in object are called method

// const calculator = {
//   add: function(a, b) {
//     return a+b;
//   },
//   sub: function(a,b) {
//     return a-b;
//   },
//   mul: function(a,b) {
//     return a*b;
//   }
// };

//! 'this' object can be use of object element

// const student = {
//   name: "tonmoy",
//   age: 30,
//   eng: 95,
//   math: 93,
//   phy: 97,
//   getAvg() {
//     let avg = (this.eng + this.math + this.phy) / 3;
//     console.log(`${this.name} got avg marks = ${avg}`);
//   }
// }

//! try & catch (to handling an error)
//!  Most important thing this is

// try {
//   console.log(a);
// } catch {
//   console.log("print this is an error");
// }

//!Arrow function is actually a nameless function

// const sum = (a,b) => {
//   console.log(a+b);
// };

// const cube = (n) => {
//   return n * n * n;
// };

//! Arrow functions implicit return ()

// const mul = (a, b) => (
//   a * b
// );

//! set time out (specially use for api calls n request respons)
//!(it will appear)

// console.log("Hi there");
// setTimeout ( ()=> {
//   console.log("apna college");
// }, 5000);
// console.log("Welcome to");

//! set interval (is same as like set time out)
//!(it will disappear and comeback and disappear again and comeback)

// let id = setInterval (() => {
//   console.log("hi hello bye");
// }, 2000);

// console.log(id);

//!  this with arrow functions

//Arrow function                  normal function
//1. lexical scope use            1. scope - this ->calling
//parent call                          object

// const student = {
//   name: "toyota",
//   marks: 95,
//   prop: this,  //! global scope
//   getName: function() {
//     console.log(this);
//     return this.name;
//   },
//   getMarks: () => {
//     console.log(this); //! parent's scope -> window
//     return this.marks;
//   },
//   getInfo1: function() {
//     setTimeout(() => {
//       console.log(this); //! student object
//     }, 2000);
//   }, getInfo2: function() {
//     setTimeout( function() {
//       console.log(this);  //! window object
//     }, 2000);
//   }
// }

//practice qs1

// const square = n => n*n;
// console.log(square(4));

//practice qs1

// let id = setInterval (() => {
//   console.log("Hello World");
// }, 2000);

// setTimeout(() => {
//   clearInterval(id);
//   console.log("clear interval ran");
// }, 10000);

//! array method

//for each method

// let arr = [1,2,3,4,5];
// let print = function(el) {
//   console.log(el);
// }

// arr.forEach(print);
// arr.forEach(function(el) {
//   console.log(el);
// });

// arr.forEach((el) => {
//   console.log(el);
// });

// let arr = [{
//   name: "aman",
//   marks: 95,
// },
// {
//   name: "shradha",
//   marks: 94.4,
// },
// {
//   name: "rajat",
//   marks: 92,
// },
// ];

// arr.forEach((student) => {
//   console.log(student.marks);
// });

// function sum(a,b){
//   return a+b;
// }

// sum(3,9);

//! map function

// function tenSum(n) {

//   for (let i = 2; i<=n; i=i+2) {
//     console.log(i);
//   }
// }
// tenSum(20);

//! forEach

// let arr = [1,2,3,4,5];

// let print = function (el) {
//   console.log(el);
// }

// arr.forEach(print);

// arr.forEach(function (el) {
//       console.log(el);
//     });

// let students = [{
//   name: "aman",
//   marks: 95,
// },
// {
//   name: "shradha",
//   marks: 94,
// },
// {
//   name: "rajat",
//   marks: 92,
// }];

// let gpa = students.map((el) => {
//   return el.marks / 10;
// });

// console.log(gpa);

// arr.forEach((student) => {
//   console.log(student.marks);
// });

//! Map

// let num = [1,2,3,4];

// let double = num.map((el) => {
//   return el*el;
// });

// console.log(double);

//! Filter

// let nums = [1,2,3,4,5,6,9,2,5,7,10];

// let ans = nums.filter((el) => {
//   return el % 2 != 0; // even -> true, odd -> false
// });

// console.log(ans);

//! Reduce method
// Reduces the array to a single value

// let nums = [1,2,3,4];

// let finalVal = nums.reduce((res, el) => {
//   // console.log(res);
//   return res + el;
// });
// console.log(finalVal);

// let arr = [1,4,2,5,6,7,2,9,2];
// let max = -1;
// for(let i = 0; i<arr.length; i++) {
//   if(max < arr[i]) {
//     max = arr[i];
//   }
// }

// console.log(max);

// let max = arr.reduce((max, el) => {
//   if (max < el) {
//     return el;
//   } else {
//     return max;
//   }
// });

// console.log(max);

//! PQ

// let nums = [10,20,30,40];
// let ans = nums.every((el) => el%2==0);
// console.log(ans);

// let min = nums.reduce((min, el) => {
//   if (min < el) {
//     return min;
//   } else {
//     return el;
//   }
// });

// console.log(min);

// function getMin(nums) {
//   let min = nums.reduce((min, el) => {
//     if (min < el) {
//       return min;
//     } else {
//       return el;
//     }
//   });

//   return min;
// }

//! Default parameters

// function sum(a, b=3) {
//   return a + b;
// };

// sum(3);

//! Spreads array literals

// let arr = [1,2,3,4,5];
// let newArr = [...arr];
// console.log(newArr);

// let chars = [..."hello"];

// let odd = [1,3,5,7,9];
// let even = [2,4,6,8,10];

// let nums = [...odd, ...even];

//! Spreads object literals

// const data = {
//   email: "ironman@gmail.com",
//   password: "abcd",
// };

// const dataCopy = {...data, id: 123 };

// let arr = [1,2,3,4,5];
// let obj1 = {...arr};

//! Rest

function sum(...args) {
  //arguments
  for (let i = 0; i < args.length; i++) {
    console.log("you gave use");
  }
}

function min() {
  console.log(arguments);
  console.log(arguments.length);
  arguments.push(1);
}

function sum(...args) {
  return args.reduce((sum, el) => sum + el);
}

function min(msg, ...args) {
  console.log(msg);
  return args.reduce((min, el) => {
    if (min > el) {
      return el;
    } else {
      return min;
    }
  });
}

//! Destructuring
// storing values of array into multiple variables

// let names = ["tony","bruce","peter","steve","abc","xyz"];

//let winner = names[0];
//let runnerup = names[1];
//let secondRunnerUp = name[2];

// let [winner, runnerup, ...others] = names;

//! Destructuring
//for object

// const students = {
//   name: "karan",
//   age: 14,
//   class: 9,
//   subjects: ["bangla","english","math,science"]
//   username: "karan123@gmail.com",
//   password: "abcd"
// };

// let {username: user, password: secret} = students.username;
// let password = students.password;

//! count vowel from string

// function countVowels(str) {
//   let count = 0;
//   for (const char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }
//   console.log(count);
// }


// const countVowels = (str) => {
//   let count = 0;
//   for (const char of str) {
//     if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//       count++;
//     }
//   }
//   return count;
// }


let n = prompt("enter a number : ");

let arr = [];

for (let i = 1; i<=n; i++) {
  arr[i-1] = i;
}

console.log(arr);