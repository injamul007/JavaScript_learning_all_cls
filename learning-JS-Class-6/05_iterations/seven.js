

const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newNumbers = myNumbers.map((num) => num + 10) //? add 10 to each for all.

const newNumbers = myNumbers.map((num) => num * 10) //? Chaining method of map and other functions.
                            .map((num) => num + 1)
                            .filter((num) => num >= 40) //? true and false type of game is filter.

console.log(newNumbers);

