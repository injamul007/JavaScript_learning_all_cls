//******************************* truthy & falsy ******************************************

// const userEmail = "Boss@gmail" //? this is truthy value.
// const userEmail2 = "" //? empty string gives you falsy value.
const userEmail3  = [] //? but empty array will not give you falsy value// it will give truthy value

// if (userEmail) {
  // console.log("got user email");
// } else {
  // console.log("don't have the email");
// }

//*** Falsy values

//? false, 0, -0, Bigint 0n, "" , null, undefined, NaN     // these all are falsy values.

//? Rest of the others value will be call or count as truthy values.

//*** Truthy values

//? "0", "false", " ", [], {}, function(){}

// if (userEmail3.length === 0) {
//   console.log("Array is empty");
// }

const emptyObj = {}

  // if (Object.keys(emptyObj).length === 0) {  //? this is how you define any object.length is for to check object is empty or not using if else.
  //   console.log("object is empty");
  // }

//*** Nullish Coalescing Operator(NCO) (??) -> Null, -> Undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);

//***   Ternary Operator(TO) -> to write if else shorter way 

//? condition ? true : false

// const iceTeaPrice = 100

// iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")

const age = 22

age <= 18 ? console.log("you can vote") : console.log("you cannot vote")

