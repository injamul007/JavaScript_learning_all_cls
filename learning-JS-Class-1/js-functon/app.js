// function sayMyName() {
//   for(let i=1; i<=50; i++) {
//     console.log(i);
//     console.log("tonmoy");
//   }
// }
// sayMyName();

// function getAverage(num1, num2) {
//   let avg = (num1 + num2)/2;
//   // console.log("Average: ", avg);
//   return avg;
// }

// let ans = getAverage(5,7);
// console.log("Average: ", ans);

// function getMyName(firstName, lastName) {
//   let fullName = firstName + " " + lastName;
//   return fullName;
// }

// let fullName = getMyName("Injamul", "Hoque");
// console.log(fullName);

// let getSquare = function(num) {
//   let ans = num**2;
//   return ans;
// }

// let ans = getSquare(5);
// console.log(ans);

// let getExp = (x , y) => {
//   let ans = x**y;
//   return ans;
// }

// let ans = getExp(2,10);
// console.log(ans);


// const object1 = new Human();
// class Human {

// }

//! Object of a function // used functions as a property of object
// let obj = {
//   age: 25,
//   wt: 55,
//   ht: 170,
//   greet: ()=> {
//     console.log("Hello All");
//   }
// };

// console.log(obj.age);
// obj.greet();


//! Arrays of functions /// functions are stored in DS .
// const arr = [
//   function(a,b) {
//     return a+b;
//   },
//   function(a,b) {
//     return a-b;
//   },
//   function(a,b) {
//     return a*b;
//   }
// ];

// let first = arr[2];
// let ans = first(5,10);
// console.log(ans);



//! Function returning functions // used as a return value

// function solve (number) {
//   return function(number) {
//     return number*number;
//   }
// }

// let ans = solve(5);

// let finalAns = ans(10);
// console.log(finalAns);

//! Function into a functions // used as a argument

// function greetMe(greet, fullName) {
//   console.log("Hello ", fullName);
//   greet();
// }

// function greet() {
//   console.log("Greetings for the day")
// }

// greetMe(greet, "Love");

// greet();