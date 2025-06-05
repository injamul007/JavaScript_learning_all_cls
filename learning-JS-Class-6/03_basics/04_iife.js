//? Immediately Invoked Function Expressions (IIFE)

(function chai() { //? normal functions with Named IIFE.
  console.log(`DB CONNECTED`);
})(); //? IIFE method used here -> wrap the full functions with paren-thesis and after immediately call the IIFE functions with another pairs of paren-thesis.

// ()() //? most important note here is, first pair of paren-thesis is for where you write definition of function and the second pair of paren-thesis is for when you call or execution the function.

//*** Why to use IIFE ->sometimes you will face global scopes pollution problems, that's why to remove or aside global scope variables or declarations problem we write IIFE functions.

//*** We use IIFE (Immediately Invoked Function Expressions) to avoid global scope pollution. It helps isolate variables and declarations, preventing conflicts in the global scope.

((name) => { //? arrow functions with Unnamed IIFE.
  console.log(`DB CONNECTED TWO ${name}`)
})("Boss"); //? You must use a semicolon at the end to indicate that it is the end of the statement or to signal a stop.
//? if you want to write two IIFE functions together then you must have to use semicolon after the end of the first IIFE functions.


