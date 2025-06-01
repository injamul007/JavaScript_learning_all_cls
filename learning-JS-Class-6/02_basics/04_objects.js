//*** Objects part 2

// const tinderUser = new Object(); //? this is a singleton object.

const tinderUser = {} //? this is a non-singleton object.

tinderUser.id = "123abc"
tinderUser.name = "Boss"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullName: {
    userFullName: {
      firstName: "Boss",
      lastName: "IsAlwaysRight"
    }
  }
}

// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "e", 6: "f"}

// const obj3 = {obj1, obj2}
//? Target , Source -->> Source will be added in the Target .
// const obj3 = Object.assign({}, obj1, obj2, obj4) //? concat/merge 2 different object in one with assign method.

const obj3 = {...obj1, ...obj2, ...obj4} //? concat/merge 2 different object in one with this Spread Method. *** this is more important and useful.

// console.log(obj3);


const users = [
  {
    id: 1,
    email: "h@gmail.com"
  },
  {
    id: 2,
    email: "i@gmail.com"
  },
  {
    id: 3,
    email: "j@gmail.com"
  }
]

// console.log(users[1].email);
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); //? this will make an array output which will be array keys.
// console.log(Object.values(tinderUser)); //? this will make an arrays output of value.
// console.log(Object.entries(tinderUser)); //? this will make nested arrays output and display entries of an objects.

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); //? this method is for to ask something that you wanna know about this property exist or not?!

const course = {
  courseName: "Js Learning",
  price: "999",
  courseInstructor: "Boss"
}

// course.courseInstructor

const {courseInstructor: instructor} = course //? the modern way to access or ***destructor an objects key value.

console.log(instructor);

// {  //? JSOn API Calling
//   "name": "Boss",
//   "courseName": "js Learning",
//   "price": "free"
// }