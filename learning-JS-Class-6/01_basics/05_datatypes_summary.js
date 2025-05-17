// Primitive 

//? 7 types: String, Number, Boolean, null, undefined, Symbol.

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;


const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// Reference Type (Non Primitive)

// Array, Objects, Functions

const heroes = ["Iron-man","Ant-man","Hulk","Thor"];

let myObj = {
  name: "Boss",
  age: 30
}

const myFunction = function() {
  console.log("Hello World");
}

//? typeof data Types value
// Undefined -> "undefined"
// Null -> "object"
// Boolean -> "boolean"
// Number -> "number"
// String -> "string"
// Array -> "Object"
// Function-> "function Object"



// *********************************************************************

//? Memory in JavaScript ----

// Stack (Primitive)---*** primitive data types are mainly stored to Stack Memory //*** it used to make it a copy of your variables or value
//  Heap(Non-Primitive)---*** Non-Primitive data types are stored to Heap Memory //*** it used to make it a preference or original value of your variables or any value.


//?this is Primitive Data Type with stack memory // Get a Copied value
// let myYouTubeName = "BackbencherProgrammer"
// let anotherName = myYouTubeName
// anotherName = "Programming with Backbencher"

// console.log(myYouTubeName)
// console.log(anotherName)

//? This is Non-Primitive Data Type with Heap Memory // Get an Original Value
let userOne = {
  Email : "bossBD@google",
  upi : "user@123"
}

let userTwo = userOne

userTwo.Email = "bdBoss@google"

console.log(userOne.Email)
console.log(userTwo.Email)

