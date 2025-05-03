//Loop
// used to iterate a piece of code
// for loop example 
// for (initialization; condition; update-sion;) {
            //do something
// }

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// print odd numbers
// for(let i = 15; i >= 1; i = i - 2) {
//   console.log(i);
// }


// print even numbers

// for(let i = 2; i <= 1000; i = i + 2) {
//   console.log(i);
// }

//!infinite loop 

//! for(let i = 1; i>=0; i++) {
// }

//! for (let i = 1; i<=5; i--) {
// }

//! for (let i = 1; ; i++) {
// }


//Multiplication Table
// for (let i = 5; i<=50; i = i + 5) {
//   console.log(i);
// }


//Multiplication Table by user take
// let n = prompt("Write your number");
// n = parseInt(n);

// for(let i=n; i<=n*10; i = i+n) {
//   console.log(i);
// }

// Nested Loop
// for (let i=1; i<=3; i++) {
//   console.log(`outer loop ${i}`);
//   for (let j=1; j<=3; j++) {
//     console.log(j);
//   }
// }


// While Loop
// let i = 1;
// while (i<=5) {
//   console.log(i);
//   i++;
// }

// guessing favorite movie game

// const favMovie = "endgame";
// let guess = prompt("Guess My Favorite Movie");

// while (guess != favMovie){
//   if ( guess == "quit") {
//     console.log("You quit the game");
//     break;
//   }
//   guess = prompt("Wrong !! Please Try Again");
// }

// if(guess == favMovie) {
//   console.log("Congratulation! Your Answer is Correct");
// }

// const favmovie2 = "avatar";
// let guess = prompt("Guess my Favorite Movie");

// while ((guess != favmovie2) && (guess != "quit)")) {
//   guess = prompt("Wrong ! Please try again");
// }

// if ( guess == favmovie2) {
//   console.log("Congratulation ! You have Guess Correct");
// } else {
//   console.log("You quit the game");
// }

//Break Keywords 

// let i = 1;
// while (i<=5) {
//   if(i == 3) {
//     break;
//   }
//   console.log(i);
//   i++;
// }
// console.log("we used break at 3");


//Loop with Arrays

// let fruits = ["mango","apple","banana","litchi","orange"];
// for (let i=0; i<fruits.length; i++) {
//   console.log(i, fruits[i]);
// }

// let fruits = ["mango","apple","banana","litchi","orange"];
// for (let i = fruits.length-1; i>=0; i--) {
//   console.log(i, fruits[i]);
// }

//! Nested Arrays with nested loop

// let heroes = [["ironman","spiderman","thor"],["superman","batman","flash"]];

// for(let i = 0; i<heroes.length; i++) {
//   console.log(i, heroes[i], heroes[i].length);
//   for(let j = 0; j<heroes[i].length; j++) {
//     console.log(`j=${j}, ${heroes[i][j]}`);
//   }
// }

// let student  = [["karim", 95], ["rahim", 90],["mahim", 92]];
// for (let i = 0; i<student.length; i++) {
//   console.log(`info of student #${i+1}`);
//   for(let j = 0; j<student[i].length; j++) {
//     console.log(student[i][j]);
//   }
// }

// for of loop

// let fruits = ["mango", "apple", "banana", "orange", "litchi"];

// for(fruit of fruits) {
//   console.log(fruit);
// }

// for(char of "apnacollege") {
//   console.log(char);
// }

//Nested for of loop

// let heroes = [["ironman","spiderman","thor"],["superman","batman","flash"]];

// for (list of heroes) {
//     console.log(list);
//   for(hero of list) {
//     console.log(hero);
//   }
// }