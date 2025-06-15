//************************** for of ****************************************
// ["","",""] //? arrays with lot of string value.
// [{},{},{}] //? arrays with lot of object value.

// const arr = [1,2,3,4,5]

// for (const num of arr) {
//   console.log(num);
// }

const greetings = "Hello world"

for (const letter of greetings) {
  if (letter == " ") {
    // console.log("Didn't count space");
    continue;
  }
  // console.log(`Each char is ${letter}`);
}


const map = new Map() //? map is known for unique value 
map.set('Ban', "Bangladesh")
map.set('USA', "United States of America")
map.set('Fr', "France")

console.log(map);

for (const [key, value] of map) { //? destructure of an array... map is iterable of for of loop.
  console.log(key, ":-" , value);
}

const myObject = {
  'game1': "MOST WANTED",
  'game2': "EA FC 25",
  'game3': "GTA5"
}

for (const [key, value] of myObject) {  //? this object is not iterable of for of loop.
  // console.log(key, ":-", value);
}