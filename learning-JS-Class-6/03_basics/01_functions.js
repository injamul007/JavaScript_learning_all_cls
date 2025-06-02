//? *********************** Functions ***************************************

function sayMyName() {
  console.log("B")
  console.log("O")
  console.log("S")
  console.log("S")
}

// sayMyName() //? for call a function by functions name you must add paren-thesis after the callback name


// function addTwoNumbers(number1, number2) { //? these paren-thesis are called parameters.
//   console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2) { //? these paren-thesis are called parameters.
  // let result = number1 + number2
  // return result

  return number1 + number2
  // console.log("Hi_Boss"); //? This won't run because of the return statement. No code will run after the return statement.
}

const result = addTwoNumbers(10,20); //? and these paren-thesis are called argument.

// console.log("Result : ", result);

function loginUserMessage(username = "Boss") {
  // if(!username) { //? This exclamation Sign means username is not defined, this is more shortest way
  //   console.log("Please Enter a Username");
  //   return
  // }
  return `${username} just logged in`
}

// console.log(loginUserMessage());

function calculateCartPrice(...num1) {  //? The three dots (...) are defined as rest operators in functions for adding multiple values as parameters.
  return num1
}

function calculateCartPrice(val1, val2, ...num1) { //? val1 and val2 will take the first two parameters, and the rest of the parameters will be captured using the rest operator.
  return num1
}

// console.log(calculateCartPrice(200,400,3000,5000));

const User = {
  username: "Boss",
  price: 999
}

function handleObject(anyObject) { //? passes the object as functions parameters.
  console.log(`User is ${anyObject.username} and price is ${anyObject.price}`)
}

// handleObject(User)
// handleObject({ //? this is how you passes the object value in direct functions arguments.
//   username: "BOSsIsAlwaysRight",
//   price: 444
// })


const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray) { //? passes the Array as functions parameters.
  return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,100,600])); //? this is how you passes the array value in direct functions arguments.

