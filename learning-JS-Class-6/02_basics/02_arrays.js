//? arrays part 2

const marvel_heroes = ["thor", "iron-man", "spider-man"]
const dc_heroes = ["superman", "flash", "batman"]

// marvel_heroes.push(dc_heroes) //? It takes this as an array inside an array. this will push existing arrays.

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

// const allHeroes = marvel_heroes.concat(dc_heroes) //? this will return new arrays.

// console.log(allHeroes);


const all_new_heroes = [...marvel_heroes, ...dc_heroes] //? this will spread the arrays value individual and you can connect/concat more than 2 arrays from this method.

// console.log(all_new_heroes);


const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

console.log(Array.isArray("Boss")); //? this is not an array. result = false.
console.log(Array.from("Boss")); //? this will convert any strings into an arrays.

console.log(Array.from({name: "Boss"})); //? this won't convert because of it got confused of convert between the key and the value. // *** interesting case for interview

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //? this will convert numbers variables into an arrays

