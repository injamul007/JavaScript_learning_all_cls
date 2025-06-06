// *************************** JavaScript Execution Context(EC) ******************************

//** Global EC

//? Global EC --> Wherever Global EC is created , it always refer to (this) variables. this (this) variables can hold the global EC.

//? browsers global EC is different and the NodeJs environments global EC is different from each others. they are not same.

//? Browsers global EC // (this) value is names Window. and Browsers global EC is more important.

//? JS is single Threaded.

// ** Functional EC

//? Eval Execution Context --> not that important in JS, because its important for other framework.it is actually a property of global EC.

//? How to execute these JS code. let's have a look.

// ** it is run in two phases.
// ** one is Memory Creation Phase. -> variables memory/storage allocate here but not execute here.
// ** second is Execution Phase. --> 

let val1 = 10
let val2 = 5

function addNum(num1, num2) {
  let total = num1 + num2
  return total
}

let result1 = addNum(val1, val2)
let result2 = addNum(10,2)

// ** global execution(this)->allocate // this will happen surely.
//** Memory Creation Phase -> collect and get together and just keep it here.
//? val1 will be kept in memory creation phase and the value of val1 is "undefined".
//? val2 will be kept as well in memory creation phase and the value of val2 is also "undefined".
//? addNum will be kept in memory Creation phase and the value of addNum is "definition".
//? result1 will be kept in memory creation phase and the value of result1 is "undefined"
//? result2 will be kept as well in memory creation phase and the value of result2 is also "undefined"

//** Execution Phase
//? val1 will be executed on execution phase and the value of val1 is "10"
//? val2 will be executed on execution phase and the value of val2 is also "5"
//? The addNum will not executed because it has no executing value . but this addNum's definition is on the memory creation phase.
//? when is comes on the result1 then the addNum will get a new Environment and new phase like --> new variables + new execution thread. How many times the functions will execute that many times will the new phase or new box will execute,like new variables and new execution phase

