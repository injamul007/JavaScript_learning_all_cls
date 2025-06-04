// *************************** Arrow_functions *******************************************
//? In browser , global object is window and this will refers to browsers window object.
const user = {
  username: "Boss",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username}, Welcome to website`); //? Here (this) is a current context. this refers current context. //*** context = values/topics/subject/matter
    console.log(this);
  }
};

// user.welcomeMessage()
// user.username = "BigBoss"
// user.welcomeMessage()

// console.log(this);

// function chai() { //? direct and normal functions using (this).
//   let username = "Boss"
  // console.log(this) //? you will get a lot of things like global value, micro-task, performance valuations, when you print (this) inside the functions on the node environment.
//   console.log(this.username); //** you cannot access (this) here because it is in the functions. it will work with objects only.
// }
// chai()


// const chai = function () { //? this function is stored on a variables and using it with (this).
//   let username = "boss"
//   console.log(this.username)
// }
// chai()


// const chai = () => { //? this is a arrow functions and it is also using with (this).
//   let username = "BigBoss"
//   console.log(this)
// }

// chai()


// const addTwo = (num1, num2) => { //? Basic arrow function
//   return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2 //? This is also Arrow functions called implicit return.

// const addTwo = (num1, num2) => (num1 + num2) //? if you wrap the value with paren-thesis then you will not have to add return statement. but if you add curly-braces{} then you must have to give return statement. *** this is most important when you will work on react js ..

// console.log(addTwo(3,4));

//? in implicit return arrow functions you don't have to add the return keyword/statement but explicit return arrow function you have to add return statement must.

const addTwo = (num1, num2) => ({username: "boss"}) //? just only curly-braces you won't get the access to return an object value, you must have to add the paren-thesis before the curly-braces to return the object value.

console.log(addTwo(3,4));

