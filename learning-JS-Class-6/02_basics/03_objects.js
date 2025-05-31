//? Objects
//*** you can declare objects in 2 ways. number 1 = Literal , number 2 = Constructor
//? Singleton Object --> // if it declare with literals then singleton is never happen/build. --> if it declare with constructor then always happens/ build singleton.
//? Object.create //*** it is a constructor method and singleton is made of it.


//? Object literals
const mySym = Symbol("key1") //? Created a symbol for example and to put this on an object.

const jsUser = {
  name: "Boss", //? By default, the JS compiler treats the key as a string but does not display it.
  "full Name": "BossBdBOSS",
  [mySym]: "myKey1", //? This is how to declare a symbol in an Object with SquareBracket[] *** most important
  age: 18,
  location: "Dhaka",
  Email: "Boss@gmail",
  isLoggedIn: false,
  lastLoginDays: ["monday", "saturday"]
};

// console.log(jsUser.Email);
// console.log(jsUser["Email"]);
// console.log(jsUser["full Name"]);
// console.log(jsUser[mySym]);

jsUser.Email = "BossBD@BossHuge"
// Object.freeze(jsUser) //? This will freeze your Object so that you cannot make any changes.
jsUser.Email = "BossBD@BossIsNotHuge"
// console.log(jsUser);


jsUser.greeting = function() {
  console.log("Hello JS user");
}
jsUser.greetingTwo = function() {
  console.log(`Hello JS user two, ${this.name}`); //? to access the main value of the object you have made.
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

