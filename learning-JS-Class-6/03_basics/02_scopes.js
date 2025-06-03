//************************************ Scopes **************************************** */
//? Variables that are in Block scopes will not be access from the outside. {} <- This is Block
//? But the outside of block scopes/global scopes can be access from the inside of the block scopes.
//? Highly recommend to not use var variables.
//? Global scopes are in browsers console are different and in vs code terminals node is another types of different . they both are not same.
//? in one word , child function can access parent functions element. but parent functions cannot access child functions element.

var c = 300
let a = 300

if (true) {
  let a = 10 //? let variables is block scopes.
  const b = 20 //? const variables is also block scopes.
  var c = 30 //? this is only a global type variables. which is not good to use.
  // console.log("Inner : ", a)
}

// console.log("Outer : ", a)
// console.log(b)
// console.log(c)

function one () {
  const username = "Boss" //? this variable can be access in the inside of this nested functions. because of its global variable of his nested functions.

  function two () {
    const website = "youtube" //? this variable cannot access from the outer functions/parent functions.
    // console.log(username)
    // console.log(website) //? this will execute from here because its in the block of this
  }
  // console.log(website) //? But this will not execute from here because of its outer from the nested functions.
  
  two()

}

one()


if (true) {
  const username = "Boss2"
  if (username === "Boss2") {
    const website = " youtube"
    // console.log(username + website)
  }
  // console.log(website) //? this is the first error because of inner if(it is in the outside of child if)
}
// console.log(username) //? This is the second error because of main if(it is in the outside of main if)


//**+++++++++++++++++++++++++++++++++++ interesting ++++++++++++++++++++++++++++++++++++++++

console.log(addOne(5)) //? addOne will execute because of its not hoisting.

function addOne (num) {
  return num + 1
}

addTwo(5) //? won't work at all.

const addTwo = function (num) { //? this will not run because of it is a hoisting. it is hold on a variable.
  return num + 2
}

