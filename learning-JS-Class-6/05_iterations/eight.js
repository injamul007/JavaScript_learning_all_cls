//***************************** Reduce Method ************************************

const myNum = [1,2,3,4,5,6,7,8,9,10]

// const myTotal = myNum.reduce((acc, currVal) => {    //? these are the accumulator value and the currentValue of Reduce method.
//   console.log(`Acc : ${acc} and currVal : ${currVal}`);
//   return acc + currVal
// }, 0) //? <-  you have to initializing the the accumulator value. 

const myTotal = myNum.reduce((acc,currVal) => acc + currVal, 0) //? this is a shortest method without opening any scopes.

console.log(myTotal); 


const shoppingCart = [
  {
    itemName: "JS-course",
    price: 2999
  },
  {
    itemName: "Py-course",
    price: 1999
  },
  {
    itemName: "CPP-course",
    price: 4999
  }
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);

