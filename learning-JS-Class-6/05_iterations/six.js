//********************* filer ***************************

// const coding = ["js","ruby","java","python","cpp"]

// const values = coding.forEach ((item) => { 
  // console.log(item);
//   return item   //? for each loop will not return any values.
// })

// console.log(values);

const myNum = [1,2,3,4,5,6,7,8,9,10]

// const newNum = myNum.filter((num) => num > 4 )  //? if the value will satisfy the condition and it must be true then the filer will return the value.
// console.log(newNum);


// const newNum = myNum.filter((num) => { 
//   return num > 4   //? You must include a return statement to execute the return value when using curly braces to the filer (one word if you use scopes then return statement must.)
// });

// console.log(newNum);

// const newNum = []

// myNum.forEach((num) => {
//   if (num > 4) {
//     newNum.push(num)
//   } 
// })

// console.log(newNum)


const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
  { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
  { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
  { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
  { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

let userBooks = books.filter((bk) => bk.genre === "History")

userBooks = books.filter((bk) => {
  return bk.publish >= 1995 && bk.genre === "History"
})

console.log(userBooks);


