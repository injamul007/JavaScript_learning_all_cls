// Array

// let arr = [1,2,3,4,5];

// array constructor
// let brr = new Array('love',1,true);
// console.log(brr[2]);
// brr.push('iron');
// console.log(brr);
// brr.pop();
// console.log(brr);
// brr.shift();
// console.log(brr);
// brr.unshift('love');
// brr.push(20);
// brr.push(40);
// brr.push(70);
// console.log(brr.slice(2,4));
// console.log(brr);
// brr.splice(1,0,'hate');
// console.log(brr);

// let arr = [10,20,30];
// let ansArray = arr.map((number,index) => {
  //   return number*number;
  //   console.log(number+1);
  //   console.log(index);
  // })
  
  // console.log(ansArray);
  
  //! Filter Arrays------>

  // let arr = [10,20,30,11,21,44,51];

  // let ansArray = arr.filter((number) => {
  //   return number%2===0;
    // if (number % 2 === 0) {
    //   return false;
    // } else {
    //   return true;
    // }
  // })

  // console.log(ansArray);

  // let arr = [1,2,'love','hate',null];

  // let ansArray = arr.filter((value) => {
  //   if (typeof(value) === "string") {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // })

  // console.log(ansArray);

  // let arr = [10,20,30,40];

  // let ansArray = arr.reduce((acc,curr) => {
  //   return acc + curr;
  // }, 0)

  // console.log(ansArray);

  // let arr = [9,1,7,4,2,8];
  // arr.sort();
  // how to do sort in descending order ?
  // arr.sort((a,b)=> b-a); //this is descending sort method.
  // console.log(arr);

  // console.log(arr.indexOf(4));

  // let arr = [10,20,30];

  // let length = arr.length;
  // console.log("length: ", length);

  // traditional for loop
    // for (let index = 0; index < length; index++) {
    //   console.log(arr[index]);
    // }

  // arr.forEach((value, index) => {
  //   console.log("Number ", value, "Index ", index);
  // })

  // let obj = {
  //   name: "love",
  //   age: 30,
  //   weight: 55,
  //   height: "5ft 6in",
  //   greet: function(){
  //     console.log("Hello ! how are you all");
  //   }
  // };

  // for (let key in obj) {
  //   console.log(key, " ", obj[key]);
  // };

  // let arr = [10,20,30,40];

  // for (let value of arr) {
  //   console.log(value);
  // }

  // let fullName = "love";

  // for (let val of fullName) {
  //   console.log(val);
  // }

  // let arr = [10,20,30,40,50];

  // let getSum = (arr) => {
    // let length = arr.length;
    // let sum = 0;
    // for (let index = 0; index<length; index++) {
    //   sum = sum + arr[index];
    // }
    // return sum;

  //   let sum = 0;
  //   arr.forEach((value) => {
  //     sum = sum + value;
  //   });
  //   return sum;
  // }

  // let totalSum = getSum(arr);
  // console.log(totalSum);



  