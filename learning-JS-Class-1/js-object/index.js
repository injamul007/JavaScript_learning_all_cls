// let obj = {
//   name: "love",
//   age: 30,
//   weight: 55,
//   height: "5ft 6in",
//   greet: function(){
//     console.log("Hello ! how are you all");
//   }
// };

// console.log(obj);
// obj.greet();


//! Object are dynamic in nature;
//! it can change in runtime 

let src = {
  age:12,
  wt:60,
  ht:170
};


let dest = {};

//! method 3 - cloning using iteration
for (let key in src) {
  let newKEY = key;
  let newValue = src[key];
  // insert newKey and value in dest and create a clone
  dest[newKEY] = newValue;
}

// let src2 = {
//   value: 101,
//   name: "love"
// }

// let dest = Object.assign({}, src, src2); //! cloning method number 2

// src.age = 90;

// console.log("src : ", src);
// console.log("dest : ", dest);

// let dest = {...src}; //! cloning method number 1
// let dest = src;

// console.log("src : ", src);
// console.log("dest : ", dest);

// src.color = "Red";

// src.age = 90;

// console.log("src : ", src);
// console.log("dest : ", dest);

// dest.color = "blue";

// console.log("src : ", src);
// console.log("dest : ", dest);

// console.log(obj);

// obj.color = "Blue"; // Create new obj in running time

// console.log(obj);




