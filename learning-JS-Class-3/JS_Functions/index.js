// JS Function---
// function square () {
//   var num = 5;
//   var result = num * num;
//   document.write("Result = " + result + "<br/>");
// }
// square();

// function addition(x, y) {
//   var result = x + y;
//   document.write("sum = " + result);
// }
// addition(10, 20);

// IIFEs (Immediately Invokeable Function Expressions)--

// (function display() {
  // console.log("Hello World");
//   document.write("Hello World");
// })();

//Function Expressions

var display2 = function displaymsg (msg) {
  console.log(msg)
};
display2("i am message");