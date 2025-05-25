//? Array

const myArr = [0,1,2,3,4,5]

// console.log(myArr[0]);

const myArr2 = new Array(1,2,3,4)

const myHeroes = ["iron-man", "thor", "hulk", "captain"]

//? Array method 

// myArr.push(6); //? this will add value to the last.
// myArr.push(7); 


// myArr.pop(7); //? this will remove value from the last. 

myArr.unshift(9); //? this will add value to first.
myArr.shift(); //? this will remove value from first.


// console.log(myArr.includes(9)); //? ask ques to the array that the value is exist or not !

// console.log(myArr.indexOf(2)); //? this will show the value of indices that what value is on the array and which position.

const newArr = myArr.join() //? Bind array and also convert it to string.

// console.log(typeof myArr);
// console.log(typeof newArr);

//? slice ,  splice 

// console.log("A :", myArr );

const myn1 = myArr.slice(1, 3) //? this is not manipulate the original arrays.

// console.log(myn1);
// console.log("B :", myArr);

const myn2 = myArr.splice(1, 3) //? this manipulate the original arrays.
// console.log("C :", myArr);
// console.log(myn2)

