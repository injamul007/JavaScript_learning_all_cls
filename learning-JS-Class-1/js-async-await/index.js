//! Async await function ----


// async function getData() {
//   setTimeout(function() {
//     console.log("I am inside set Timeout block")
//   }, 1000);
// }

// Await -?

// Fetch API -?

async function getData() {

  // get request - async
  let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');

  console.log( response );
}

// scenario:
// prepare url/ api endpoint -> sync
//await // fetch data -> network call -> async
// process data ->sync