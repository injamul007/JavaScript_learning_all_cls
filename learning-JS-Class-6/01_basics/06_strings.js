const myName = "Boss"
const repoCount = 23

// console.log(name + repoCount + "Value"); //? The old types of writing a strings.

// console.log(``) //? String Interpolation //*** Backtick is the Modern touch to use a string


console.log(`Hello my name is ${myName.toUpperCase()} and my repo count is ${repoCount}`);

const gameName = new String('Boss-hc-com')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length)
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('s'));


const newString = gameName.substring(0, 3);  //?to cut of a strings or slice.

console.log(newString);

const anotherString = gameName.slice(-4, 3); //? it takes negative value

console.log(anotherString);

const newStringOne = "    Boss    "

console.log(newStringOne);

console.log(newStringOne.trim()); //? it removes extra and unnecessary white spaces.

const url = "https://bossBD%20willWin"

console.log(url.replace('%20', '-')); //? it replace to the old value to new value.


console.log(url.includes('boss')); //? You can ask whether a value has existed or not using this method.

console.log(gameName.split('-')); //? it split it.