//******************************* IF *******************************************

const isUserLoggedIn = true
const temperature = 41

// if (temperature === 41) {
//   console.log("less than 50");
// }else {
//   console.log("temperature is greater than 50");
// }
// console.log( "execute");

// const score = 200

// if (score > 100) {
//   const power = "fly"
//   console.log(`user power ${power}`);
// }

// console.log(`user power ${power}`);


const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2"); //? this is such a bad way to write codes, this is just ignorable.

if (balance < 500) {
  console.log("less than 500");
} else if (balance < 750) {
  console.log("less than 750");
} else if (balance < 900) {
  console.log("less than 900");
} else {
  console.log("less than 1200"); //? this will execute because of 1000 is less than or smaller than 1200.
}

const userLoggedIn = true
const debitCard = true
const userLoggedInFromGoogle = false
const userLoggedInFromEmail = true


if (userLoggedIn && debitCard) {
  console.log("Allow to buy course");
}

if (userLoggedInFromGoogle || userLoggedInFromEmail) {
  console.log("User Logged in")
}