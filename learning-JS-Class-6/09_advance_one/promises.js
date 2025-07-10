//******************** Promises************************

// const promiseOne = new Promise (function(resolve, reject) {
//   // Do an async task
//   // DB calls, cryptography, network
//   setTimeout(function() {
//     console.log("Async task is complete");
//     resolve()
//   },2000)
// })

// promiseOne.then(function() {
//   console.log("Promise consumed");
// })


// new Promise(function(resolve,reject) {
//   setTimeout(function() {
//     console.log("Async task 2")
//     resolve(200)
//   },2000)
// }).then(function() {
//   console.log("Async 2 resolved");
// })


// const promiseThree = new Promise(function(resolve,reject) {
//   setTimeout(function() {
//     resolve({username: "chai", email: "chai@example.com"})
//   },2000)
// })

// promiseThree.then(function(user) {
//   console.log(user);
// })

const promiseFour = new Promise(function(resolve,reject) {
  setTimeout (function() {
    let error = true
    if(!error) {
      resolve({username: "Boss", password: 123})
    } else {
      reject("Error: something went wrong")
    }
  },2000)
})

promiseFour.
then(function(user) {
  console.log(user);
  return user.username
})
.then((username) => {
  console.log(username)
})
.catch((error) => {
  console.log(error)
}).finally(() => console.log("The promise is either resolved or rejected"))


const promiseFive = new Promise(function(resolve,reject) {
  setTimeout (function() {
    let error = true
    if(!error) {
      resolve({username: "JavaScript", password: 123})
    } else {
      reject("Error: JS went wrong")
    }
  },2000)
})

async function consumePromiseFive() { 
  try {
    const response = await promiseFive //? one problem with async await is it can not handle error directly.
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}

consumePromiseFive()


// async function getAllUsers() {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data)
//   } catch (error) {
//     console.log("E:", error)
//   }
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
return response.json()
}).then((data) => {
  console.log(data)
}).catch((error) => console.log("E :",error));

