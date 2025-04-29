// Logical Operator with conditional statement
// AND(&&), OR(||), NOT(!)

// let fruit = "apple";
// if ((fruit[0]==="a") && (fruit.length > 3)) {
//   console.log("it's a good string");
// } else {
//   console.log("not a good string");
// }

// let num = 12;

// if ((num % 3 === 0) && ((num + 1 == 15) || (num - 1 == 11))) {
//   console.log("safe");
// } else {
//   console.log("unsafe");
// }


// if (true) {
//   console.log("it has true value");
// } else {
//   console.log("it has false value");
// }

// Switch statement 

// let color = "green";

// switch(color) {
//   case "red" :
//     console.log("stop");
//     break;
//   case "green" :
//     console.log("GO");
//       break;
//   case "yellow" :
//     console.log("slow down");
//     break;
//   default :
//     console.log("Broken light");
// }

//! PQ

// let day = 1;

// switch(day) {
//   case 1 :
//     console.log("sunday");
//     break;
//   case 2 :
//     console.log("monday");
//     break;
//   case 3 :
//     console.log("tuesday");
//     break;
//   case 4 :
//     console.log("wednesday");
//     break;
//   case 5 :
//     console.log("thursday");
//     break;
//   case 6 :
//     console.log("friday");
//     break;
//   case 7 :
//     console.log("saturday")  ;
//     break;
//   default :
//     console.log("No other day available on the week");   
// }


//Alert & Prompt----

// alert("this is an alert");
// console.log("this is a simple log");
// console.error("this is an error msg");
// console.warn("this is a warning msg");

// let firstName = prompt("Enter first Name ");
// let lastName = prompt("Enter last Name ");
// console.log("Welcome",firstName,lastName,"!");
// let msg = "Welcome " + firstName+" "+lastName +" !";
// alert(msg); 

//String Method
// Trim method
// toUppercase Method
// toLowercase Method

// let msg = "    Hello   ";

// msg.trim();
// console.log(msg);

// let msg = "Hello    ";
// let str = msg.trim();

// let str = "random string";

// str.toLowerCase();

// let msg = "     hello    ";
// let newMsg = msg.trim();
// console.log("After trim : ", newMsg);
// newMsg = newMsg.toUpperCase();
// console.log("After Uppercase : ", newMsg);

// let newMsg = msg.trim().toUpperCase();
// console.log(newMsg);

// let msg = "hello";
// console.log(msg.slice(0, 4));

// let msg2 = "apnacollege";
// console.log(msg2.slice(-3));

// let msg = "iLoveCoding";
// let newMsg = msg.replace("love", "Do");
// console.log(newMsg);
//! PQ1
let msg = "help!";
console.log(msg.trim().toUpperCase());