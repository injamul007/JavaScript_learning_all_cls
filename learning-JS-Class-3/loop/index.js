 //->Starting; Condition; Updating----------
  for (let x = 10; x >= 1; x = x - 1) {
  // document.write("<h1> Bangladesh </h1>");
  // document.write("" + x);
}

// for (var i = 1; i<=100; i = i +1) {
//   document.write("" + i);
// }


//While Loop ---
//1 + 2 + 3 + ....... + 10
var i = 1;
var sum = 0;

while (i <= 100) {
  if (i%3==0 && i%5==0) {
    sum = sum + i;
  }
  // document.write("" + i);
  i = i + 1;
}
document.write(sum);