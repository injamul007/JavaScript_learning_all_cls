//************************* Objects for loop uses *************************************
//? this for in loop is works for object.

const myObject = {
  JS: "JavaScript",
  CPP: "C++",
  RB: "Ruby",
  Swift: "Swift by Apple"
}

for (const key in myObject) {
  // console.log(`${key} shortcut is for ${myObject[key]}`);
}


const programming = ["js","rb","py","java","cpp"]

for (const key in programming) { //? you will get the key first and for value you have to give the full access of the array
  // console.log(`your key is ${key} and the value is ${programming[key]}`);
}


// const map = new Map() //? map is known for unique value
// map.set('Ban', "Bangladesh")
// map.set('USA', "United States of America")
// map.set('Fr', "France")

// console.log(map);

// for (const key in map) {
//   console.log(map[key]);
// }

