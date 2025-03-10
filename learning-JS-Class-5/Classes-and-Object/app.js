//! Prototypes in js---
// A javaScript object is an entity having state and behavior(properties and method)
// JS objects have a special property called prototype.\- reference to an object !
// We can set prototype using__proto__
//? if object & prototype have same method, then objects method will be used.


const employee = {
  calcTax() {
    console.log("Tax rate is 10%");
  },
};

const karanArjun = {
  salary: 50000,
  calcTax() {
    console.log("Tax rate is 20%"); //? this object will be used as main method.
  }
};

// const karanArjun2 = {
//   salary: 50000,
// };

// const karanArjun3 = {
//   salary: 50000,
// };

// const karanArjun4 = {
//   salary: 50000,
// };

karanArjun.__proto__ = employee;
// karanArjun2.__proto__ = employee;
// karanArjun3.__proto__ = employee;
// karanArjun4.__proto__ = employee;


//! Classes in JS --
// Class is a program-code template for creating objects.
//Those objects will have some state(variables)& some behavior(functions) inside it.
// syntax of converting an class to an object-  //! let myObj = new myClass();


//! constructor() method in js --
// automatically invoked by new
// initialized object -- general purpose of constructor

class toyotaCar {
    constructor(brand, mileage) {
      console.log("creating new object");
      this.brand = brand;
      this.mileage = mileage;
    }
  start() {
    console.log("start");
  }

  stop() {
    console.log("stop");
  }
} 


// let prado = new toyotaCar("prado", 15); // constructor created
// prado.setBrand("prado");
// console.log(prado);
// let lexus = new toyotaCar("lexus", 20); // constructor created
// lexus.setBrand("lexus");
// console.log(lexus);


//! Inheritance in JS
// inheritance is passing down properties & methods from parent class to child class
// to use inheritance we use keyword called "extends".

//! if child & parent have same method, child's method will be used.[Method Overriding].

//! The "super" keyword is used to call the constructor of its parent class to access the parent's properties and methods.
//! "super" is really important for to access parent class element to child class

//? super(args) // calls parent's constructor
//? super.parentMethod(args)
//? Child class is 'derived' here


// class Parent {
//   hello() {
//     console.log("Hello");
//   }
// }


// class Child extends Parent {}

// let obj = new Child();


class Person  {
    constructor(name) {
      this.species = "Home sapiens";
      this.name = name;
    }
  eat() {
    console.log("eat");
  }

  // sleep() {
  //   console.log("sleep");
  // }

  // work() {
  //   console.log("do nothing");
  // }
}

class Engineer extends Person {
  constructor(name,branch) {
    super(name);    // ? to invoke parent class constructor
    this.branch = branch;
  }
  work() {
    super.eat();
    console.log("solve problems, build something");
  }
}

// class Doctor extends Person {
//   work() {
//     console.log("treat patients");
//   }
// }

let tonObj = new Engineer("Injamul hoque tonmoy", "Chemical eng");


//! Practice Question 1

const Data = "Secret information";

class User {
  constructor(name,email) {
    this.name = name;
    this.email = email;
  }

  viewData() {
    console.log("Data = ", Data);
  }
}

class Admin extends User {
  constructor(name,email) {
    super(name,email);
  }

  editData() {
    Data = "Some new data";
  }
}

let AdminObj = new Admin("tonmoy", "abcd@gmail.com");
let student2 = new User("Mishkat", "abdcd@gmail.com");


//! Error Handling in JS
//? Try and Catch

let a = 5;
let b = 10;

console.log("a = ", a);
console.log("b = ", b);
console.log("a+b = ", a+b);
console.log("a+b = ", a+b);
try {   //? to find out the error
  console.log("a+b = ", a+c);
} catch(err) { //? to catch the error
  console.log(err);
}
console.log("a+b = ", a+b);
console.log("a+b = ", a+b);
console.log("a+b = ", a+b);
console.log("a+b = ", a+b);