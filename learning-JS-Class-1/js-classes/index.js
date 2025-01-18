// //! JS - Classes 

// class Human {
//   //property
//   age = 30; // public mark
//   #weight = 60; // private mark
//   height = 170;

//   // Behavior
//   walking() {
//     console.log("I am walking", this.#weight);
//   }
  
//   running() {
//     console.log("I am running");
//   }

//   get fetchWeight() {  // getter functions to use private class
//     return this.#weight;
//   }

//   set modifyWeight(val) { // setter functions to use for same
//     this.#weight = val;
//   }
// }

// let obj = new Human();
// console.log(obj.age);

// obj.walking();


//! Default Parameters

// function sayName(fName = "Legend", lName = fName.toUpperCase()) {
//   console.log("My name is :", fName, lName);
// }

// sayName();

// function solve(value = "love") {
//   console.log("Hello Ji", value);
// }

// solve(undefined);



function getAge() {
  return 200;
}

function Utility(name="love", age=getAge()) {
  console.log(name, " ", age);
}

Utility();