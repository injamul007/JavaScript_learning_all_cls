// Guessing Game

// const max = prompt("Enter the max number");

// const random = Math.floor(Math.random() * max) + 1;

// let guess = prompt("Guess your number");

// while(true) {
//   if (guess == "quit") {
//     console.log("user quit");
//     break;
//   }

//   if (guess == random) {
//     console.log("you are right ! Congrats ! random number was", random);
//     break;
//   } else if (guess < random) {
//     guess = prompt("Hint: Your guess is too small ! Please try again ! ");
//   } else {
//     guess = prompt("Hint: Your guess is too large ! Please try again ! ");
//   }
// }


// Guessing game-- this part is commented;

// const max = prompt("Enter the max number");
// const random = Math.floor(Math.random() * max) + 1;
// let guess = prompt("guess your number");

// while(true) {
// if (guess == "quit") {
//   console.log("user quit game");
//   break;
// };

// if(guess == random) {
//   console.log("you are right, congratulations! the random number was", random);
//   break; 
// } else if (guess < random) {
//   guess = prompt("Hint: your guess is too small ! please try again");
//   } else {
//     guess = prompt("Hint: your guess is too large ! please try again");
//   };

// };


const max = prompt("Enter your max number"); 
const random = Math.floor(Math.random() * max)+1;
let guess = prompt("Guess your number");

while(true) {
if (guess == "quit") {
    console.log("User quit");
    break;
  } 

if (guess == random) {
    console.log("your guess is correct! The random number was", random);
    break;

  } else if (guess > random) {
      guess = prompt("Your guess is too large! try again");

    } else {
      guess = prompt("Your guess is too small! try again");
      }

}