//************************ for Loop **********************************

for (let i = 0; i<= 10; i++) {
  const element = i;
  if (element == 5) {
    // console.log("5 is best number");
  }
  // console.log(element);
}

for (let i = 1; i <= 10; i++) {
  // console.log(`Outer loop value: ${i}`);
  for (let j = 1; j <= 10; j++) {
    // console.log(`inner loop value: ${j} and inner loop ${i}`)
    // console.log(`${i} * ${j} = ${i*j}`); //? This method is for making tables.
  }
}


let myArray = ["flash","batman","superman"]
// console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  // console.log(element);
}

//? Break and Continue keyword -> for break means stop and continue means keep going.

for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    // console.log("Detected 5");
    break; //? break is for to stop the loop when index is reached 5
  }
  // console.log(`Value of index is ${index}`);
}


for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    console.log("Detected 5");
    continue; //? Continue is for do not print or execution only this value and then continue the rest of the others value.
  }
  console.log(`Value of index is ${index}`);
}

