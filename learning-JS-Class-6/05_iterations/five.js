//***************************************************************************

const coding = ["js","ruby","java","python","cpp"]

// coding.forEach(function (val) { //? using for each loop for accessing the arrays value.
//   console.log(val);
// });

// coding.forEach((val) => { //? arrow functions with for each loop to access the array.
//   console.log(val);
// });


// function printMe (item) { //? making a function and give the callback to for each loop to access the array.
//   console.log(item);
// }

// coding.forEach(printMe)


// coding.forEach((item, index, array) => { //? for each loop you can access these 3 things.
//   console.log(item, index, array);
// })


const myCoding = [
  {
    languageName: "JavaScript",
    languageFileName: "js"
  },
  {
    languageName: "Java",
    languageFileName: "java"
  },
  {
    languageName: "python",
    languageFileName: "py"
  }
]

myCoding.forEach((item) => {
  console.log(item);
})