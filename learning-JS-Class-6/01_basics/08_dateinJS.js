//************************** Dates ***************************** */

let myDate = new Date() //? now it is Object type.
// console.log(myDate.toString()); //? convert date into string type date.
// console.log(myDate.toDateString()); //? convert date into DateString type date.
// console.log(myDate.toISOString()); //? convert date into ISOString type date.
// console.log(myDate.toLocaleDateString()); //? convert date into LocalDateString type date.
// console.log(myDate.toLocaleString()); //? convert date into LocaleString type date.
// console.log(myDate.toLocaleTimeString()); //? convert date into LocaleTimeString type date(only get Time from it).

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
let myCreatedDate = new Date("02-14-2023")
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()

console.log(newDate);
console.log(newDate.getMonth() + 1); //? Add +1 because of index starts from 0. so now it will start from 1.
console.log(newDate.getDay() + 1); //? same as like uppers comment.

newDate.toLocaleString('default', {
  weekday: "long"
});